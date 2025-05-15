"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsContent from "@/components/SkillsContent";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="snap-y snap-mandatory">
        <div className="h-screen snap-start">
          <Hero />
        </div>
        <div id="skills" className="min-h-screen snap-start">
          <SkillsContent />
        </div>
        <div id="projects" className="min-h-screen snap-start">
          <Projects />
        </div>
        <div id="contact" className="min-h-screen snap-start">
          <Contact />
        </div>
      </main>
      <footer>
        <p className="pl-4">© 2025 Martin Borg</p>
      </footer>
    </>
  );
}
