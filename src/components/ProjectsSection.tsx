"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "ELIVAAS Booking Platform",
    description:
      "Property detail pages, booking flows, sliders, and responsive UI systems optimized for SEO and performance across ELIVAAS and AlyaStays.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "CRS — Agent Portal",
    description:
      "Booking dashboards, filters, dynamic forms, and operational workflows for internal teams managing bookings and guest operations.",
    tech: ["React.js", "Next.js", "Material UI", "REST APIs"],
    github: "#",
    live: "#",
  },
  {
    title: "Headless CMS Blog",
    description:
      "WordPress backend integrated with a Next.js frontend for fast, SEO-friendly blog delivery using a headless CMS architecture.",
    tech: ["Next.js", "Headless WordPress", "PHP", "GraphQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Transactional Email System",
    description:
      "Dynamic transactional email system built with Thymeleaf featuring conditional rendering and refund workflows.",
    tech: ["Thymeleaf", "HTML", "CSS", "REST APIs"],
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
