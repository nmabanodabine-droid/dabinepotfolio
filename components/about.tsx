"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const skills = [
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "React", level: 92 },
  { name: "Next.js", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "PostgreSQL", level: 82 },
  { name: "MongoDB", level: 78 },
  { name: "GraphQL", level: 75 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Git", level: 90 },
  { name: "Docker", level: 72 },
];

export function About() {
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
    <section id="about" ref={sectionRef} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-lg md:text-xl mr-2">
              01.
            </span>
            About Me
          </h3>
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
          <div className="space-y-6">
            <p className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out text-muted-foreground leading-relaxed">
              Hello! I&apos;m a passionate software developer with a love for
              creating things that live on the internet. My journey in web
              development started back in 2023 when I decided to try customizing
              a WordPress theme — turns out hacking together a custom reblog
              button taught me a lot about HTML & CSS!
            </p>
            <p className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out text-muted-foreground leading-relaxed">
              Fast-forward to today, and I&apos;ve had the privilege of working
              at a start-up, a large corporation, and a digital agency. My main
              focus these days is building accessible, inclusive products and
              digital experiences for a variety of clients.
            </p>
            <p className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out text-muted-foreground leading-relaxed">
              Here are a few technologies I&apos;ve been working with recently:
            </p>

            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-400 ease-out grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group p-3 bg-card/50 border border-border/50 rounded-lg hover:border-primary/30 hover:bg-card transition-all duration-300"
                  style={{ animationDelay: `${400 + index * 50}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 group-hover:opacity-100 opacity-80"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-500 ease-out relative group mx-auto lg:mx-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary/20 rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300" />
              <div className="relative w-full h-full bg-muted rounded-lg overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Nshuti Manabo Dabine - Software Developer Workspace"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
