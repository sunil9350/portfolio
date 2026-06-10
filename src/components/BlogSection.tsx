"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experience = [
  {
    role: "Software Development Engineer",
    company: "ELIVAAS",
    period: "Jan 2024 — Present",
    points: [
      "Developed scalable booking platform features using React.js and Next.js for ELIVAAS and AlyaStays.",
      "Built and optimized CRS (Agent Portal) workflows for booking and guest management operations.",
      "Developed reusable UI components using Material UI and Shadcn UI.",
      "Improved Lighthouse scores and SEO through lazy loading, code splitting, and rendering optimizations.",
      "Implemented booking flows, payment integrations, dynamic APIs, and responsive mobile-first interfaces.",
      "Built headless WordPress blog architecture integrated with a Next.js frontend.",
    ],
  },
  {
    role: "Associate Consultant — Development",
    company: "Oodles Technologies",
    period: "Oct 2021 — Dec 2023",
    points: [
      "Developed ERP and business management platforms using WordPress, PHP, MySQL, JavaScript, HTML, and CSS.",
      "Built custom themes, plugins, dashboards, dynamic forms, and workflow-based admin systems.",
      "Integrated third-party APIs including Google Calendar and contact systems.",
      "Improved performance, responsiveness, and SEO optimization for client platforms.",
    ],
  },
  {
    role: "Web Designer",
    company: "Technians SofTech Pvt. Ltd.",
    period: "Jan 2020 — Aug 2021",
    points: [
      "Developed responsive websites and landing pages for enterprise and healthcare clients.",
      "Worked on frontend implementation for ananda.in and maxhospitalindia.com.",
      "Built responsive email templates and pixel-perfect UI sections.",
    ],
  },
  {
    role: "Web Designer",
    company: "Rakun InfoTech Pvt. Ltd.",
    period: "Jan 2019 — May 2019",
    points: [
      "Developed responsive templates and landing pages using HTML, CSS, JavaScript, and Bootstrap.",
    ],
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">04.</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div className="flex items-start gap-3">
                  <Briefcase className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <h3 className="text-lg font-semibold font-display text-foreground">
                      {job.role}
                    </h3>
                    <p className="text-primary text-sm font-mono">
                      {job.company}
                    </p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono shrink-0 md:pt-1">
                  <Calendar size={12} /> {job.period}
                </span>
              </div>

              <ul className="space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="text-muted-foreground text-sm leading-relaxed flex gap-2"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
