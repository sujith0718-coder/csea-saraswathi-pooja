import React, { useEffect, useRef, useState } from 'react';

interface HeroCanvasProps {
  className?: string;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const isVisibleRef = useRef(true);
  const animFrameIdRef = useRef<number | null>(null);

  // Total available frames in images/
  const TOTAL_FRAMES = 40;

  useEffect(() => {
    let isMounted = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const images: HTMLImageElement[] = [];

    // Zero-pad frame number: e.g. 1 -> "001"
    const pad = (n: number) => n.toString().padStart(3, '0');

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
      startProgressivePreload();
    };

    img1.onload = handleImg1Ready;
    img1.src = `/images/ezgif-frame-001.jpg`;
    images[0] = img1;

    // In case image was already cached by browser
    if (img1.complete && img1.naturalWidth > 0) {
      handleImg1Ready();
    }

    // Progressively preload remaining frames in background
    const startProgressivePreload = () => {
      let index = 2;

      const loadNext = () => {
        if (!isMounted || index > TOTAL_FRAMES) return;
        const currentIdx = index;
        index++;

        const frameImg = new Image();
        frameImg.onload = () => {
          if (!isMounted) return;
          // Trigger next frame download sequentially to avoid network congestion on mobile
          loadNext();
        };
        frameImg.onerror = () => {
          if (!isMounted) return;
          loadNext();
        };
        frameImg.src = `/images/ezgif-frame-${pad(currentIdx)}.jpg`;
        images[currentIdx - 1] = frameImg;
      };

      // Start 2 concurrent preload threads
      loadNext();
      setTimeout(loadNext, 40);
    };

    // IntersectionObserver to pause playback when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
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

        // Find next available loaded frame
        let candidate = (currentFrame + 1) % TOTAL_FRAMES;
        let searchAttempts = 0;

        while (
          searchAttempts < TOTAL_FRAMES &&
          (!images[candidate] || !images[candidate].complete || images[candidate].naturalWidth === 0)
        ) {
          candidate = (candidate + 1) % TOTAL_FRAMES;
          searchAttempts++;
        }

        if (
          images[candidate] &&
          images[candidate].complete &&
          images[candidate].naturalWidth > 0
        ) {
          ctx.drawImage(images[candidate], 0, 0, 1920, 1080);
          currentFrame = candidate;
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
      {/* High-Resolution Poster Image (Visible immediately, fallback) */}
      <img
        src="/images/ezgif-frame-001.jpg"
        alt="Goddess Saraswathi in traditional courtyard with veena, lotus, brass lamps, books, and laptop"
        fetchPriority="high"
        loading="eager"
        className="hero-media-canvas"
        style={{
          display: isReady ? 'none' : 'block',
        }}
      />

      {/* Living Canvas Animator */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="hero-media-canvas"
        style={{
          opacity: isReady ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      />
    </div>
  );
};
