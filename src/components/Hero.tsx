import React from 'react';
import { motion } from 'motion/react';
import { HeroCanvas } from './HeroCanvas';
import { siteContent } from '../data/content';
import { ChevronDown, Sparkles } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const Hero: React.FC = () => {
  const { hero } = siteContent;

  const scrollToStory = () => {
    const el = document.getElementById('celebration');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '80px',
        paddingBottom: '60px',
      }}
    >
      {/* Living Artwork Canvas (Desktop & Mobile) */}
      <HeroCanvas />

      {/* Responsive Contrast Overlays */}
      <div
        className="hero-overlay-desktop"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(255, 247, 232, 0.96) 0%, rgba(255, 247, 232, 0.90) 38%, rgba(255, 247, 232, 0.45) 58%, rgba(255, 247, 232, 0.05) 80%, rgba(255, 247, 232, 0) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div
        className="hero-overlay-mobile"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(255, 247, 232, 0.92) 0%, rgba(255, 247, 232, 0.82) 48%, rgba(255, 247, 232, 0.35) 72%, rgba(255, 247, 232, 0.90) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
          display: 'none',
        }}
      />

      {/* Hero Foreground Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
        }}
      >
        <div
          style={{
            maxWidth: '680px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
          className="hero-text-block"
        >
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: '1.25rem' }}
          >
            <div className="gold-badge">
              <span role="img" aria-label="Lamp" style={{ fontSize: '0.9rem' }}>
                🪔
              </span>
              <span>{hero.eyebrow}</span>
            </div>
          </motion.div>

          {/* Main Heading: "HAPPY SARASWATHI POOJA" */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif"
            style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--color-emerald)',
              marginBottom: '0.75rem',
            }}
          >
            Happy Saraswathi <br />
            <span className="text-gold-gradient">Pooja</span>
          </motion.h1>

          {/* Ornamental Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ margin: '0.25rem 0 1rem 0' }}
          >
            <OrnamentalDivider variant="lotus" />
          </motion.div>

          {/* Supporting Line: "Where knowledge blossoms, wisdom leads." */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif"
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.85rem)',
              fontStyle: 'italic',
              fontWeight: 500,
              color: 'var(--color-gold-dark)',
              lineHeight: 1.4,
              marginBottom: '0.75rem',
            }}
          >
            "{hero.tagline}"
          </motion.p>

          {/* Secondary Line: "Celebrating knowledge, creativity, and new beginnings." */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              maxWidth: '540px',
              marginBottom: '2rem',
            }}
          >
            {hero.subtitle}
          </motion.p>

          {/* Core Pillars: "Learn with Curiosity", "Grow with Gratitude", "Dream with Courage" */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.85rem',
              marginBottom: '2.5rem',
            }}
          >
            {hero.corePillars.map((pillar) => (
              <div
                key={pillar.label}
                className="glass-card"
                style={{
                  padding: '0.6rem 1.15rem',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.4rem',
                  borderRadius: '9999px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    fontSize: '1.02rem',
                    color: 'var(--color-emerald)',
                    letterSpacing: '0.01em',
                  }}
                >
                  {pillar.label}
                </span>
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-gold-dark)',
                    fontWeight: 500,
                    marginLeft: '0.2rem',
                  }}
                >
                  {pillar.detail}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Action & Scroll Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="button"
              onClick={scrollToStory}
              className="btn-primary"
            >
              <Sparkles size={16} />
              <span>{hero.scrollPrompt}</span>
              <ChevronDown size={16} />
            </button>

            <a
              href="#blessings"
              className="btn-secondary"
            >
              <span>Celebration Wishes</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          cursor: 'pointer',
          zIndex: 3,
        }}
        onClick={scrollToStory}
      >
        <span
          style={{
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            fontWeight: 600,
            textTransform: 'uppercase',
            color: 'var(--color-gold-dark)',
          }}
        >
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{
            width: '28px',
            height: '42px',
            borderRadius: '14px',
            border: '1.5px solid var(--color-gold)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{
              width: '4px',
              height: '8px',
              borderRadius: '2px',
              backgroundColor: 'var(--color-marigold)',
            }}
          />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 860px) {
          .hero-overlay-desktop {
            display: none !important;
          }
          .hero-overlay-mobile {
            display: block !important;
          }
          .hero-text-block {
            max-width: 100% !important;
            background: rgba(255, 247, 232, 0.88);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            padding: 1.5rem;
            border-radius: 20px;
            border: 1px solid rgba(198, 154, 69, 0.35);
            box-shadow: 0 10px 30px rgba(16, 54, 36, 0.08);
          }
        }
      `}</style>
    </section>
  );
};
