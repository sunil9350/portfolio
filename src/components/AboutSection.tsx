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
              I'm a software engineer with a passion for building elegant,
              performant, and scalable applications. With several years of
              experience in full-stack development, I enjoy turning complex
              problems into simple, beautiful solutions.
            </p>
            <p>
              I've had the privilege of working across startups and established
              companies, building everything from real-time dashboards to
              distributed microservices. My focus is always on writing clean,
              maintainable code that stands the test of time.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or sharing knowledge through
              technical writing and mentoring.
            </p>
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
