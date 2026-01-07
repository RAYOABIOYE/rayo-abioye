
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project)}
      className="group relative cursor-pointer overflow-hidden rounded-[2rem] aspect-[4/5] bg-space-card transition-all duration-500 hover:-translate-y-2"
    >
      {/* Glow Overlay */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-blue/50 rounded-[2rem] transition-colors z-20" />
      
      {/* Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-dark via-space-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <div className="mb-2 inline-block px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-xs font-medium text-neon-blue">
          {project.role}
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
          {project.name}
        </h3>
        <p className="text-body-text text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>
      </div>

      {/* Halo on hover */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neon-blue/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default ProjectCard;
