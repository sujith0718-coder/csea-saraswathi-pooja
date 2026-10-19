import React, { useEffect, useRef, useState } from 'react';

interface HeroCanvasProps {
  className?: string;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const isVisibleRef = useRef(true);
  const animFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Zero-pad frame number: e.g. 1 -> "001"
    const pad = (n: number) => n.toString().padStart(3, '0');

    // On mobile screens, use 14 sampled frames (every 3rd frame) to save 75% data and prevent network lag
    const isMobile = window.innerWidth < 860;
    const frameIndices: number[] = [];
    if (isMobile) {
      for (let i = 1; i <= 40; i += 3) {
        frameIndices.push(i);
      }
      if (frameIndices[frameIndices.length - 1] !== 40) {
        frameIndices.push(40);
      }
    } else {
      for (let i = 1; i <= 40; i++) {
        frameIndices.push(i);
      }
    }

    const images: HTMLImageElement[] = [];

    // Load Frame 1 immediately
    const img1 = new Image();

    const handleImg1Ready = () => {
      if (!isMounted) return;
      if (canvas && ctx) {
        canvas.width = 1920;
        canvas.height = 1080;
        ctx.drawImage(img1, 0, 0, 1920, 1080);
        setIsReady(true);
      }
      // Wait 800ms before starting sequential background frame loading to allow first view to settle
      setTimeout(startSequentialPreload, 800);
    };

    img1.onload = handleImg1Ready;
    img1.src = `/images/ezgif-frame-001.jpg`;
    images[0] = img1;

    // If frame 1 is already in cache
    if (img1.complete && img1.naturalWidth > 0) {
      handleImg1Ready();
    }

    // Sequentially preload remaining frames with breathing room to keep device smooth
    const startSequentialPreload = () => {
      let step = 1;

      const loadNext = () => {
        if (!isMounted || step >= frameIndices.length) return;
        const targetFrameNum = frameIndices[step];
        const currentSlot = step;
        step++;

        const frameImg = new Image();
        frameImg.onload = () => {
          if (!isMounted) return;
          // Paced preloading prevents cellular network congestion
          setTimeout(loadNext, isMobile ? 120 : 35);
        };
        frameImg.onerror = () => {
          if (!isMounted) return;
          setTimeout(loadNext, 80);
        };
        frameImg.src = `/images/ezgif-frame-${pad(targetFrameNum)}.jpg`;
        images[currentSlot] = frameImg;
      };

      loadNext();
    };

    // IntersectionObserver to pause animation when scrolled past Hero
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Animation Loop: ~16 FPS for natural fluid motion
    let currentIdx = 0;
    let lastTime = performance.now();
    const frameInterval = 1000 / 16;

    const render = (now: number) => {
      if (!isMounted) return;

      const elapsed = now - lastTime;
      if (isVisibleRef.current && elapsed >= frameInterval) {
        lastTime = now - (elapsed % frameInterval);

        // Find next loaded candidate frame in our pool
        const poolSize = frameIndices.length;
        let candidate = (currentIdx + 1) % poolSize;
        let searchAttempts = 0;

        while (
          searchAttempts < poolSize &&
          (!images[candidate] || !images[candidate].complete || images[candidate].naturalWidth === 0)
        ) {
          candidate = (candidate + 1) % poolSize;
          searchAttempts++;
        }

        if (
          images[candidate] &&
          images[candidate].complete &&
          images[candidate].naturalWidth > 0
        ) {
          ctx.drawImage(images[candidate], 0, 0, 1920, 1080);
          currentIdx = candidate;
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
        backgroundColor: '#FFF7E8',
      }}
    >
      {/* High-Resolution Poster Image: Stays visible permanently in background so there is NEVER a blank/bleak flash */}
      <img
        src="/images/ezgif-frame-001.jpg"
        alt="Goddess Saraswathi in traditional courtyard with veena, lotus, brass lamps, books, and laptop"
        fetchPriority="high"
        loading="eager"
        className="hero-media-canvas"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      />

      {/* Living Canvas Animator: Fades in seamlessly directly over the poster */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="hero-media-canvas"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: isReady ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      />
    </div>
  );
};
