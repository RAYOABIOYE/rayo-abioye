
import React from 'react';
import { Figma, Code, Layout, TestTube, Zap, Palette, Github, Linkedin, Mail } from 'lucide-react';
import { Project, Skill, ProcessStep } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'BeamAfrique',
    role: 'Design & Frontend',
    description: 'A logistics and shipment tracking platform for pan-African commerce.',
    fullDetails: 'BeamAfrique required a seamless integration between a complex logistical dashboard and a user-friendly tracking interface. I designed the entire design system in Figma and implemented it using React, Tailwind, and Framer Motion for high-fidelity interactions.',
    image: 'https://picsum.photos/seed/beam/800/600',
    tags: ['React', 'Figma', 'Node.js', 'Logistics'],
  },
  {
    id: '2',
    name: 'JEXCELHUB',
    role: 'Frontend',
    description: 'Data visualization and business intelligence tool for SME scaling.',
    fullDetails: 'Built as a high-performance dashboard, JEXCELHUB transforms raw excel data into actionable insights. My focus was on technical implementation, ensuring 60fps performance even with large datasets using D3.js and React.',
    image: 'https://picsum.photos/seed/jexcel/800/600',
    tags: ['D3.js', 'TypeScript', 'React', 'Data Viz'],
  },
  {
    id: '3',
    name: 'Consulting Website',
    role: 'Design',
    description: 'A premium portfolio for a high-end management consultant.',
    fullDetails: 'Focused heavily on "Silent Luxury" aesthetics. The design uses spacious layouts, serif typography, and subtle scroll-triggered reveals to convey authority and professionalism.',
    image: 'https://picsum.photos/seed/consult/800/600',
    tags: ['Product Thinking', 'UX/UI', 'Branding'],
  },
  {
    id: '4',
    name: 'Portfolio Sites',
    role: 'Design & Frontend',
    description: 'Curated collection of artist and developer portfolios.',
    fullDetails: 'A series of bespoke digital homes for creatives. Each site is tailored to the individual identity, ranging from brutalist minimalism to futuristic neon-tech (like the one you are seeing now!).',
    image: 'https://picsum.photos/seed/portfolios/800/600',
    tags: ['Creative Coding', 'A11y', 'SEO'],
  }
];

export const SKILLS: Skill[] = [
  { name: 'Figma', category: 'Design', icon: 'figma' },
  { name: 'Principle', category: 'Design', icon: 'principle' },
  { name: 'Adobe CC', category: 'Design', icon: 'adobe' },
  { name: 'React', category: 'Frontend', icon: 'react' },
  { name: 'Next.js', category: 'Frontend', icon: 'nextjs' },
  { name: 'TypeScript', category: 'Frontend', icon: 'ts' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwind' },
  { name: 'Framer Motion', category: 'Frontend', icon: 'framer' },
  { name: 'Git/Github', category: 'Productivity', icon: 'git' },
  { name: 'Agile/Scrum', category: 'Productivity', icon: 'agile' },
];

export const PROCESS: ProcessStep[] = [
  {
    title: 'Research & Product Thinking',
    description: 'Understanding the "Why" before the "What". Diving into user pain points and business goals.',
    icon: 'Search',
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting pixel-perfect designs in Figma, building scalable design systems and interactive prototypes.',
    icon: 'Palette',
  },
  {
    title: 'Frontend Engineering',
    description: 'Bridging design into code using React, ensuring semantic structure and high performance.',
    icon: 'Code',
  },
  {
    title: 'Testing & Iteration',
    description: 'Refining the experience through user testing and performance audits to reach perfection.',
    icon: 'TestTube',
  },
];

export const SOCIALS = [
  { icon: <Linkedin size={24} />, link: 'https://linkedin.com' },
  { icon: <Github size={24} />, link: 'https://github.com' },
  { icon: <Mail size={24} />, link: 'mailto:hello@rayo.design' },
];
