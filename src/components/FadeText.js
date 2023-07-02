"use client"
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const FadeText = ({ children }) => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, 
      }
    );

    observer.observe(textRef.current);

    return () => {
      
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const lines = Array.from(textRef.current.children);

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.set(lines, { opacity: 0.2, y: '50%' });
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
