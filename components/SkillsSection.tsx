
import React, { useState } from 'react';
import { SKILLS } from '../constants';
import { Figma, Code, HardDrive, Cpu, Terminal } from 'lucide-react';

const SkillsSection: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-neon-yellow font-bold uppercase tracking-tighter text-sm mb-2 block">Core Stack</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold">Skills & Tools</h2>
          </div>
          <p className="text-body-text max-w-md">
            Mastering the intersection of visual precision and technical robustness with a curated set of modern tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Design Tools */}
          <SkillGroup 
            title="Design Tools" 
            skills={SKILLS.filter(s => s.category === 'Design')}
            icon={<Palette size={24} className="text-neon-blue" />}
          />
          {/* Frontend Tools */}
          <SkillGroup 
            title="Frontend Engineering" 
            skills={SKILLS.filter(s => s.category === 'Frontend')}
            icon={<Code size={24} className="text-neon-blue" />}
          />
          {/* Productivity */}
          <SkillGroup 
            title="Productivity" 
            skills={SKILLS.filter(s => s.category === 'Productivity')}
            icon={<Terminal size={24} className="text-neon-blue" />}
          />
        </div>
      </div>
    </section>
  );
};

const SkillGroup: React.FC<{ title: string; skills: any[]; icon: React.ReactNode }> = ({ title, skills, icon }) => (
  <div className="bg-space-card/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-neon-blue/20 transition-all group">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-neon-blue/10 rounded-xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {skills.map(skill => (
        <div 
          key={skill.name}
          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-body-text text-sm hover:text-white hover:border-neon-blue/50 hover:bg-neon-blue/5 transition-all cursor-default"
        >
          {skill.name}
        </div>
      ))}
    </div>
  </div>
);

const Palette = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M20 12h2"/><path d="M2 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 19.07-1.41-1.41"/><path d="m6.34 6.34-1.41-1.41"/>
  </svg>
);

export default SkillsSection;
