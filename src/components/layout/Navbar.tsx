"use client";

import { useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X, FileText, Download } from "lucide-react";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Coding", href: "/#coding" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-[#050505]/90 backdrop-blur-md border-outline-variant/30 py-3 shadow-lg shadow-black/40"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold text-primary tracking-tight flex items-center gap-1">
          <span>YP</span>
          <span className="text-tertiary">.dev</span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary hidden sm:inline-block ml-2">
            Full Stack
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-on-background/70 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/resume"
            className="text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-1.5"
          >
            <FileText size={14} className="text-tertiary" />
            <span>Resume Hub</span>
          </Link>

          {/* Direct Resume PDF Download */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-[#000000] font-bold text-xs font-mono hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-md shadow-primary/20"
          >
            <Download size={14} />
            <span>Resume PDF</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-on-background p-2 rounded-lg bg-surface/50 border border-outline-variant/20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface-container/95 backdrop-blur-xl border-b border-outline-variant/30 p-5 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-on-background/80 hover:text-primary py-1.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-outline-variant/30 flex flex-col gap-2.5">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-[#000000] font-bold text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download size={16} />
                <span>Download Resume PDF</span>
              </a>

              <Link
                href="/resume"
                className="w-full text-center py-2 rounded-lg bg-surface-bright text-xs font-mono text-cyan-300 border border-cyan-400/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                View Resume Hub Page
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
