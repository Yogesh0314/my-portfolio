"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { FaGithub } from "react-icons/fa6";
import { ExternalLink, Code2 } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";

const projects = [
  {
    title: "College Compass",
    description: "A comprehensive platform for college searching, comparison, and student reviews. Features personalized recommendations and saved colleges.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    github: "https://github.com/Yogesh0314/College_compass",
    live: "https://college-compass-1.vercel.app/",
    image: "/projects/college-compass.png",
  },
  {
    title: "Sports Department Management",
    description: "Full-stack system for university sports management including student/admin dashboards and document verification for players.",
    tags: ["React.js", "Node.js", "PostgreSQL", "Express.js"],
    github: "https://github.com/Yogesh0314/university_sports_department",
    image: "/projects/sports-system.png",
  },
  {
    title: "Inventory Management System",
    description: "A full-stack inventory management application for tracking products, categories, and stock records with efficient MongoDB integration.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/Yogesh0314/",
    image: null, // No screenshot yet
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface-container/20">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-on-background mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-on-background/60 max-w-xl">
              A selection of my recent work, ranging from complex full-stack applications 
              to specialized management systems.
            </p>
          </div>
          <Button variant="outline" asChild>
            <a href="https://github.com/Yogesh0314" target="_blank" rel="noopener noreferrer">
              View All on GitHub
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl glass-card overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="aspect-video bg-surface-bright flex items-center justify-center relative overflow-hidden border-b border-outline-variant/20">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <Code2 size={48} className="text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                )}
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary text-on-primary hover:scale-110 transition-transform"
                    title="View Code"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-tertiary text-on-tertiary hover:scale-110 transition-transform"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-on-background mb-2">{project.title}</h3>
                <p className="text-on-background/60 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-outline-variant/30">
                  <a href={project.github} className="text-sm font-bold text-on-background/70 hover:text-primary transition-colors inline-flex items-center gap-2">
                    <FaGithub size={16} /> Code
                  </a>
                  {project.live && (
                    <a href={project.live} className="text-sm font-bold text-on-background/70 hover:text-tertiary transition-colors inline-flex items-center gap-2">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
