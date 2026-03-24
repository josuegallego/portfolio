'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const spotRef = useRef<HTMLDivElement>(null);

  // Use refs to track position for spotlight
  const pos = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const { x, y } = pos.current;

      // Update Spotlight
      if (spotRef.current) {
        spotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div ref={spotRef} className="spotlight" style={{ position: 'fixed', top: 0, left: 0 }} />
  );
}
