"use client"
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const TextReveal = ({ children }) => {
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

            gsap.from(lines, {
                opacity: 0,
                x: 150,
                duration: 1.6,
                delay:1.0,
                stagger: 0.2,
                ease: 'power3.out',
            });
        }
    }, [isVisible]);

    return (
      
            <div ref={textRef} className='h-full w-full '>{children}</div>
        
    );
};



export default TextReveal;

