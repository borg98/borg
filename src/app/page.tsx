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
        <div className="min-h-screen snap-start">
          <SkillsContent />
        </div>
        <div className="min-h-screen snap-start">
          <Projects />
        </div>
        <div className="min-h-screen snap-start">
          <Contact />
        </div>
      </main>
      <footer>
        <p>© 2025 Martin Borg</p>
      </footer>
    </>
  );
}
