"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "Tech Company",
    title: "Senior Software Engineer",
    period: "Jan 2023 - Present",
    url: "https://example.com",
    points: [
      "Lead a team of 5 engineers in developing and maintaining critical user-facing features using React, TypeScript, and Next.js",
      "Architected and implemented a new component library that reduced development time by 40% across teams",
      "Collaborated with designers and PMs to improve conversion rates by 25% through A/B testing",
      "Mentored junior developers and established coding standards and best practices",
    ],
  },
  {
    company: "Startup Inc",
    title: "Software Engineer",
    period: "Jun 2021 - Dec 2022",
    url: "https://example.com",
    points: [
      "Built and shipped highly interactive web applications using Vue.js and Node.js",
      "Implemented real-time features using WebSockets, improving user engagement by 35%",
      "Optimized database queries reducing page load times by 60%",
      "Worked in an agile environment with 2-week sprint cycles",
    ],
  },
  {
    company: "Digital Agency",
    title: "Frontend Developer",
    period: "Mar 2019 - May 2021",
    url: "https://example.com",
    points: [
      "Developed responsive web applications for 20+ clients across various industries",
      "Created reusable component libraries that improved team productivity",
      "Collaborated with UI/UX designers to implement pixel-perfect designs",
      "Integrated third-party APIs and payment gateways",
    ],
  },
  {
    company: "Freelance",
    title: "Web Developer",
    period: "Jan 2018 - Feb 2019",
    url: "#",
    points: [
      "Delivered 15+ web projects for small businesses and startups",
      "Managed full project lifecycle from requirements to deployment",
      "Built custom WordPress themes and plugins",
      "Provided ongoing maintenance and support for clients",
    ],
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

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
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-lg md:text-xl mr-2">
              02.
            </span>
            Where I&apos;ve Worked
          </h3>
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out flex flex-col md:flex-row gap-6 md:gap-0">
          {/* Tab List */}
          <div className="relative flex md:flex-col overflow-x-auto md:overflow-visible scrollbar-hide">
            <div className="flex md:flex-col min-w-max md:min-w-[160px]">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "px-5 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2",
                    activeTab === index
                      ? "text-primary border-primary bg-primary/5"
                      : "text-muted-foreground border-border hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="md:pl-8 min-h-[300px]">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={cn(
                  "transition-opacity duration-300",
                  activeTab === index
                    ? "opacity-100"
                    : "opacity-0 hidden"
                )}
              >
                <h4 className="text-xl font-semibold text-foreground">
                  {exp.title}{" "}
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline underline-offset-4"
                  >
                    @ {exp.company}
                  </a>
                </h4>
                <p className="font-mono text-sm text-muted-foreground mt-1">
                  {exp.period}
                </p>
                <ul className="mt-6 space-y-4">
                  {exp.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex gap-3 text-muted-foreground"
                    >
                      <span className="text-primary mt-1.5 text-xs">▹</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
