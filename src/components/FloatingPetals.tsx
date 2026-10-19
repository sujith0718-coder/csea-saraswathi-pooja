import React, { useMemo } from 'react';

interface PetalConfig {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  type: 'marigold' | 'lotus' | 'jasmine';
  opacity: number;
  rotation: number;
}

export const FloatingPetals: React.FC = () => {
  // Generate 14 gentle petals with stable randomized parameters
  const petals = useMemo<PetalConfig[]>(() => {
    const types: ('marigold' | 'lotus' | 'jasmine')[] = ['marigold', 'lotus', 'jasmine', 'marigold', 'lotus'];
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: Math.floor((i * 7.1) + (Math.random() * 4)), // distributed across screen
      size: Math.floor(14 + Math.random() * 14), // 14px to 28px
      duration: Math.floor(18 + Math.random() * 14), // 18s to 32s (very slow, gentle breeze)
      delay: Math.floor(i * 1.6 + Math.random() * 2), // staggered delay
      type: types[i % types.length],
      opacity: 0.35 + Math.random() * 0.35, // soft opacity
      rotation: Math.floor(Math.random() * 360),
    }));
  }, []);

  return (
    <div className="petals-container" aria-hidden="true">
      {petals.map((petal) => {
        const isMarigold = petal.type === 'marigold';
        const isLotus = petal.type === 'lotus';

        return (
          <div
            key={petal.id}
            className="petal"
            style={{
              left: `${petal.left}vw`,
              top: '-5vh',
              width: `${petal.size}px`,
              height: `${petal.size * 1.3}px`,
              animation: `petalFall ${petal.duration}s linear infinite, petalSway ${petal.duration / 3}s ease-in-out infinite alternate`,
              animationDelay: `${petal.delay}s, ${petal.delay * 0.5}s`,
              opacity: petal.opacity,
            }}
          >
            <svg
              viewBox="0 0 30 40"
              width="100%"
              height="100%"
              style={{
                transform: `rotate(${petal.rotation}deg)`,
                filter: isMarigold
                  ? 'drop-shadow(0 2px 4px rgba(233, 161, 43, 0.25))'
                  : 'drop-shadow(0 2px 4px rgba(232, 166, 178, 0.25))',
              }}
            >
              {isMarigold ? (
                // Golden marigold petal
                <path
                  d="M15,2 C22,10 27,22 23,34 C19,40 11,40 7,34 C3,22 8,10 15,2 Z"
                  fill="url(#marigoldGradient)"
                />
              ) : isLotus ? (
                // Soft lotus pink petal
                <path
                  d="M15,2 C24,12 26,26 21,36 C17,40 13,40 9,36 C4,26 6,12 15,2 Z"
                  fill="url(#lotusGradient)"
                />
              ) : (
                // Delicate cream/jasmine petal
                <path
                  d="M15,4 C22,12 24,24 20,34 C16,38 14,38 10,34 C6,24 8,12 15,4 Z"
                  fill="url(#jasmineGradient)"
                />
              )}
              <defs>
                <linearGradient id="marigoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFA62B" />
                  <stop offset="60%" stopColor="#E9A12B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
                <linearGradient id="lotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FDE2E4" />
                  <stop offset="50%" stopColor="#E8A6B2" />
                  <stop offset="100%" stopColor="#D87093" />
                </linearGradient>
                <linearGradient id="jasmineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFDF7" />
                  <stop offset="70%" stopColor="#F9E8CA" />
                  <stop offset="100%" stopColor="#DFC07A" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );
      })}
    </div>
  );
};
