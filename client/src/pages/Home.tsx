import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Footer component inline for simplicity in this specific file structure
function Footer() {
  return (
    <footer className="bg-primary/95 text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-display font-bold text-xl tracking-wide">
            InnovateStudio<span className="text-accent">.</span>
          </span>
          <p className="text-white/50 text-sm mt-2">
            © {new Date().getFullYear()} Innovation Strategy Group. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8 text-sm text-white/70">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen font-body selection:bg-accent selection:text-white">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary pt-20">
          {/* Abstract Hero Background Image - Business/Architecture vibe */}
          <div className="absolute inset-0 z-0">
             {/* Unsplash: Modern abstract architecture, conveying scale and precision */}
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
              alt="Modern Architecture"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
          </div>

          <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-1.5 mb-6 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
                <span className="text-accent font-medium tracking-wider text-sm uppercase">Global Innovation Strategy</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                Transforming <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Manufacturing</span>
                <br /> through Innovation
              </h1>
              <p className="text-xl text-white/70 mb-8 max-w-lg leading-relaxed">
                Expert consultation for manufacturers seeking to upgrade products and dominate global markets through strategic development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-sm font-semibold text-lg transition-all shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Start Transformation <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/10 rounded-sm font-semibold text-lg transition-all flex items-center justify-center"
                >
                  Our Philosophy
                </button>
              </div>
            </motion.div>

            {/* Decorative Hero Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-6">
                  <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse" />
                  <div className="h-4 bg-white/10 rounded w-1/2 animate-pulse" />
                  <div className="h-32 bg-white/5 rounded w-full border border-dashed border-white/10 flex items-center justify-center">
                    <span className="text-white/30 font-mono text-sm">Strategic Analysis Module</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <div className="flex gap-2">
                       <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">Growth</span>
                       <span className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded">Scale</span>
                    </div>
                    <span className="text-white/40 text-sm font-mono">Loading metrics...</span>
                  </div>
                </div>
              </div>
              {/* Abstract decorative shapes behind */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                {/* Unsplash: Minimalist office detail or professional working */}
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                  alt="Consultation meeting"
                  className="rounded-sm shadow-xl w-full object-cover h-[500px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-sm text-white max-w-xs shadow-lg hidden md:block">
                  <p className="font-display text-2xl font-bold mb-2">15+ Years</p>
                  <p className="text-white/70">Of global experience optimizing manufacturing workflows.</p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Precision in Every Strategy</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We believe that true innovation lies at the intersection of creative vision and disciplined execution. Our approach to business consultation is rooted in data, yet driven by a passion for creating products that matter.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  From local manufacturers aiming to scale, to global entities refining their product lines, we provide the roadmap to future-proof your business.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Strategic Product Roadmap Design",
                    "Global Supply Chain Optimization",
                    "Innovation & R&D Consultation",
                    "Market Entry Analysis"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="font-medium text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Services />
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
