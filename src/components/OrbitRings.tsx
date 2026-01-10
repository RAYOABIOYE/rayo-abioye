
import React from 'react';

const OrbitRings: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] pointer-events-none opacity-20">
      <div className="absolute inset-0 border border-neon-blue rounded-full animate-spin-slow" style={{ borderWidth: '1px' }}></div>
      <div className="absolute inset-[40px] border border-neon-blue rounded-full animate-spin-reverse opacity-50" style={{ borderWidth: '1px', borderStyle: 'dashed' }}></div>
      <div className="absolute inset-[100px] border border-neon-blue rounded-full animate-spin-slow opacity-30" style={{ borderWidth: '1px' }}></div>
      
      {/* Halo Glows */}
      <div className="absolute inset-0 bg-neon-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>
  );
};

export default OrbitRings;
