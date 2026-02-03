import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { AboutMe } from "@/components/home/AboutMe";
import { Footer } from "@/components/layout/Footer";

// Dynamic imports for heavy components (code splitting)
const SkillsMarquee = dynamic(
  () => import("@/components/home/SkillsMarquee").then((mod) => ({ default: mod.SkillsMarquee })),
  { ssr: true }
);

const Capabilities = dynamic(
  () => import("@/components/home/Capabilities").then((mod) => ({ default: mod.Capabilities })),
  { ssr: true }
);

const FeaturedProjects = dynamic(
  () => import("@/components/home/FeaturedProjects").then((mod) => ({ default: mod.FeaturedProjects })),
  { ssr: true }
);

const Contact = dynamic(
  () => import("@/components/home/Contact").then((mod) => ({ default: mod.Contact })),
  { ssr: true }
);

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-background text-white selection:bg-custom-orange selection:text-white">
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
