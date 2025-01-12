import React, { useCallback, useEffect, useRef, useState } from 'react';

import { GradientContainer } from './root.styled';

const SMOOTHING_FACTOR = 0.05;

export const DynamicGradient: React.FC = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const targetPosition = useRef({ x: 50, y: 50 });
  const currentPosition = useRef({ x: 50, y: 50 });
  const frameRef = useRef<number>(null);

  const updatePosition = useCallback(() => {
    currentPosition.current = {
      x:
        currentPosition.current.x +
        (targetPosition.current.x - currentPosition.current.x) *
          SMOOTHING_FACTOR,
      y:
        currentPosition.current.y +
        (targetPosition.current.y - currentPosition.current.y) *
          SMOOTHING_FACTOR,
    };

    // Only update state if the change is significant
    if (
      Math.abs(currentPosition.current.x - position.x) > 0.1 ||
      Math.abs(currentPosition.current.y - position.y) > 0.1
    ) {
      setPosition(currentPosition.current);
    }

    frameRef.current = requestAnimationFrame(updatePosition);
  }, [position]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    frameRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [updatePosition]);

  return <GradientContainer $x={position.x} $y={position.y} />;
};
