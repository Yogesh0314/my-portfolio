"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { GraduationCap, Code2, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-surface-container/30">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-on-background mb-6">
              Engineering <span className="text-primary">Impactful Solutions</span>
            </h2>
            <div className="space-y-6 text-on-background/70 text-lg leading-relaxed">
              <p>
                I am a dedicated Computer Science student with a passion for building robust 
                and scalable software systems. My journey in development is driven by a 
                curiosity to understand how complex systems work and a desire to create 
                tools that solve real-world problems.
              </p>
              <p>
                Currently pursuing my B.Tech at KIT College of Engineering, I've focused 
                on mastering modern web technologies, with a particular 
                emphasis on the <strong>MERN Stack</strong> (MongoDB, Express, React, Node.js) 
                and building seamless, full-stack applications.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl glass-card text-center">
                <Code2 className="mx-auto mb-2 text-primary" size={24} />
                <h4 className="text-sm font-bold text-on-background">Developer</h4>
              </div>
              <div className="p-4 rounded-xl glass-card text-center">
                <GraduationCap className="mx-auto mb-2 text-tertiary" size={24} />
                <h4 className="text-sm font-bold text-on-background">Engineer</h4>
              </div>
              <div className="p-4 rounded-xl glass-card text-center">
                <Rocket className="mx-auto mb-2 text-primary" size={24} />
                <h4 className="text-sm font-bold text-on-background">Innovator</h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl glass-card border-primary/20">
              <h3 className="text-xl font-bold text-on-background mb-6 flex items-center gap-2">
                <GraduationCap className="text-primary" />
                Education
              </h3>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-outline-variant/30">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <div>
                    <span className="text-sm font-bold text-primary uppercase tracking-wider">2023 — 2027</span>
                    <h4 className="text-lg font-bold text-on-background mt-1">B.Tech in Computer Science</h4>
                    <p className="text-on-background/60">KIT College of Engineering, Kolhapur</p>
                    <p className="text-tertiary font-medium mt-2">Current CGPA: 8.5+</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
