// src/constants/projects.tsx
import React from 'react';
import { Figma, Code, Palette, TestTube, Github, Linkedin, Mail } from 'lucide-react';
import { Project, Skill, ProcessStep } from './types';

// -------- IMPORT LOCAL IMAGES --------
import JExcel1 from './assets/projects/jexcelhub/1.png';
import JExcel2 from './assets/projects/jexcelhub/2.png';
import JExcel3 from './assets/projects/jexcelhub/3.png';
import JExcel4 from './assets/projects/jexcelhub/4.png';
import JExcel5 from './assets/projects/jexcelhub/5.png';
import JExcel6 from './assets/projects/jexcelhub/6.png';

// Consulting Website images
import Consult1 from './assets/projects/consulting-website/1.png';
import Consult2 from './assets/projects/consulting-website/2.png';
import Consult3 from './assets/projects/consulting-website/3.png';
import Consult4 from './assets/projects/consulting-website/4.png';
import Consult5 from './assets/projects/consulting-website/5.png';
import Consult6 from './assets/projects/consulting-website/6.png';
import Consult7 from './assets/projects/consulting-website/7.png';
import Consult8 from './assets/projects/consulting-website/8.png';
import Consult9 from './assets/projects/consulting-website/9.png';
import Consult10 from './assets/projects/consulting-website/10.png';
import Consult11 from './assets/projects/consulting-website/11.png';
import Consult12 from './assets/projects/consulting-website/12.png';
import Consult13 from './assets/projects/consulting-website/13.png';
import Consult14 from './assets/projects/consulting-website/14.png';

// Portfolio Sites
import Port1 from './assets/projects/portfolio-sites/1.png';
import Port2 from './assets/projects/portfolio-sites/2.png';
import Port3 from './assets/projects/portfolio-sites/3.png';
import Port4 from './assets/projects/portfolio-sites/4.png';

// ---------------- PROJECTS ----------------
export const PROJECTS: Project[] = [
  {
    id: 'uiux',
    name: 'UI/UX & Product Design',
    slug: 'uiux',
    role: 'Product Designer · UI/UX',
    description: 'A curated collection of my UI/UX and product design work across different digital products.',
    fullDetails:
      'This body of work represents my approach as a product designer and UI/UX designer. It includes interface design, user flows, wireframes, interaction design, and visual systems created for dashboards, websites, media platforms, portfolios, and custom client projects.',
    image: 'https://picsum.photos/seed/uiux/800/600',
    tags: ['UI Design', 'UX Design', 'Product Design', 'Design Systems', 'Wireframing', 'Prototyping'],
    caseStudyRoute: '/designs',
  },
  {
    id: 'jexcelhub',
    name: 'JEXCELHUB',
    slug: 'jexcelhub',
    role: 'Frontend',
    description: 'Data visualization and business intelligence tool for SME scaling.',
    fullDetails:
      'Built as a high-performance dashboard, JEXCELHUB transforms raw excel data into actionable insights. My focus was on technical implementation, ensuring 60fps performance even with large datasets using D3.js and React.',
    image: JExcel1, // default image
    tags: ['D3.js', 'TypeScript', 'React', 'Data Viz'],
    caseStudyRoute: '/projects/jexcelhub',
    images: [JExcel1, JExcel2, JExcel3, JExcel4, JExcel5, JExcel6],
  },
 {
    id: 'consulting-website',
    name: 'Consulting Website',
    slug: 'consulting-website',
    role: 'Design',
    description: 'A premium portfolio for a high-end management consultant.',
    fullDetails:
      'Focused heavily on "Silent Luxury" aesthetics. The design uses spacious layouts, serif typography, and subtle scroll-triggered reveals to convey authority and professionalism.',
    image: Consult1,
    tags: ['Product Thinking', 'UX/UI', 'Branding'],
    caseStudyRoute: '/projects/consulting-website',
    images: [
      Consult1, Consult2, Consult3, Consult4, Consult5, Consult6,
      Consult7, Consult8, Consult9, Consult10, Consult11, Consult12,
      Consult13, Consult14,
    ],
  },
  {
    id: 'portfolio-sites',
    name: 'Portfolio Sites',
    slug: 'portfolio-sites',
    role: 'Design & Frontend',
    description: 'Curated collection of artist and developer portfolios.',
    fullDetails:
      'A series of bespoke digital homes for creatives. Each site is tailored to the individual identity, ranging from brutalist minimalism to futuristic neon-tech.',
    image: Port1,
    tags: ['Creative Coding', 'A11y', 'SEO'],
    caseStudyRoute: '/projects/portfolio-sites',
    images: [Port1, Port2, Port3, Port4],
  },
];

// ---------------- SKILLS ----------------
export const SKILLS: Skill[] = [
  { name: 'Figma', category: 'Design', icon: 'figma' },
  { name: 'Framer', category: 'Design', icon: 'principle' },
  { name: 'React', category: 'Frontend', icon: 'react' },
  { name: 'Next.js', category: 'Frontend', icon: 'nextjs' },
  { name: 'TypeScript', category: 'Frontend', icon: 'ts' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwind' },
  { name: 'Framer Motion', category: 'Frontend', icon: 'framer' },
  { name: 'Git/Github', category: 'Productivity', icon: 'git' },
  { name: 'Agile/Scrum', category: 'Productivity', icon: 'agile' },
];

// ---------------- PROCESS ----------------
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

// ---------------- SOCIALS ----------------
export const SOCIALS = [
  { icon: <Linkedin size={24} />, link: 'https://linkedin.com' },
  { icon: <Github size={24} />, link: 'https://github.com' },
  { icon: <Mail size={24} />, link: 'mailto:hello@rayo.design' },
];
