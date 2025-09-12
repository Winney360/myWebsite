import React from 'react';
import { useParticles } from '../hooks/useParticles.jsx';

const ParticleBackground = () => {
  const canvasRef = useParticles();

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export default ParticleBackground;