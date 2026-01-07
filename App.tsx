
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MousePointer2, ChevronDown, Rocket } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import OrbitRings from './components/OrbitRings';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import SkillsSection from './components/SkillsSection';
import { PROJECTS, PROCESS, SOCIALS } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <ParticleBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-space-dark/20 border-b border-white/5">
        <div className="text-2xl font-display font-bold tracking-tighter text-white">
          RAYO<span className="text-neon-blue">.</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Work', 'About', 'Process', 'Skills'].map(item => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-body-text hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-sm font-bold rounded-lg hover:bg-neon-blue hover:text-space-dark transition-all">
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <OrbitRings />
        
        <div className="z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/5 border border-neon-blue/20 text-xs font-medium text-neon-blue mb-8 animate-bounce">
             <Rocket size={14} /> Available for new challenges
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Frontend Engineer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white/60">
              & Product Designer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-body-text max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Building scalable, user-centered digital experiences. I design in Figma and ship in React — bridging design and engineering.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
            <a href="#work" className="group flex items-center gap-2 px-8 py-4 bg-neon-blue text-space-dark font-bold rounded-xl transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(63,169,245,0.4)]">
              Explore My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
              Say Hello
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-neon-blue opacity-50" size={32} />
        </div>
      </header>

      {/* About Section */}
      <section className="py-24 px-6" id="about">
        <div className="max-w-6xl mx-auto">
          <div className="bg-space-card/40 backdrop-blur-xl border border-white/5 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] -mr-48 -mt-48" />
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="relative flex-shrink-0">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-neon-blue/30 p-2">
                  <img src="https://picsum.photos/seed/rayo/300/300" alt="Rayo" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 p-4 bg-neon-yellow rounded-full shadow-lg animate-pulse-slow">
                  <MousePointer2 size={24} className="text-space-dark" />
                </div>
              </div>
              <div>
                <span className="text-neon-blue font-bold tracking-widest text-sm uppercase mb-4 block">The Mission</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white">
                  Crafting Digital Products with <span className="text-neon-blue italic">Intent.</span>
                </h2>
                <div className="space-y-6 text-lg text-body-text max-w-3xl">
                  <p>
                    I'm Motunrayo Abioye, known as "Rayo". My work lives at the intersection of aesthetic brilliance and technical excellence. As a Design Engineer, I don't just hand off static files; I build living systems.
                  </p>
                  <p>
                    With experience across logistics, data visualization, and fintech, I help companies transform complex ideas into intuitive, high-performance interfaces that users actually love to use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6" id="work">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-neon-yellow font-bold uppercase tracking-tighter text-sm mb-2 block">Case Studies</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROJECTS.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={setSelectedProject} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 relative" id="process">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-display font-bold mb-20 text-center">My Workflow Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {/* Animated Connector Line (desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent -translate-y-1/2 z-0" />
            
            {PROCESS.map((step, idx) => (
              <div key={step.title} className="relative z-10 bg-space-card/80 p-8 rounded-3xl border border-white/5 hover:border-neon-blue/40 transition-all hover:scale-105 group">
                <div className="w-12 h-12 flex items-center justify-center bg-neon-blue/10 rounded-xl text-neon-blue mb-6 group-hover:shadow-[0_0_15px_rgba(63,169,245,0.4)] transition-all">
                  <span className="text-xl font-bold font-display">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-neon-blue transition-colors">{step.title}</h3>
                <p className="text-body-text text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />

      {/* CTA Section */}
      <section className="py-32 px-6" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 md:p-24 rounded-[3rem] bg-space-card border border-white/10 text-center overflow-hidden">
             {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-neon-blue/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-neon-yellow/10 rounded-full blur-[100px]" />

            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 relative z-10">
              Let’s build something <br /> meaningful.
            </h2>
            <p className="text-body-text text-lg mb-12 max-w-xl mx-auto relative z-10">
              Open for design systems, frontend architectural challenges, and high-fidelity creative web experiences.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
              <a href="mailto:hello@rayo.design" className="px-10 py-5 bg-neon-blue text-space-dark font-bold rounded-2xl hover:bg-white transition-all transform hover:scale-110 hover:shadow-[0_0_40px_rgba(63,169,245,0.5)]">
                Start a conversation
              </a>
              <div className="flex gap-4">
                {SOCIALS.map((social, i) => (
                  <a key={i} href={social.link} className="p-4 bg-white/5 border border-white/10 rounded-xl text-body-text hover:text-white hover:border-neon-blue/50 transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
          <div className="text-sm font-medium">
            © 2024 RAYO ABIOYE. DESIGNED & BUILT IN REACT.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-neon-blue transition-colors">Twitter</a>
            <a href="#" className="hover:text-neon-blue transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-neon-blue transition-colors">Dribbble</a>
          </div>
        </div>
      </footer>

      {/* Modal Overlay */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default App;
