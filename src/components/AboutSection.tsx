"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">01.</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a frontend-focused Software Developer with 5+ years of
              experience building scalable, high-performance web applications
              using React.js, Next.js, WordPress, PHP, and modern UI frameworks.
            </p>
            <p>
              At ELIVAAS I build booking platform features, CRS agent-portal
              workflows, and reusable UI systems with Material UI and Shadcn UI —
              improving Lighthouse scores and SEO through lazy loading, code
              splitting, and rendering optimizations. I've also built headless
              WordPress architectures integrated with a Next.js frontend for fast,
              SEO-friendly delivery.
            </p>
            <p>
              I care about clean, maintainable code, responsive mobile-first
              interfaces, and end-to-end feature ownership — turning complex
              problems into simple, performant solutions.
            </p>

            <div className="pt-2">
              <h3 className="font-mono text-primary text-sm font-semibold mb-3">
                Key Strengths
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Performance Optimization",
                  "Responsive UI Development",
                  "Reusable Component Architecture",
                  "SEO Optimization",
                  "Problem Solving",
                  "End-to-End Feature Ownership",
                ].map((strength) => (
                  <span
                    key={strength}
                    className="font-mono text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg bg-secondary border border-border overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center font-mono text-6xl text-primary/20">
                {"{ }"}
              </div>
              <div className="absolute inset-0 border-2 border-primary/20 rounded-lg translate-x-3 translate-y-3 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
