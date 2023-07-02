"use client"
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const FadeText= ({ children }) => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
        });

        observer.observe(textRef.current);

        return () => {
            observer.unobserve(textRef.current);
        };
    }, []);

  useEffect(() => {

    if (isVisible) {
        const lines = textRef.current.children;
        const tl = gsap.timeline();
        tl.from(lines, { duration: 1.5, y: '100%', opacity: 0, ease: 'power3.out' ,delay:0.4});
    lines
        
    }
}, [isVisible]);

    

  return (
    <div className="relative">
      <span ref={textRef} className="">
        {children}
      </span>
    </div>
  );
};

export default FadeText;