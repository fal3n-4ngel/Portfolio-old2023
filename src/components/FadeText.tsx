"use client"
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface FadeTextProps {
  children: React.ReactNode;
}

const FadeText: React.FC<FadeTextProps> = ({ children }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.001,
      }
    );

    const currentRef = textRef.current; 

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && textRef.current) {
      const lines = Array.from(textRef.current.children);

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.set(lines, { opacity: 0.2, y: '15%' });
      tl.to(lines, {
        duration: 2.0,
        y: '0%',
        opacity: 1,
      });
    }
  }, [isVisible]);

  return (
    <div className="relative">
      <span ref={textRef} className="block">
        {children}
      </span>
    </div>
  );
};

export default FadeText;
