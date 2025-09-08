import React from 'react';
import { useCustomCursor } from '../hooks/useCustomCursor.jsx';

const CustomCursor = () => {
  const canvasRef = useCustomCursor();

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 mix-blend-screen"
      style={{ zIndex: 9999 }}
    />
  );
};

export default CustomCursor;