
"use client"
import React, { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';

interface TextRevealProps {
  children: React.ReactNode;
}

const TextReveal: React.FC<TextRevealProps> = ({ children }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    },
    {
      threshold: 0.001,
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && textRef.current) {
      const lines = Array.from(textRef.current.children) as HTMLDivElement[];

      gsap.from(lines, {
        opacity: 0,
        x: 150,
        duration: 1.6,
        delay: 0.6,
        stagger: 0.3,
        ease: 'power3.out',
      });
    }
  }, [isVisible]);

  return (
    <div ref={textRef} className="h-full w-full">
      {children}
    </div>
  );
};

export default TextReveal;
