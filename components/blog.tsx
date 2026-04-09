"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "How I Built My Portfolio with Next.js & Tailwind CSS",
    excerpt:
      "A walkthrough of the design decisions, tools, and challenges I faced while building this portfolio from scratch.",
    date: "March 20, 2025",
    readTime: "5 min read",
    tag: "Next.js",
    href: "#",
  },
  {
    title: "Getting Started with Stock Management Systems",
    excerpt:
      "Key concepts and architecture patterns I learned while building a full-featured stock management application.",
    date: "February 10, 2025",
    readTime: "7 min read",
    tag: "Backend",
    href: "#",
  },
  {
    title: "Why Every Developer Should Build a To-Do App First",
    excerpt:
      "The to-do app is more than a beginner project — it teaches state management, CRUD, and UX fundamentals all at once.",
    date: "January 5, 2025",
    readTime: "4 min read",
    tag: "Tips",
    href: "#",
  },
];

export function Blog() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog" ref={sectionRef} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-lg md:text-xl mr-2">
              05.
            </span>
            Blog
          </h3>
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={post.title}
              className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out group"
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <a
                href={post.href}
                className="h-full bg-card border border-border/50 p-6 rounded-xl hover:-translate-y-2 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col"
              >
                <span className="inline-block text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full mb-4 w-fit">
                  {post.tag}
                </span>
                <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-3 leading-snug">
                  {post.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all duration-300">
                  Read more <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
