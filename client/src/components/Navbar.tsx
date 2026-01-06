import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
           {/* Abstract logo icon */}
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white transform rotate-45" />
          </div>
          <span className={cn(
            "font-display font-bold text-xl tracking-wide",
            isScrolled || isMobileMenuOpen ? "text-primary" : "text-white"
          )}>
            INNOVATE<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                isScrolled ? "text-primary" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className={cn(
              "px-5 py-2.5 rounded-sm text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5",
              isScrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-white text-primary hover:bg-gray-100"
            )}
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-primary w-6 h-6" />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-primary" : "text-white")} />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-2xl font-display font-medium text-primary hover:text-accent"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-primary text-white font-semibold rounded-sm mt-4"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
}
