'use client'
import { useRef, useEffect } from 'react';

const Home = () => {
  const container = useRef(null);
  const stickyMask = useRef(null);
  const easedScrollProgressRef = useRef(0);
  const animationFrameRef = useRef(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 30;
  const easing = 0.15;

  const getScrollProgress = () => {
    if (!stickyMask.current || !container.current) return 0;
    
    const scrollProgress = stickyMask.current.offsetTop / 
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgressRef.current;
    easedScrollProgressRef.current += delta * easing;
    return easedScrollProgressRef.current;
  }

  const animate = () => {
    if (!stickyMask.current) return;

    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize = 
      `${(initialMaskSize + maskSizeProgress) * 100}%`;
    
    animationFrameRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  });

  return (
    <main>
      <div ref={container} className="relative h-[300vh]">
        <div 
          ref={stickyMask} 
          className="flex overflow-hidden sticky top-0 h-screen items-center justify-center"
          style={{
            maskImage: 'url("/medias/mask.svg")',
            maskPosition: '52.35% center',
            maskRepeat: 'no-repeat',
            maskSize: '80%',
            WebkitMaskImage: 'url("/medias/mask.svg")',
            WebkitMaskPosition: '52.35% center',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: '80%'
          }}
        >
          <video autoPlay muted loop className="h-full w-full object-cover">
            <source src="/medias/zephyr_ltce.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </main>
  );
}

export default Home;