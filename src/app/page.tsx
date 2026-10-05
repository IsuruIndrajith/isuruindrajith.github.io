import Link from 'next/link';
import { MotionProps, AnimatePresence, motion } from 'framer-motion';

// Import sections (to be created)
import Hero from './sections/hero';
import ProofStrip from './sections/proof-strip';
import ProjectsGrid from './sections/projects-grid';
import ExperienceTimeline from './sections/experience-timeline';
import SkillsSection from './sections/skills';
import DevOpsShowcase from './sections/devops-showcase';
import EducationSection from './sections/education';
import WritingSection from './sections/writing';
import ContactSection from './sections/contact';
import Footer from './sections/footer';

export default function Home() {
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <main id="main-content">
        {/* Hero Section */}
        <div id="hero">
          <Hero />
        </div>

        {/* Proof Strip */}
        <div id="proof-strip">
          <ProofStrip />
        </div>

        {/* Featured Projects */}
        <div id="projects-grid">
          <ProjectsGrid featuredOnly={true} />
        </div>

        {/* Experience Timeline */}
        <div id="experience-timeline">
          <ExperienceTimeline />
        </div>

        {/* Skills Section */}
        <div id="skills">
          <SkillsSection />
        </div>

        {/* DevOps Showcase */}
        <div id="devops-showcase">
          <DevOpsShowcase />
        </div>

        {/* Education & Certifications */}
        <div id="education">
          <EducationSection />
        </div>

        {/* Writing */}
        <div id="writing">
          <WritingSection />
        </div>

        {/* Contact */}
        <div id="contact">
          <ContactSection />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}