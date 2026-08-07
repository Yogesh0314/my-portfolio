"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { ArrowRight, Terminal, Sparkles, Code2, Award, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import { useState, useEffect } from "react";


const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Problem Solver (400+ LeetCode Solved)",
];

function TypewriterText() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<"TYPING" | "PAUSED" | "DELETING">("TYPING");

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];

    if (phase === "TYPING") {
      if (displayedText.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, 85);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setPhase("DELETING");
        }, 2200);
        return () => clearTimeout(timeout);
      }
    }

    if (phase === "DELETING") {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setPhase("TYPING");
        }, 50);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedText, phase, currentRoleIndex]);

  return (
    <span className="text-tertiary font-mono font-bold inline-flex items-center">
      <span>{displayedText}</span>
      <span className="cursor-blink ml-1 text-tertiary font-normal">|</span>
    </span>
  );
}

export function Hero() {
  return (
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden technical-grid">
        {/* Glow Effects */}
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        
        {/* Decorative ambient lighting */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/10 blur-[120px] rounded-full pointer-events-none float-glow" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-tertiary/8 blur-[90px] rounded-full pointer-events-none float-glow" style={{ animationDelay: "3s" }} />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Column: Bio & Calls to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg code-block text-tertiary text-xs font-mono font-bold mb-6">
                <Terminal size={14} />
                <span className="text-on-background/50">~$</span>
                <span>yogesh.init() --status=ready_to_hire</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-background leading-[1.1] mb-4 tracking-tight">
                Hi, I&apos;m{" "}
                <span className="gradient-text">Yogesh Patil</span>
              </h1>

              <p className="text-lg sm:text-xl text-on-background/70 mb-3 font-medium min-h-[36px]">
                <TypewriterText />
              </p>

              <p className="text-sm sm:text-base text-on-background/60 leading-relaxed mb-8 max-w-xl">
                B.Tech Computer Science student at <span className="text-white font-semibold">KIT College of Engineering</span> (2027) with an <span className="text-tertiary font-mono font-bold">8.5+ CGPA</span>. Specialized in building high-performance web systems using React, Next.js, Node.js, and PostgreSQL.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3.5 mb-8">
                <Button size="lg" className="group glow-primary" asChild>
                  <Link href="#projects">
                    View Featured Work
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </Button>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-surface-bright to-surface border border-primary/40 hover:border-primary text-white text-sm font-semibold transition-all shadow-lg hover:shadow-primary/20 active:scale-95"
                >
                  <Download className="w-4 h-4 text-tertiary" />
                  <span>Download Resume PDF</span>
                </a>
              </div>

              {/* Social & Location Row */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/Yogesh0314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-card text-on-background/70 hover:text-primary hover:border-primary/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yogesh0314/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-card text-on-background/70 hover:text-primary hover:border-primary/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://leetcode.com/u/yogesh0314/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-card text-amber-400 hover:text-amber-300 hover:border-amber-400/40 transition-all"
                  aria-label="LeetCode Profile"
                >
                  <SiLeetcode size={20} />
                </a>

                <div className="h-6 w-px bg-outline-variant/40 mx-1" />
                
                <span className="text-xs text-on-background/50 font-mono">
                  📍 Kolhapur, Maharashtra, IN
                </span>
              </div>
            </motion.div>

            {/* Right Column: Live IDE Code Terminal Window */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative w-full max-w-md">
                {/* Code Card Window */}
                <div className="glass-card rounded-2xl p-5 shadow-2xl border border-primary/20 bg-[#08080a]/95">
                  {/* Window Bar */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-primary/15">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                      <span className="ml-2 text-xs text-gray-400 font-mono">developerProfile.ts</span>
                    </div>
                    <span className="text-[11px] font-mono text-tertiary">TypeScript</span>
                  </div>

                  {/* Code Editor Content */}
                  <div className="font-mono text-xs sm:text-sm space-y-1.5 text-gray-300">
                    <p><span className="text-purple-400">interface</span> <span className="text-cyan-300">Engineer</span> {"{"}</p>
                    <p className="ml-4"><span className="text-emerald-400">name</span>: <span className="text-amber-300">&quot;Yogesh Patil&quot;</span>;</p>
                    <p className="ml-4"><span className="text-emerald-400">education</span>: <span className="text-amber-300">&quot;KIT College CSE 2027&quot;</span>;</p>
                    <p className="ml-4"><span className="text-emerald-400">cgpa</span>: <span className="text-primary font-bold">8.5</span>;</p>
                    <p className="ml-4"><span className="text-emerald-400">leetCodeSolved</span>: <span className="text-tertiary font-bold">400</span>;</p>
                    <p className="ml-4"><span className="text-emerald-400">techStack</span>: [</p>
                    <p className="ml-8 text-cyan-300">&quot;React.js&quot;, &quot;Next.js&quot;, &quot;Node.js&quot;,</p>
                    <p className="ml-8 text-cyan-300">&quot;PostgreSQL&quot;, &quot;MongoDB&quot;, &quot;Java&quot;</p>
                    <p className="ml-4">];</p>
                    <p className="ml-4"><span className="text-emerald-400">status</span>: <span className="text-emerald-400">&quot;Available for Internships 🚀&quot;</span>;</p>
                    <p>{"}"}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-primary/10 flex items-center justify-between text-xs font-mono">
                    <Link
                      href="/resume"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      <Code2 size={12} />
                      <span>inspectResume()</span>
                    </Link>
                    <span className="text-gray-500">UTF-8</span>
                  </div>
                </div>

                {/* Floating Metric Badges */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 glass-card px-3.5 py-2 rounded-xl border border-tertiary/30 text-xs font-mono text-tertiary shadow-xl flex items-center gap-1.5"
                >
                  <Award size={14} />
                  <span>400+ LeetCode Solved</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 glass-card px-3.5 py-2 rounded-xl border border-primary/30 text-xs font-mono text-primary shadow-xl flex items-center gap-1.5"
                >
                  <Sparkles size={14} />
                  <span>8.5+ CGPA • KIT CSE</span>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>
  );
}
