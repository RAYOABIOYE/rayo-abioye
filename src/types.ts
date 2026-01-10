
export interface Project {
  id: string;
  name: string;
  role: 'Design' | 'Frontend' | 'Design & Frontend';
  description: string;
  fullDetails: string;
  image: string;
  tags: string[];
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
