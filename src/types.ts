// src/types.ts
export interface Project {
  id: string;
  name: string;
  slug: string;
  role: string;
  description: string;
  fullDetails: string;
  image: string;
  tags: string[];
  caseStudyRoute: string;
}


export interface Skill {
  name: string;
  category: 'Design' | 'Frontend' | 'Productivity';
  icon: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}
