// src/pages/Jexcelhub.tsx
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const images = [
  '/projects/jexcelhub/1.png',
  '/projects/jexcelhub/2.png',
  '/projects/jexcelhub/3.png',
  '/projects/jexcelhub/4.png',
  '/projects/jexcelhub/5.png',
  '/projects/jexcelhub/6.png',
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, type: 'spring', stiffness: 100 },
  }),
};

const Jexcelhub: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + images.length) % images.length);
    }
  };

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  return (
    <div className="min-h-screen bg-space-dark text-white px-6 md:px-12 py-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16 text-center md:text-left">
        <span className="text-neon-blue tracking-widest text-sm uppercase block mb-4">
          Frontend · Data Visualization
        </span>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white drop-shadow-lg">
          JEXCELHUB
        </h1>
        <p className="text-body-text text-lg max-w-3xl text-gray-300">
          High-performance dashboard transforming raw Excel data into actionable insights. Built with React and D3.js for seamless interaction and smooth performance.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:rotate-1 aspect-square"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={src}
              alt={`JEXCELHUB ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors rounded-3xl" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-lg flex items-center justify-center p-6"
        >
          {/* Close */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={28} />
          </button>

          {/* Previous */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={28} />
          </button>

          <motion.img
            key={activeImage}
            src={activeImage}
            alt="JEXCELHUB preview"
            className="max-w-full max-h-full rounded-xl shadow-2xl border border-neon-blue"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120 }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Jexcelhub;
