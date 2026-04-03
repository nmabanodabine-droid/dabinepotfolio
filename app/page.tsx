import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AnimatedBackground } from "@/components/animated-background";

// Professional portfolio page
export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
