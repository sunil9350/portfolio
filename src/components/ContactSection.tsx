"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("portfolio").insert({
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
      name,
      email,
      message,
    });
    setLoading(false);

    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
    toast.success("Message sent! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono text-primary text-sm mb-2">05.</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a project
            in mind, a question, or just want to say hi — drop me a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 gap-4 bg-card border border-border rounded-lg"
              >
                <CheckCircle className="text-primary" size={48} />
                <p className="text-foreground font-display font-semibold text-lg">
                  Thank you!
                </p>
                <p className="text-muted-foreground text-sm">
                  I'll get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-2 font-mono text-xs text-primary hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs text-muted-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs text-muted-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    maxLength={1000}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-lg hover:opacity-90 transition-opacity glow disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-mono text-primary text-sm font-semibold mb-3">
                Direct Email
              </h3>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} /> hello@example.com <ArrowUpRight size={14} />
              </a>
            </div>
            <div>
              <h3 className="font-mono text-primary text-sm font-semibold mb-3">
                Social
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-mono text-primary text-sm font-semibold mb-2">
                Availability
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Currently open to freelance projects and full-time
                opportunities. Response time is typically within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          Designed & Built with ❤️
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
