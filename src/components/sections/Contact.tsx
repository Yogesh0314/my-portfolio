"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface-container/30">
      <Container>
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-on-background mb-6">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-on-background/60 text-lg mb-10 leading-relaxed">
              I'm currently looking for internship opportunities and would love to 
              discuss how I can contribute to your team. Whether you have a question 
              or just want to say hi, I'll get back to you as soon as possible!
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:patilyogesh7103@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-primary/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-background/40 uppercase tracking-wider">Email</h4>
                  <p className="text-on-background font-medium">patilyogesh7103@gmail.com</p>
                </div>
              </a>

              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/yogesh0314/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-4 p-4 rounded-xl glass-card hover:border-primary/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <FaLinkedin size={24} />
                  </div>
                  <h4 className="text-on-background font-medium">LinkedIn</h4>
                </a>
                <a 
                  href="https://github.com/Yogesh0314" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-4 p-4 rounded-xl glass-card hover:border-primary/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <FaGithub size={24} />
                  </div>
                  <h4 className="text-on-background font-medium">GitHub</h4>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="p-8 rounded-2xl glass-card space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-on-background/60 ml-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name"
                  className="w-full bg-surface/50 border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-on-background/60 ml-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="your@email.com"
                  className="w-full bg-surface/50 border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-on-background/60 ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-surface/50 border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                />
              </div>
              <Button className="w-full group" size="lg">
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
