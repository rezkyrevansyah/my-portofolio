import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Capabilities } from "@/components/home/Capabilities";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { AboutMe } from "@/components/home/AboutMe";
import { SkillsMarquee } from "@/components/home/SkillsMarquee";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-custom-orange selection:text-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <SkillsMarquee />
      <Capabilities />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </main>
  );
}
