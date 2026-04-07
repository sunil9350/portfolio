"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Cloud Dashboard",
    description:
      "Real-time infrastructure monitoring platform with live metrics, alerting, and team collaboration features.",
    tech: ["React", "TypeScript", "Go", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "DevFlow CLI",
    description:
      "Developer productivity CLI tool that automates git workflows, code reviews, and deployment pipelines.",
    tech: ["Rust", "Shell", "GitHub API"],
    github: "#",
    live: "#",
  },
  {
    title: "Neural Search",
    description:
      "AI-powered semantic search engine for documentation with vector embeddings and natural language queries.",
    tech: ["Python", "FastAPI", "React", "Pinecone"],
    github: "#",
    live: "#",
  },
  {
    title: "PaySync API",
    description:
      "Payment orchestration microservice handling multi-provider transactions with automatic failover.",
    tech: ["Node.js", "Stripe", "Redis", "Docker"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">03.</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 glow"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={28} />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-semibold font-display text-foreground group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
