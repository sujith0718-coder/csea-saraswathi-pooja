import React, { useEffect, useRef, useState } from 'react';

interface HeroCanvasProps {
  className?: string;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const isVisibleRef = useRef(true);
  const animFrameIdRef = useRef<number | null>(null);

  // Total available frames in images/
  const TOTAL_FRAMES = 40;

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let isMounted = true;
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    // Zero-pad frame number: e.g. 1 -> "001"
    const pad = (n: number) => n.toString().padStart(3, '0');

    // Load Frame 1 first immediately
    const img1 = new Image();
    img1.src = `/images/ezgif-frame-001.jpg`;
    images[0] = img1;

    img1.onload = () => {
      if (!isMounted) return;
      loadedCount++;
      setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));

      // Draw initial frame immediately
      if (canvas) {
        canvas.width = 1920;
        canvas.height = 1080;
        ctx.drawImage(img1, 0, 0, 1920, 1080);
        setIsReady(true);
      }

      // Progressively load remaining frames in idle time
      for (let i = 2; i <= TOTAL_FRAMES; i++) {
        const frameImg = new Image();
        frameImg.src = `/images/ezgif-frame-${pad(i)}.jpg`;
        images[i - 1] = frameImg;

        frameImg.onload = () => {
          if (!isMounted) return;
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        };
      }
    };

    // IntersectionObserver to pause playback when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    // Animation Loop: ~18-20 FPS for natural fluid motion
    let currentFrame = 0;
    let lastTime = performance.now();
    const frameInterval = 1000 / 18; // ~18 FPS

    const render = (now: number) => {
      if (!isMounted) return;

      const elapsed = now - lastTime;
      if (isVisibleRef.current && elapsed >= frameInterval) {
        lastTime = now - (elapsed % frameInterval);

        // Advance to next frame if loaded
        const nextFrame = (currentFrame + 1) % TOTAL_FRAMES;
        const targetImg = images[nextFrame];

        if (targetImg && targetImg.complete && targetImg.naturalWidth > 0) {
          ctx.drawImage(targetImg, 0, 0, 1920, 1080);
          currentFrame = nextFrame;
        }
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      isMounted = false;
      observer.disconnect();
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`hero-canvas-wrapper ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Fallback & Initial High-Resolution Poster (Never blank) */}
      <img
        src="/images/ezgif-frame-001.jpg"
        alt="Goddess Saraswathi in traditional courtyard with veena, lotus, brass lamps, books, and laptop"
        fetchPriority="high"
        loading="eager"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 40%',
          display: isReady ? 'none' : 'block',
        }}
      />

      {/* Living Canvas Animator */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 40%',
          opacity: isReady ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      />
    </div>
  );
};
