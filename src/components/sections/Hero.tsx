"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden technical-grid">
      {/* Glow Effect */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/20">
              Available for Internships
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-background leading-tight mb-6">
              Hi, I'm <span className="text-primary">Yogesh Patil</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-background/60 leading-relaxed mb-10 font-medium">
              A Full Stack Developer specializing in the <span className="text-on-background">MERN Stack</span> to build 
              scalable, high-performance web solutions with technical precision.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="group" asChild>
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                  <Download className="ml-2" size={20} />
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/Yogesh0314" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-on-background/40 hover:text-primary transition-colors"
              >
                <FaGithub size={28} />
              </a>
              <a 
                href="https://www.linkedin.com/in/yogesh0314/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-on-background/40 hover:text-primary transition-colors"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
