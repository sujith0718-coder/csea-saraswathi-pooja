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

    // 40 sequential frames on both phone and laptop for identical buttery smooth playback and pacing
    const totalFrames = 40;
    const frameIndices: number[] = [];
    for (let i = 1; i <= totalFrames; i++) {
      frameIndices.push(i);
    }

    const images: HTMLImageElement[] = [];
    let preloadTimer: number | null = null;
    let nextTimer: number | null = null;

    // Sequentially preload remaining frames in the background
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
          nextTimer = window.setTimeout(loadNext, 40);
        };
        frameImg.onerror = () => {
          if (!isMounted) return;
          nextTimer = window.setTimeout(loadNext, 80);
        };
        frameImg.src = `/images/ezgif-frame-${pad(targetFrameNum)}.jpg`;
        images[currentSlot] = frameImg;
      };

      loadNext();
    };

    // Load Frame 1 immediately
    const img1 = new Image();
    let frame1Loaded = false;

    const handleImg1Ready = () => {
      if (!isMounted || frame1Loaded) return;
      frame1Loaded = true;
      if (canvas && ctx) {
        canvas.width = 1920;
        canvas.height = 1080;
        ctx.drawImage(img1, 0, 0, 1920, 1080);
        setIsReady(true);
      }
      // Start sequential preload with breathing room
      preloadTimer = window.setTimeout(startSequentialPreload, 600);
    };

    img1.onload = handleImg1Ready;
    img1.src = `/images/ezgif-frame-001.jpg`;
    images[0] = img1;

    // If frame 1 is already in cache
    if (img1.complete && img1.naturalWidth > 0) {
      handleImg1Ready();
    }

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
          candidate !== currentIdx &&
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
      if (preloadTimer !== null) clearTimeout(preloadTimer);
      if (nextTimer !== null) clearTimeout(nextTimer);
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
      {/* High-Resolution Poster Image: Permanent background, never disappears */}
      <img
        src="/images/ezgif-frame-001.jpg"
        alt="Goddess Saraswathi in traditional courtyard with veena, lotus, brass lamps, books, and laptop"
        fetchPriority="high"
        loading="eager"
        className="hero-media-canvas"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          display: 'block',
        }}
      />

      {/* Living Canvas Animator: Active right above the poster */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="hero-media-canvas"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
          opacity: isReady ? 1 : 0,
        }}
      />
    </div>
  );
};
