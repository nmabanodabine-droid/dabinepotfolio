"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Twitter, Mail, ChevronDown, ArrowRight, MessageSquare } from "lucide-react";

const roles = [
  "Software Developer",
  "Full Stack Engineer",
  "Problem Solver",
  "Tech Enthusiast",
];

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText((prev) =>
            isDeleting
              ? prev.slice(0, -1)
              : currentRole.slice(0, prev.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl w-full relative z-10">
        {/* Status badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </div>

        <p 
          className={`text-primary font-mono text-sm md:text-base mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Hi, my name is
        </p>

        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Nshuti Mabano Dabine
        </h1>

        <div 
          className={`mt-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground">
            I&apos;m a{" "}
            <span className="text-primary relative inline-block min-w-[200px] md:min-w-[300px] text-left">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </h2>
        </div>

        <p 
          className={`text-muted-foreground text-base md:text-lg mt-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          I specialize in building exceptional digital experiences. Currently
          focused on creating accessible, human-centered products that make a
          real difference.
        </p>

        <div 
          className={`flex flex-wrap justify-center gap-4 mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 flex items-center gap-2"
          >
            <span className="relative z-10">View My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
            <span className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 border-2 border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
            Get In Touch
          </a>
        </div>

        <div 
          className={`flex justify-center gap-4 mt-12 transition-all duration-700 delay-[600ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {[
          { icon: Github, href: "https://github.com/nmabanodabine-droid", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/nshuti-dabine", label: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            { icon: Mail, href: "mailto:nmabanodabine@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative p-3 text-muted-foreground hover:text-primary bg-card/50 border border-border/50 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110"
            >
              <Icon className="w-5 h-5" />
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs bg-card border border-border px-2 py-1 rounded-md text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
        aria-label="Scroll to about section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </a>
    </section>
  );
}
