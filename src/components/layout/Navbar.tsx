"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Timeline", href: "#timeline" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 border border-border flex items-center justify-between px-6 backdrop-blur-xl ${
        scrolled
          ? "top-2 w-[95%] max-w-6xl h-14 rounded-full bg-background/90 shadow-sm"
          : "top-5 w-[90%] max-w-6xl h-16 rounded-[2rem] bg-background/60"
      }`}
    >
      <Link href="#hero" className="flex items-center gap-2 font-bold text-lg text-foreground hover:opacity-80 transition-opacity">
        <span>♟</span>
        <span className="tracking-tight">0xlightning</span>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === link.href.substring(1)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[70px] right-5 w-[calc(100vw-40px)] max-w-sm rounded-3xl bg-background/95 backdrop-blur-xl border border-border p-6 shadow-lg transition-all duration-300 md:hidden flex flex-col gap-4 ${
          mobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className={`text-base font-medium p-2 rounded-lg transition-colors ${
              activeSection === link.href.substring(1)
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
