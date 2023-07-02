"use client"
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const FadeText = ({ children }) => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

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
      const lines = Array.from(textRef.current.children);

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.set(lines, { visibility: 'hidden' });
      tl.from(lines, {
        duration: 1.5,
        y: isScrollingUp ? '-100%' : '100%',
        opacity: 0,
        visibility: 'visible',
        delay:0.4
      });
    }
  }, [isVisible, isScrollingUp]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollingUp(window.pageYOffset < 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <span ref={textRef} className="block">
        {children}
      </span>
    </div>
  );
};

export default FadeText;
