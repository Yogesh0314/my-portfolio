"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Trophy, Code, LineChart } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    stats: "400+ Solved",
    highlight: "78+ Medium Problems",
    link: "https://leetcode.com/u/yogesh0314/",
    color: "text-[#FFA116]",
    bg: "bg-[#FFA116]/10",
  },
  {
    name: "GeeksforGeeks",
    stats: "Active Solver",
    highlight: "Consistent Contributions",
    link: "https://www.geeksforgeeks.org/profile/patilyogg0bv?tab=activity",
    color: "text-[#2F8D46]",
    bg: "bg-[#2F8D46]/10",
  },
  {
    name: "GitHub",
    stats: "Active Developer",
    highlight: "Regular Project Commits",
    link: "https://github.com/Yogesh0314",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

export function CodingProfiles() {
  return (
    <section id="coding" className="py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-on-background mb-4">
            Problem <span className="text-primary">Solving</span>
          </h2>
          <p className="text-on-background/60 max-w-2xl mx-auto">
            My journey through competitive programming and technical challenges across various platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, idx) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl glass-card flex flex-col items-center text-center group"
            >
              <div className={`w-16 h-16 rounded-full ${profile.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {profile.name === "LeetCode" ? <Trophy className={profile.color} size={32} /> : 
                 profile.name === "GitHub" ? <Code className={profile.color} size={32} /> : 
                 <LineChart className={profile.color} size={32} />}
              </div>
              <h3 className="text-xl font-bold text-on-background mb-2">{profile.name}</h3>
              <p className={`text-2xl font-extrabold ${profile.color} mb-1`}>{profile.stats}</p>
              <p className="text-on-background/60 text-sm">{profile.highlight}</p>
              
              <div className="mt-6 text-sm font-bold text-on-background/40 group-hover:text-primary transition-colors flex items-center gap-2">
                View Profile
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl glass-card border-tertiary/20 bg-tertiary/5 text-center">
          <p className="text-on-background/80 font-medium">
            Focused on mastering <span className="text-tertiary">Data Structures & Algorithms</span> to build efficient, scalable software.
          </p>
        </div>
      </Container>
    </section>
  );
}
