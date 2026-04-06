'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimation({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Spatial Reveal
      gsap.fromTo(
        '.gsap-reveal',
        { 
          y: 100, 
          z: -100, 
          rotateX: -15, 
          opacity: 0 
        },
        { 
          y: 0, 
          z: 0, 
          rotateX: 0, 
          opacity: 1, 
          duration: 1.5, 
          stagger: 0.2, 
          ease: 'power3.out',
          transformPerspective: 1000
        }
      );

      // Slow vertical parallax for the background (assuming we have an element with .hero-bg)
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center">{children}</div>;
}
