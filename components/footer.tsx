"use client";

import { Github, Linkedin, Twitter, Mail, Instagram, Codepen } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/nshuti-dabine", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/in/nshuti-dabine", label: "LinkedIn" },
  { icon: Codepen, href: "https://codepen.io", label: "CodePen" },
  { icon: Mail, href: "mailto:nshuti.dabine@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Social Links */}
        <div className="flex justify-center gap-6 md:hidden mb-8">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:-translate-y-1 transform"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Desktop Side Elements (Fixed) */}
        <div className="hidden md:flex fixed bottom-0 left-10 flex-col items-center gap-6 z-20">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
          <div className="w-px h-24 bg-muted-foreground" />
        </div>

        <div className="hidden md:flex fixed bottom-0 right-10 flex-col items-center gap-6 z-20">
          <a
            href="mailto:nshuti.dabine@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 font-mono text-xs tracking-widest"
            style={{ writingMode: "vertical-rl" }}
          >
            nshuti.dabine@gmail.com
          </a>
          <div className="w-px h-24 bg-muted-foreground" />
        </div>

        {/* Footer Credit */}
        <div className="text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-muted-foreground hover:text-primary transition-colors duration-300 font-mono text-xs"
          >
            <span className="block mb-2 group-hover:-translate-y-1 transition-transform duration-300">
              Designed & Built by Nshuti Manabo Dabine
            </span>
            <span className="text-muted-foreground/60">
              Built with Next.js & Tailwind CSS
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
