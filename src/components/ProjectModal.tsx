import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-space-dark/90 backdrop-blur-md" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-space-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-50"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[70vh] md:max-h-[600px]">
            <span className="text-neon-blue text-sm font-medium tracking-widest uppercase mb-2 block">
              {project.role}
            </span>
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              {project.name}
            </h2>
            
            <p className="text-body-text leading-relaxed mb-8">
              {project.fullDetails}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-body-text">
                  {tag}
                </span>
              ))}
            </div>

            <button
  onClick={() => {
    if (project.caseStudyRoute) navigate(project.caseStudyRoute);
  }}
  className="flex items-center gap-2 px-6 py-3 bg-neon-blue text-space-dark font-bold rounded-xl hover:bg-white transition-all transform hover:scale-105"
>
  View Design Gallery <ExternalLink size={18} />
</button>



          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
