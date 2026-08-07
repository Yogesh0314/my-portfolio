"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { GraduationCap, Code2, Rocket, Sparkles } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 bg-surface-container/30 relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Profile Photo Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] h-auto">
              
              {/* Outer Decorative Glow Rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/30 via-tertiary/20 to-primary/10 blur-2xl opacity-60 pointer-events-none" />
              
              {/* Image Glass Frame */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card border-2 border-primary/30 p-2.5 shadow-2xl group flex flex-col">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Yogesh Patil"
                    fill
                    unoptimized
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/15 to-transparent opacity-80" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-background/85 backdrop-blur-md border border-outline-variant/30 text-center shadow-lg">
                  <h3 className="text-base font-extrabold text-on-background">Yogesh Patil</h3>
                  <p className="text-xs font-semibold text-primary">Full Stack MERN Developer & Engineer</p>
                </div>
              </div>

              {/* Floating MERN Stack Badges */}
              <div className="absolute -top-3 -right-2 px-3 py-1.5 rounded-xl bg-background/90 backdrop-blur-md border border-primary/40 text-xs font-bold text-on-background flex items-center gap-1.5 shadow-xl">
                <FaReact className="text-[#61DAFB]" size={14} />
                <span>React / Next</span>
              </div>

              <div className="absolute -bottom-3 -right-2 px-3 py-1.5 rounded-xl bg-background/90 backdrop-blur-md border border-tertiary/40 text-xs font-bold text-on-background flex items-center gap-1.5 shadow-xl">
                <FaNodeJs className="text-[#5FA04E]" size={14} />
                <span>Node.js</span>
              </div>

              <div className="absolute top-1/2 -left-3 px-3 py-1.5 rounded-xl bg-background/90 backdrop-blur-md border border-primary/40 text-xs font-bold text-on-background flex items-center gap-1.5 shadow-xl hidden sm:flex">
                <SiMongodb className="text-[#47A248]" size={14} />
                <span>MongoDB</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Stats & Education (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={14} />
              <span>About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-on-background mb-6 leading-tight">
              Engineering <span className="text-primary">Scalable & Intelligent</span> Web Platforms
            </h2>
            
            <div className="space-y-4 text-on-background/75 text-base sm:text-lg leading-relaxed font-normal mb-8">
              <p>
                I am a Computer Science student and Full Stack Software Engineer focused on building robust, high-performance web systems using the <strong className="text-on-background font-bold">MERN Stack</strong> (MongoDB, Express.js, React.js, Node.js).
              </p>
              <p>
                Currently pursuing my B.Tech at <strong className="text-on-background font-bold">KIT College of Engineering, Kolhapur</strong>, I enjoy turning complex challenges into clean, maintainable code—whether creating AI-driven traffic systems, API rate-limiting guardians, or full-stack career portals.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-3.5 rounded-2xl glass-card text-center border-primary/20">
                <Code2 className="mx-auto mb-1 text-primary" size={22} />
                <h4 className="text-xl sm:text-2xl font-extrabold text-on-background">3+</h4>
                <p className="text-[10px] sm:text-xs text-on-background/60 font-bold uppercase tracking-wider">Projects Built</p>
              </div>
              <div className="p-3.5 rounded-2xl glass-card text-center border-tertiary/20">
                <GraduationCap className="mx-auto mb-1 text-tertiary" size={22} />
                <h4 className="text-xl sm:text-2xl font-extrabold text-on-background">8.5+</h4>
                <p className="text-[10px] sm:text-xs text-on-background/60 font-bold uppercase tracking-wider">B.Tech CGPA</p>
              </div>
              <div className="p-3.5 rounded-2xl glass-card text-center border-primary/20">
                <Rocket className="mx-auto mb-1 text-primary" size={22} />
                <h4 className="text-xl sm:text-2xl font-extrabold text-on-background">MERN</h4>
                <p className="text-[10px] sm:text-xs text-on-background/60 font-bold uppercase tracking-wider">Specialist</p>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-6 rounded-2xl glass-card border border-outline-variant/30 relative">
              <h3 className="text-base font-bold text-on-background mb-4 flex items-center gap-2">
                <GraduationCap className="text-primary" size={20} />
                Education Journey
              </h3>
              <div className="relative pl-6 border-l-2 border-primary/40">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                    2023 — 2027
                  </span>
                  <h4 className="text-base font-extrabold text-on-background mt-2">B.Tech in Computer Science & Engineering</h4>
                  <p className="text-on-background/70 text-sm mt-0.5">KIT College of Engineering, Kolhapur</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}
