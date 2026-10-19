import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const InteractiveDiya: React.FC = () => {
  const [thoughtIndex, setThoughtIndex] = useState(0);
  const [showPetalShower, setShowPetalShower] = useState(false);

  const thoughts = [
    {
      text: "Stay curious. There is always something new to learn.",
      topic: "Curiosity",
    },
    {
      text: "Small steps can lead to meaningful progress.",
      topic: "Perseverance",
    },
    {
      text: "Share what you learn and help others grow.",
      topic: "Community",
    },
    {
      text: "Creativity begins with the courage to explore.",
      topic: "Creativity",
    },
    {
      text: "Kindness makes every achievement more meaningful.",
      topic: "Empathy",
    },
  ];

  const handleDiscoverThought = () => {
    setShowPetalShower(true);
    setThoughtIndex((prev) => (prev + 1) % thoughts.length);
    setTimeout(() => setShowPetalShower(false), 1200);
  };

  const currentThought = thoughts[thoughtIndex];

  return (
    <div
      className="glass-card-dark"
      style={{
        maxWidth: '680px',
        margin: '0 auto',
        padding: 'clamp(1.75rem, 4vw, 2.75rem)',
        borderRadius: '24px',
        border: '1.5px solid rgba(223, 192, 122, 0.4)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(198, 154, 69, 0.2)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background radial warm lamp glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233, 161, 43, 0.28) 0%, rgba(16, 54, 36, 0) 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Traditional Brass Diya Illustration */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '1.5rem',
          position: 'relative',
        }}
      >
        <div style={{ position: 'relative', width: '120px', height: '110px' }}>
          {/* Diya Flame */}
          <motion.div
            animate={{
              scale: [1, 1.08, 0.98, 1.05, 1],
              opacity: [0.95, 1, 0.9, 1, 0.95],
              filter: [
                'drop-shadow(0 -5px 15px rgba(244, 130, 37, 0.9)) drop-shadow(0 0 25px rgba(233, 161, 43, 0.7))',
                'drop-shadow(0 -8px 20px rgba(244, 130, 37, 1)) drop-shadow(0 0 35px rgba(233, 161, 43, 0.9))',
                'drop-shadow(0 -5px 15px rgba(244, 130, 37, 0.9)) drop-shadow(0 0 25px rgba(233, 161, 43, 0.7))',
              ],
            }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '32px',
              height: '48px',
              zIndex: 2,
            }}
          >
            <svg viewBox="0 0 32 48" width="100%" height="100%">
              {/* Outer Golden Flame */}
              <path
                d="M16 2 C22 14 28 26 24 38 C21 44 11 44 8 38 C4 26 10 14 16 2 Z"
                fill="url(#diyaFlameOuter)"
              />
              {/* Inner Bright Core Flame */}
              <path
                d="M16 14 C19 22 22 30 19 38 C17 42 15 42 13 38 C10 30 13 22 16 14 Z"
                fill="url(#diyaFlameInner)"
              />
              <defs>
                <linearGradient id="diyaFlameOuter" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFF3B0" />
                  <stop offset="35%" stopColor="#FFA62B" />
                  <stop offset="70%" stopColor="#E9A12B" />
                  <stop offset="100%" stopColor="#C44500" />
                </linearGradient>
                <linearGradient id="diyaFlameInner" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="60%" stopColor="#FFF9D2" />
                  <stop offset="100%" stopColor="#FFC857" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Gentle Incense Smoke Wisps */}
          <motion.div
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -35],
              x: [-2, 4, -3],
            }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '-15px',
              left: '42%',
              width: '18px',
              height: '35px',
              pointerEvents: 'none',
            }}
          >
            <svg viewBox="0 0 20 40" fill="none">
              <path
                d="M10 35 C5 25 15 15 10 0"
                stroke="rgba(255, 247, 232, 0.45)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* Brass Diya Vessel Base */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '110px',
              height: '55px',
              zIndex: 1,
            }}
          >
            <svg viewBox="0 0 110 55" width="100%" height="100%">
              {/* Bowl */}
              <path
                d="M10 20 C25 20 28 38 55 38 C82 38 85 20 100 20 C104 20 106 24 100 32 C88 46 68 50 55 50 C42 50 22 46 10 32 C4 24 6 20 10 20 Z"
                fill="url(#brassGradient)"
                stroke="#DFC07A"
                strokeWidth="1.2"
              />
              {/* Pedestal Base */}
              <ellipse cx="55" cy="51" rx="28" ry="4" fill="#8C6721" />
              {/* Ornate Engraving Lip */}
              <path
                d="M15 22 Q55 28 95 22"
                stroke="#FFE082"
                strokeWidth="1"
                fill="none"
              />
              <defs>
                <linearGradient id="brassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DFC07A" />
                  <stop offset="35%" stopColor="#C69A45" />
                  <stop offset="70%" stopColor="#966F23" />
                  <stop offset="100%" stopColor="#6E5014" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Topic Badge */}
      <div style={{ marginBottom: '1rem' }}>
        <span
          className="gold-badge"
          style={{
            background: 'rgba(198, 154, 69, 0.2)',
            color: 'var(--color-gold-light)',
            borderColor: 'var(--color-gold)',
          }}
        >
          {currentThought.topic}
        </span>
      </div>

      {/* Thought Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={thoughtIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
          style={{ minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
              color: 'var(--color-gold-light)',
              fontWeight: 600,
              lineHeight: 1.5,
              maxWidth: '560px',
              margin: '0 auto 1.75rem auto',
            }}
          >
            "{currentThought.text}"
          </p>
        </motion.div>
      </AnimatePresence>

      {/* "Discover a Thought" Button */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <button
          type="button"
          onClick={handleDiscoverThought}
          className="btn-primary"
          style={{
            background: 'linear-gradient(135deg, #C69A45 0%, #E9A12B 100%)',
            color: '#103624',
            fontWeight: 700,
            border: 'none',
            padding: '0.85rem 2rem',
            cursor: 'pointer',
          }}
        >
          <Sparkles size={16} />
          <span>Discover a Thought</span>
        </button>
      </div>

      {/* Subtle Flower Petal Animation */}
      <AnimatePresence>
        {showPetalShower && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 1.25 }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              background: 'radial-gradient(circle, rgba(233, 161, 43, 0.22) 0%, transparent 70%)',
            }}
          >
            <div style={{ fontSize: '2.5rem' }}>🪷 ✨</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
