"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable APIs with Go and PostgreSQL",
    excerpt:
      "A deep dive into designing RESTful APIs that handle millions of requests with clean architecture patterns and efficient database queries.",
    date: "Mar 15, 2026",
    readTime: "8 min read",
    tags: ["Go", "PostgreSQL", "API Design"],
    slug: "#",
  },
  {
    title: "Why I Switched from REST to GraphQL (and Back)",
    excerpt:
      "My journey experimenting with GraphQL in production, the trade-offs I discovered, and when each approach truly shines.",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    tags: ["GraphQL", "REST", "Architecture"],
    slug: "#",
  },
  {
    title: "The Art of Writing Clean TypeScript",
    excerpt:
      "Practical patterns for writing type-safe, readable TypeScript that your future self and teammates will thank you for.",
    date: "Jan 20, 2026",
    readTime: "10 min read",
    tags: ["TypeScript", "Clean Code", "Best Practices"],
    slug: "#",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">04.</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">
            Blog & Insights
          </h2>
        </motion.div>

        <div className="space-y-6">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.slug}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group block bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold font-display text-foreground group-hover:text-primary transition-colors mb-2 flex items-center gap-2">
                    {post.title}
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-1 text-xs text-muted-foreground font-mono shrink-0">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
