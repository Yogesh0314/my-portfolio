"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Trophy, Code, ExternalLink, Award, CheckCircle2 } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

const profiles = [
  {
    name: "LeetCode",
    username: "@yogesh0314",
    stats: "400+ Problems Solved",
    highlight: "78+ Medium Problems • DSA Focus (DP, Graphs, Trees)",
    link: "https://leetcode.com/u/yogesh0314/",
    color: "text-[#FFA116]",
    bg: "bg-[#FFA116]/10",
    border: "border-[#FFA116]/30",
    icon: SiLeetcode,
    badge: "Top Problem Solver",
  },
  {
    name: "GitHub",
    username: "@Yogesh0314",
    stats: "Active Open Source Repos",
    highlight: "Production Web Software, Microservices & AI Projects",
    link: "https://github.com/Yogesh0314",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/30",
    icon: FaGithub,
    badge: "Full-Stack Repos",
  },
  {
    name: "GeeksforGeeks",
    username: "patilyogg0bv",
    stats: "Active Algorithmic Practice",
    highlight: "Consistent Practice & Core CS Foundation",
    link: "https://www.geeksforgeeks.org/profile/patilyogg0bv?tab=activity",
    color: "text-[#2F8D46]",
    bg: "bg-[#2F8D46]/10",
    border: "border-[#2F8D46]/30",
    icon: Code,
    badge: "Core CS",
  },
];

export function CodingProfiles() {
  return (
    <section id="coding" className="py-24 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold uppercase mb-4">
            <Trophy size={14} />
            <span>Problem Solving & Competitive Programming</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-background mb-4 tracking-tight">
            Coding Profiles & <span className="text-amber-400">Algorithmic Benchmarks</span>
          </h2>
          <p className="text-on-background/60 max-w-2xl mx-auto text-sm sm:text-base">
            Demonstrating problem-solving rigor through verified data structures and algorithm challenges across platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <motion.a
                key={profile.name}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-2xl glass-card flex flex-col justify-between group border hover:border-primary/50 transition-all relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${profile.bg} ${profile.border} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={profile.color} size={28} />
                  </div>
                  <span className="text-[11px] font-mono text-gray-300 bg-surface-bright px-2.5 py-1 rounded-lg border border-outline-variant/30 flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-tertiary" />
                    <span>{profile.badge}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-on-background flex items-center gap-2">
                    {profile.name}
                    <ExternalLink size={14} className="text-gray-400 group-hover:text-primary transition-colors" />
                  </h3>
                  <p className="text-xs font-mono text-gray-400 mb-3">{profile.username}</p>
                  
                  <p className={`text-2xl font-extrabold ${profile.color} font-mono mb-2`}>
                    {profile.stats}
                  </p>
                  <p className="text-on-background/70 text-xs leading-relaxed">
                    {profile.highlight}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-outline-variant/20 text-xs font-bold font-mono text-primary group-hover:text-tertiary transition-colors flex items-center justify-between">
                  <span>Explore Verified Handle</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Global DSA Stat Summary */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-tertiary/30 bg-gradient-to-r from-tertiary/5 via-primary/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-tertiary/10 text-tertiary">
              <Award size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">400+ LeetCode Algorithmic Milestones</h4>
              <p className="text-xs text-gray-300">Arrays, Strings, Hash Tables, Trees, Dynamic Programming, Graphs & Sorting algorithms</p>
            </div>
          </div>
          <a
            href="https://leetcode.com/u/yogesh0314/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-400/30 text-xs font-mono font-bold transition-all shrink-0"
          >
            Visit LeetCode Handle ↗
          </a>
        </div>
      </Container>
    </section>
  );
}
