import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  MousePointer2,
  ChevronDown,
  Rocket,
} from 'lucide-react';

import ParticleBackground from '../components/ParticleBackground';
import OrbitRings from '../components/OrbitRings';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import SkillsSection from '../components/SkillsSection';

import { PROJECTS, PROCESS, SOCIALS } from '../constants';
import { Project } from '../types';

import HeroImage from '../assets/rayo-hero.png';

const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-white relative overflow-x-hidden">
      <ParticleBackground />

      {/* ================= NAVIGATION ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-space-dark/20 border-b border-white/5">
        <div className="text-2xl font-display font-bold tracking-tighter">
          RAYO<span className="text-neon-blue">.</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Work', 'About', 'Process', 'Skills'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-body-text hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            className="px-5 py-2 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-sm font-bold rounded-lg hover:bg-neon-blue hover:text-space-dark transition-all"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <header className="relative min-h-screen flex items-center px-6 pt-32 overflow-hidden">
        <OrbitRings />

        {/* ---- Mesh Background ---- */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[20%] -left-[20%] w-[520px] h-[520px] bg-neon-blue/20 rounded-full blur-[160px] animate-pulse-slow" />
          <div className="absolute -bottom-[20%] -right-[20%] w-[520px] h-[520px] bg-neon-yellow/10 rounded-full blur-[160px] animate-pulse-slow" />
          <div className="absolute top-[30%] right-[10%] w-[420px] h-[420px] bg-white/5 rounded-full blur-[140px]" />
        </div>

        {/* ---- HERO GRID ---- */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ---- TEXT ---- */}
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

            <p className="text-base sm:text-lg md:text-xl text-body-text max-w-xl mb-10">
              Building scalable, user-centered digital experiences. I design in
              Figma and ship in React — bridging design and engineering.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-5">
              <a
                href="#work"
                className="group flex items-center gap-2 px-7 py-3 bg-neon-blue text-space-dark font-bold rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_24px_rgba(63,169,245,0.35)]"
              >
                Explore My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="#contact"
                className="px-7 py-3 bg-white/5 border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                Say Hello
              </a>
            </div>
          </div>

          {/* ---- IMAGE ---- */}
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
      <section className="py-24 px-6" id="about">
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
      I’m Motunrayo Abioye — most people call me Rayo. I’m a product designer and
      frontend engineer who enjoys turning ideas into clean, usable interfaces
      people genuinely enjoy interacting with.
    </p>

    <p>
      From e-commerce websites and dashboards to portfolios, media sites, and
      custom client projects, I focus on building experiences that are clear,
      responsive, and built to scale — whatever the product needs.
    </p>
  </div>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-24 px-6" id="work">
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

      <SkillsSection />

      {/* ================= CONTACT ================= */}
      <section className="py-32 px-6" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 md:p-24 rounded-[3rem] bg-space-card border border-white/10 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent" />

            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Let’s build something meaningful.
            </h2>

            <p className="text-body-text text-lg mb-12 max-w-xl mx-auto">
              Open for frontend, design systems & creative web experiences.
            </p>

            <a
              href="mailto:hello@rayo.design"
              className="px-10 py-5 bg-neon-blue text-space-dark font-bold rounded-2xl hover:scale-110 transition-all"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 border-t border-white/5 px-8 opacity-60">
        © 2024 RAYO ABIOYE — DESIGNED & BUILT IN REACT.
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Home;
