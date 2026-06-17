import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

async function runCommand(
  command: string,
  args: string[],
  cwd: string = rootDir,
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    console.log(`\n📦 Running: ${command} ${args.join(" ")}`);
    const proc = spawn(command, args, {
      cwd,
      stdio: "inherit",
      shell: true,
    });

    proc.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(`Command failed with code ${code}: ${command}`));
      } else {
        resolve();
      }
    });

    proc.on("error", (err) => {
      reject(err);
    });
  });
}

async function build(): Promise<void> {
  try {
    console.log("🚀 Starting build process...\n");

    // Type check
    console.log("✓ Running TypeScript type check...");
    await runCommand("npx", ["tsc", "--noEmit"], rootDir);

    // Build client with Vite
    console.log("✓ Building client with Vite...");
    await runCommand("npx", ["vite", "build"], rootDir);

    // Ensure dist/public directory exists
    const distDir = path.resolve(rootDir, "dist");
    const publicDir = path.resolve(distDir, "public");

    if (!fs.existsSync(publicDir)) {
      console.log(`✓ Creating dist/public directory...`);
      fs.mkdirSync(publicDir, { recursive: true });
    }

    console.log("\n✅ Build completed successfully!");
    console.log(`📁 Output directory: ${publicDir}`);
  } catch (error) {
    console.error("\n❌ Build failed:", error);
    process.exit(1);
  }
}

build();
