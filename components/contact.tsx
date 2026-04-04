"use client";

import { useEffect, useRef } from "react";

export function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out text-primary font-mono text-sm md:text-base mb-4">
          04. What&apos;s Next?
        </p>

        <h3 className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Get In Touch
        </h3>

        <p className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out text-muted-foreground text-lg leading-relaxed mb-12">
          I&apos;m currently looking for new opportunities. Whether you have a
          question, want to collaborate on a project, or just want to say hello,
          my inbox is always open. I&apos;ll try my best to get back to you!
        </p>

        <a
          href="mailto:nmabanodabine@gmail.com"
          className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-mono rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
