"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "C++"],
    color: "primary",
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    color: "tertiary",
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "Prisma"],
    color: "primary",
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Docker"],
    color: "secondary",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-on-background mb-4">
            Technical <span className="text-primary">Toolbox</span>
          </h2>
          <p className="text-on-background/60 max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-card flex flex-col h-full"
            >
              <h3 className="text-lg font-bold text-on-background mb-6 flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-${category.color}`} />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-surface-bright/50 border border-outline-variant/30 text-sm font-mono text-on-background/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
