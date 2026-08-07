"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { FaGithub } from "react-icons/fa6";
import { ExternalLink, Code2, Layers } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  image?: string;
  metrics?: string;
}

const projects: Project[] = [
  {
    title: "AI-Based Traffic Control System",
    subtitle: "Intelligent Computer Vision Vehicle Density Estimator",
    description:
      "Engineered real-time traffic signal optimization leveraging YOLOv8 object detection to estimate vehicle density and dynamically set signal timings to reduce urban congestion.",
    tags: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Flask", "Computer Vision"],
    github: "https://github.com/Yogesh0314/AI-Based-Tra-ic-Control-System",
    metrics: "YOLOv8 Real-time Inference",
    image: "/projects/ai-traffic-control.jpg",
  },
  {
    title: "API Cost Guardian",
    subtitle: "Backend Rate Limiting & Usage Tracking Middleware",
    description:
      "Production-grade backend system monitoring request frequency, tracking API consumption costs, enforcing quota thresholds, and preventing server overruns.",
    tags: ["Node.js", "Express.js", "MongoDB", "REST API", "Middleware"],
    github: "https://github.com/Yogesh0314/API-Cost-Guardian",
    metrics: "Automated Cost Guard Middleware",
    image: "/projects/api-cost-guardian.jpg",
  },
  {
    title: "SeekerScope",
    subtitle: "Interactive Job Search & Recruitment Portal",
    description:
      "Full-stack career management platform with career roadmap trackers, recruiter dashboards, application submission systems, and candidate profile management.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Yogesh0314/SeekerScope",
    metrics: "Full MERN Recruitment Hub",
    image: "/projects/seeker-scope.jpg",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface-container/20 relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold uppercase mb-4">
              <Layers size={14} />
              <span>Full-Stack Engineering</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-background mb-4 tracking-tight">
              Featured <span className="gradient-text">Software Projects</span>
            </h2>
            <p className="text-on-background/60 max-w-xl text-sm sm:text-base">
              A curated collection of web applications, computer vision systems, and backend rate-limiting middleware built with modern developer standards.
            </p>
          </div>
          <Button variant="outline" asChild className="border-primary/30 hover:border-primary">
            <a href="https://github.com/Yogesh0314" target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-2" size={18} />
              View GitHub Repositories
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl glass-card overflow-hidden hover:border-primary/50 transition-all border border-primary/15"
            >
              {/* Top Banner / Image Placeholder */}
              <div className="aspect-video bg-[#0a1020] flex items-center justify-center relative overflow-hidden border-b border-primary/15">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-primary/30 p-6 text-center">
                    <Code2 size={40} className="group-hover:scale-110 text-primary transition-transform duration-500 mb-2" />
                    <span className="text-xs font-mono text-gray-400">{project.subtitle}</span>
                  </div>
                )}
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-background/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary text-[#000f45] font-bold hover:scale-110 transition-transform shadow-lg"
                    title="View Source Code"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-tertiary text-[#000f45] font-bold hover:scale-110 transition-transform shadow-lg"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-xs font-mono text-tertiary mb-3">{project.subtitle}</p>

                  <p className="text-on-background/70 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {project.metrics && (
                    <div className="mb-4 text-[11px] font-mono text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded-lg">
                      ⚡ {project.metrics}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-primary/10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-bright text-gray-300 border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
