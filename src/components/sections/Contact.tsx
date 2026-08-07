"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Mail, Send, Download, MapPin, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-surface-container/30 relative overflow-hidden">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold uppercase mb-4">
              <Mail size={14} />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-background mb-6 tracking-tight">
              Let&apos;s Build <span className="gradient-text">Great Software</span> Together
            </h2>
            <p className="text-on-background/70 text-base mb-8 leading-relaxed">
              Currently open to <strong className="text-white">Software Engineering Internships</strong>, full-stack web roles, and technical collaborations. Feel free to reach out via email, social handles, or download my resume.
            </p>

            <div className="space-y-4 mb-8">
              <a 
                href="mailto:patilyogesh314@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:border-primary/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Email Address</h4>
                  <p className="text-white font-medium text-sm sm:text-base">patilyogesh314@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-primary/10">
                <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Location</h4>
                  <p className="text-white font-medium text-sm sm:text-base">Kolhapur, Maharashtra, India</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <a 
                  href="https://www.linkedin.com/in/yogesh0314/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl glass-card hover:border-primary/40 transition-all text-center group"
                >
                  <FaLinkedin size={22} className="text-primary mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-300 font-mono">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/Yogesh0314" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl glass-card hover:border-primary/40 transition-all text-center group"
                >
                  <FaGithub size={22} className="text-white mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-300 font-mono">GitHub</span>
                </a>
                <a 
                  href="https://leetcode.com/u/yogesh0314/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl glass-card hover:border-amber-400/40 transition-all text-center group"
                >
                  <SiLeetcode size={22} className="text-amber-400 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-300 font-mono">LeetCode</span>
                </a>
              </div>
            </div>

            {/* Direct Resume Download Link */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-primary/20 via-tertiary/20 to-primary/20 border border-primary/40 text-white font-mono text-sm font-semibold hover:border-primary transition-all shadow-lg hover:shadow-primary/20"
            >
              <Download size={18} className="text-tertiary" />
              <span>Download Resume PDF</span>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="p-8 rounded-2xl glass-card border border-primary/20 space-y-5" onSubmit={handleSubmit}>
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-mono font-bold text-gray-300 ml-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  placeholder="e.g. Hiring Manager / Recruiter"
                  className="w-full bg-[#030303]/80 border border-primary/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-mono font-bold text-gray-300 ml-1">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  placeholder="recruiter@company.com"
                  className="w-full bg-[#030303]/80 border border-primary/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono font-bold text-gray-300 ml-1">Message Details</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  placeholder="Let's connect regarding software engineering opportunities..."
                  className="w-full bg-[#030303]/80 border border-primary/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button className="w-full group glow-primary" size="lg" type="submit">
                {submitted ? (
                  <span className="flex items-center gap-2 text-[#000000] font-bold">
                    <CheckCircle size={18} /> Message Sent!
                  </span>
                ) : (
                  <>
                    Send Direct Message
                    <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
