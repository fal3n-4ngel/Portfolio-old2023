"use client"
import { useEffect, useRef, useState } from 'react';
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
        threshold: 0.1,
      }
    );

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
      const lines = Array.from(textRef.current.children);

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.set(lines, { opacity: 0.2, y: '30%' });
      tl.to(lines, {
        duration: 1.5,
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

