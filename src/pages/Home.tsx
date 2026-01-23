import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MousePointer2,
  ChevronDown,
  Rocket,
  Menu,
  X,
} from 'lucide-react';

import ParticleBackground from '../components/ParticleBackground';
import OrbitRings from '../components/OrbitRings';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import SkillsSection from '../components/SkillsSection';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import HeroImage from '../assets/rayo-hero.png';
import TypingText from '../components/TypingText';

const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ['Work', 'About', 'Skills'];

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-white relative overflow-x-hidden">
      <ParticleBackground />

      {/* ================= NAVIGATION ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-6 backdrop-blur-md bg-space-dark/20 border-b border-white/5 transition-all">
        <div className="text-2xl font-display font-bold tracking-tighter">
          MOTUNRAYO<span className="text-neon-blue">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-body-text hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-sm font-bold rounded-lg hover:bg-neon-blue hover:text-space-dark transition-all"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-white/10 transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-space-dark/90 backdrop-blur-md z-40 transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item.toLowerCase());
                setMobileMenuOpen(false);
              }}
              className="text-3xl font-bold text-neon-blue hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => {
              scrollToSection('contact');
              setMobileMenuOpen(false);
            }}
            className="px-8 py-3 bg-neon-blue text-space-dark font-bold rounded-xl hover:scale-105 transition-transform"
          >
            Get in touch
          </button>
        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <header className="relative min-h-screen flex items-center px-6 pt-32 overflow-hidden">
        <OrbitRings />

        {/* Hero Background Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[20%] -left-[20%] w-[520px] h-[520px] bg-neon-blue/20 rounded-full blur-[160px] animate-pulse-slow" />
          <div className="absolute -bottom-[20%] -right-[20%] w-[520px] h-[520px] bg-neon-yellow/10 rounded-full blur-[160px] animate-pulse-slow" />
          <div className="absolute top-[30%] right-[10%] w-[420px] h-[420px] bg-white/5 rounded-full blur-[140px]" />
        </div>

        {/* Hero Grid */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-xs font-medium text-neon-blue mb-6 animate-pulse-slow">
              <Rocket size={14} />
              <span>Available for new challenges</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
  Frontend Engineer <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white/60">
    & Product Designer
  </span>
</h1>

<TypingText texts={['FIGMA', 'REACT', 'TYPESCRIPT', 'NEXT.JS']} />

<p className="text-base sm:text-lg md:text-xl text-body-text max-w-xl mb-10">
  Building scalable, user-centered digital experiences. I design in
  Figma and ship in React — bridging design and engineering.
</p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-5">
              <button
                onClick={() => scrollToSection('work')}
                className="group flex items-center gap-2 px-7 py-3 bg-neon-blue text-space-dark font-bold rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_24px_rgba(63,169,245,0.35)]"
              >
                Explore My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-7 py-3 bg-white/5 border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                Say Hello
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[280px] md:w-[340px] lg:w-[380px] aspect-square">
              <div className="absolute inset-0 bg-neon-blue/25 blur-[140px] rounded-full" />
              <div className="absolute inset-0 rounded-full border border-neon-blue/30" />
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden animate-float">
                <img
                  src={HeroImage}
                  alt="Rayo Abioye"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-neon-blue opacity-50" size={32} />
        </div>
      </header>

      {/* ================= ABOUT ================= */}
      <section className="py-24 px-6 scroll-mt-28" id="about">
        <div className="max-w-6xl mx-auto">
          <div className="bg-space-card/40 backdrop-blur-xl border border-white/5 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] -mr-48 -mt-48" />

            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="relative flex-shrink-0">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-neon-blue/30 p-2">
                  <img
                    src={HeroImage}
                    alt="Rayo"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-4 -right-4 p-4 bg-neon-yellow rounded-full shadow-lg animate-pulse-slow">
                  <MousePointer2 size={24} className="text-space-dark" />
                </div>
              </div>

              <div>
                <span className="text-neon-blue font-bold tracking-widest text-sm uppercase mb-4 block">
                  The Mission
                </span>

                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                  Designing and Building Products that{' '}
                  <span className="text-neon-blue italic">Actually Work.</span>
                </h2>

                <div className="space-y-6 text-lg text-body-text max-w-3xl">
                  <p>
                    I’m Ubaidah Motunrayo Abioye — most people call me Rayo. I’m a
                    product designer and frontend engineer who enjoys turning ideas
                    into clean, usable interfaces people genuinely enjoy interacting
                    with.
                  </p>

                  <p>
                    From e-commerce websites and dashboards to portfolios, media
                    sites, and custom client projects, I focus on building
                    experiences that are clear, responsive, and built to scale —
                    whatever the product needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-24 px-6 scroll-mt-28" id="work">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-16">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <SkillsSection />

      {/* ================= CONTACT ================= */}
      <section className="py-32 px-6 scroll-mt-28" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 md:p-24 rounded-[3rem] bg-space-card border border-white/10 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent" />

            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Let’s build something meaningful.
            </h2>

            <p className="text-body-text text-lg mb-12 max-w-xl mx-auto">
              Open for frontend, design systems & creative web experiences.
            </p>

            <Link
              to="/contact"
              className="relative z-30 inline-block px-12 py-5 bg-neon-blue text-space-dark font-bold rounded-3xl shadow-lg 
             hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 bg-space-dark px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <span className="font-bold text-white">Ubaidah Motunrayo Abioye</span>
            <span>• Frontend Engineer & Product Designer <br />[DesignEngineer]</span>
          </div>

          <div className="flex items-center gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/RAYOABIOYE/rayo-abioye"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-neon-blue transition"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.04c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.623-5.476 5.92.43.372.823 1.103.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12 24 5.37 18.627 0 12 0z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/techgirl_rayo?igsh=d3V3bm9oc2F3b25x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-neon-pink transition"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5C19.216 2 22 4.784 22 7.75v8.5C22 19.216 19.216 22 16.25 22h-8.5C4.784 22 2 19.216 2 16.25v-8.5C2 4.784 4.784 2 7.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.88a1.13 1.13 0 11-2.26 0 1.13 1.13 0 012.26 0z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@techgirl_rayo?_r=1&_t=ZS-93IkKCpKs8m"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 8.04a7.17 7.17 0 01-4.17-1.35 7.14 7.14 0 01-2.2-2.7v9.8a6.75 6.75 0 11-6.75-6.75c.23 0 .46.02.68.05v3.43a3.32 3.32 0 10 2.9 3.3V2h3.38a7.18 7.18 0 006.16 6.04V8.04z" />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-1">
            <span>📞</span>
            <a href="tel:+2348012345678" className="hover:text-neon-blue transition">
              +234 816 632 7710
            </a>
          </div>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Home;
