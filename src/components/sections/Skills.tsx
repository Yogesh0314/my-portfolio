"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Cpu, CheckCircle } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...resumeData.skills.map((s) => s.category)];

  const filteredCategories =
    activeCategory === "All"
      ? resumeData.skills
      : resumeData.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold uppercase mb-4">
            <Cpu size={14} />
            <span>Developer Competencies</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-background mb-4 tracking-tight">
            Technical <span className="gradient-text">Skill Matrix</span>
          </h2>
          <p className="text-on-background/60 max-w-2xl mx-auto text-sm sm:text-base">
            Core stack technologies, libraries, databases, and engineering tools tested in production projects.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat
                  ? "bg-primary text-[#000f45] font-bold shadow-lg shadow-primary/20 scale-105"
                  : "bg-surface-bright/40 text-gray-300 hover:bg-surface-bright border border-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredCategories.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl glass-card border border-primary/15 hover:border-primary/35 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-tertiary" />
                    {group.category}
                  </h3>
                  <span className="text-[11px] font-mono text-gray-400 bg-surface-bright px-2.5 py-1 rounded-md border border-primary/10">
                    {group.skills.length} skills
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {group.skills.map((sk, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-surface/70 border border-primary/10 hover:border-primary/30 transition-all flex flex-col justify-between group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-gray-200 group-hover:text-tertiary transition-colors">
                          {sk.name}
                        </span>
                        <CheckCircle size={12} className="text-tertiary opacity-75" />
                      </div>
                      
                      {/* Skill Level Progress Bar */}
                      <div className="w-full bg-surface-bright rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-primary to-tertiary h-1.5 rounded-full transition-all duration-700"
                          style={{ width: `${sk.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
