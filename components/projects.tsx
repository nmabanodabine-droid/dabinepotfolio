"use client";

import { useEffect, useRef } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "To-Do App",
    description:
      "A clean and intuitive task management app to organize daily activities, set priorities, and track completion with a smooth user experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "LocalStorage"],
    github: "https://github.com/nshuti-dabine",
    live: "",
  },
  {
    title: "Stock Management",
    description:
      "A full-featured inventory and stock management system to track products, manage stock levels, generate reports, and handle supplier data.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    github: "https://github.com/nshuti-dabine",
    live: "",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern, responsive developer portfolio showcasing projects, skills, and experience — built with performance and accessibility in mind.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    github: "https://github.com/nshuti-dabine",
    live: "",
  },
  {
    title: "Online Shopping",
    description:
      "A fully functional e-commerce platform with product listings, shopping cart, checkout flow, and order management for a seamless shopping experience.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/nshuti-dabine",
    live: "",
  },
];

export function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-lg md:text-xl mr-2">03.</span>
            Things I&apos;ve Built
          </h3>
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out group"
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <div className="h-full bg-card border border-border/50 p-6 rounded-xl hover:-translate-y-2 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live`}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 font-mono text-xs">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="bg-primary/10 text-primary px-2 py-0.5 rounded">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
