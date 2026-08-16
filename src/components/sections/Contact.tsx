"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Mail, Send, Download, MapPin, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      console.warn("Web3Forms access key is missing. Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your .env.local file.");
    }
    
    formData.append("access_key", accessKey || "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        form.reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.message || "Failed to send message. Please check your configuration.");
      }
    } catch (error) {
      console.error("Submission error details:", error);
      setSubmitStatus("error");
      setErrorMessage("A network error occurred. Please try again later.");
    }
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
                  name="name"
                  required
                  disabled={submitStatus === "submitting"}
                  placeholder="e.g. Hiring Manager / Recruiter"
                  className="w-full bg-[#030303]/80 border border-primary/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-mono font-bold text-gray-300 ml-1">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  disabled={submitStatus === "submitting"}
                  placeholder="recruiter@company.com"
                  className="w-full bg-[#030303]/80 border border-primary/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono font-bold text-gray-300 ml-1">Message Details</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  required
                  disabled={submitStatus === "submitting"}
                  placeholder="Let's connect regarding software engineering opportunities..."
                  className="w-full bg-[#030303]/80 border border-primary/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {submitStatus === "error" && errorMessage && (
                <div className="flex items-center gap-2 p-3 text-xs text-error bg-error/10 border border-error/20 rounded-xl font-mono">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {!process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY && (
                <div className="text-[11px] text-amber-400/80 bg-amber-400/5 border border-amber-400/10 p-2.5 rounded-xl font-mono leading-relaxed">
                  ⚠️ <strong>Access Key Missing:</strong> Please add <code>NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY</code> to your <code>.env.local</code>. Get one free at <a href="https://web3forms.com" target="_blank" rel="noreferrer" className="underline hover:text-amber-300">web3forms.com</a>.
                </div>
              )}

              <Button 
                className="w-full group glow-primary" 
                size="lg" 
                type="submit"
                disabled={submitStatus === "submitting"}
              >
                {submitStatus === "submitting" ? (
                  <span className="flex items-center gap-2 text-[#000000] font-bold">
                    <Loader2 size={18} className="animate-spin" /> Sending Message...
                  </span>
                ) : submitStatus === "success" ? (
                  <span className="flex items-center gap-2 text-success font-bold">
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
