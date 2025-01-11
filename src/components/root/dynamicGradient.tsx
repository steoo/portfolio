import React, { useEffect, useState } from 'react';

import { GradientContainer } from './root.styled';

export const DynamicGradient: React.FC = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };

    // Add mouse move listener for desktop
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <GradientContainer $x={position.x} $y={position.y} />;
};
