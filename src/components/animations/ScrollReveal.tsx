'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-scroll-item',
        { 
          y: 50, 
          z: -50, 
          rotateX: -10, 
          opacity: 0 
        },
        { 
          y: 0, 
          z: 0, 
          rotateX: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.15,
          ease: 'power3.out',
          transformPerspective: 1000,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef} className="w-full">{children}</div>;
}
