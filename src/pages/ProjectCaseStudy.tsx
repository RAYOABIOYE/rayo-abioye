import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const ProjectCaseStudy: React.FC = () => {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  // Lightbox state
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const nextImage = () =>
    activeIndex !== null &&
    setActiveIndex((activeIndex + 1) % project.images!.length);
  const prevImage = () =>
    activeIndex !== null &&
    setActiveIndex(
      (activeIndex - 1 + project.images!.length) % project.images!.length
    );

  return (
    <section className="min-h-screen bg-space-dark text-white px-6 md:px-16 py-20">
      <h1 className="text-5xl font-display font-bold mb-6">{project.name}</h1>
      <p className="max-w-2xl text-body-text mb-12">{project.fullDetails}</p>

      {/* ----- IMAGE GALLERY ----- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {project.images?.map((imgSrc, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img
              src={imgSrc}
              alt={`${project.name} screenshot ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* ----- LIGHTBOX ----- */}
      {activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={28} />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={28} />
          </button>

          {/* Active Image */}
          <motion.img
            key={project.images![activeIndex]}
            src={project.images![activeIndex]}
            alt={`Screenshot ${activeIndex + 1}`}
            className="max-w-full max-h-full rounded-xl shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120 }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default ProjectCaseStudy;
