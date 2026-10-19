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
      className="hero-section"
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

      {/* Desktop Contrast Overlay: Leaves the Goddess and Veena on the right clear and vibrant */}
      <div
        className="hero-overlay-desktop"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(255, 247, 232, 0.96) 0%, rgba(255, 247, 232, 0.90) 38%, rgba(255, 247, 232, 0.45) 58%, rgba(255, 247, 232, 0.05) 80%, rgba(255, 247, 232, 0) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Mobile Contrast Overlay: Soft top & bottom scrims; MIDDLE 40% is 100% transparent to showcase Goddess & animation */}
      <div
        className="hero-overlay-mobile"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(255, 247, 232, 0.95) 0%, rgba(255, 247, 232, 0.72) 22%, rgba(255, 247, 232, 0) 38%, rgba(255, 247, 232, 0) 65%, rgba(255, 247, 232, 0.78) 82%, rgba(255, 247, 232, 0.96) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
          display: 'none',
        }}
      />

      {/* Hero Foreground Content */}
      <div
        className="container hero-container"
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
          {/* Top Content Group */}
          <div className="hero-top-group">
            {/* Eyebrow Badge */}
            <div style={{ marginBottom: '1rem' }}>
              <div className="gold-badge">
                <span role="img" aria-label="Lamp" style={{ fontSize: '0.9rem' }}>
                  🪔
                </span>
                <span>{hero.eyebrow}</span>
              </div>
            </div>

            {/* Main Heading: "Happy Saraswathi Pooja" */}
            <h1
              className="font-serif hero-title"
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--color-emerald)',
                marginBottom: '0.5rem',
              }}
            >
              Happy Saraswathi <br />
              <span className="text-gold-gradient">Pooja</span>
            </h1>

            {/* Ornamental Divider */}
            <div style={{ margin: '0.15rem 0 0.85rem 0' }}>
              <OrnamentalDivider variant="lotus" />
            </div>

            {/* Supporting Line: "Where knowledge blossoms, wisdom leads." */}
            <p
              className="font-serif hero-tagline"
              style={{
                fontSize: 'clamp(1.2rem, 2.4vw, 1.85rem)',
                fontStyle: 'italic',
                fontWeight: 500,
                color: 'var(--color-gold-dark)',
                lineHeight: 1.35,
                marginBottom: '0.5rem',
              }}
            >
              "{hero.tagline}"
            </p>

            {/* Secondary Line: "Celebrating knowledge, creativity, and new beginnings." */}
            <p
              className="hero-subtitle"
              style={{
                fontSize: 'clamp(0.92rem, 1.2vw, 1.08rem)',
                color: 'var(--color-text-muted)',
                lineHeight: 1.55,
                maxWidth: '540px',
                marginBottom: '1.75rem',
              }}
            >
              {hero.subtitle}
            </p>
          </div>

          {/* On Mobile: Visual Window Spacer so Goddess, Veena, Lotus, and Living Animation Mingle Beautifully */}
          <div className="hero-art-spacer" aria-hidden="true" />

          {/* Bottom Content Group (Pillars & Action Buttons) */}
          <div className="hero-bottom-group" style={{ width: '100%' }}>
            {/* Core Pillars: "Learn with Curiosity", "Grow with Gratitude", "Dream with Courage" */}
            <div
              className="hero-pillars-group"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginBottom: '2rem',
              }}
            >
              {hero.corePillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="glass-card hero-pillar-chip"
                  style={{
                    padding: '0.55rem 1.15rem',
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
                      fontSize: '1rem',
                      color: 'var(--color-emerald)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {pillar.label}
                  </span>
                  <span
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--color-gold-dark)',
                      fontWeight: 500,
                      marginLeft: '0.2rem',
                    }}
                  >
                    {pillar.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* Action & Scroll Prompt */}
            <div
              className="hero-actions-group"
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
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator at bottom */}
      <div
        className="hero-scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '20px',
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
        <div
          style={{
            width: '26px',
            height: '38px',
            borderRadius: '13px',
            border: '1.5px solid var(--color-gold)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '5px',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '7px',
              borderRadius: '2px',
              backgroundColor: 'var(--color-marigold)',
            }}
          />
        </div>
      </div>

      <style>{`
        .hero-art-spacer {
          display: none;
        }

        @media (max-width: 860px) {
          .hero-overlay-desktop {
            display: none !important;
          }
          .hero-overlay-mobile {
            display: block !important;
          }
          .hero-section {
            min-height: 100svh !important;
            padding-top: 72px !important;
            padding-bottom: 24px !important;
            align-items: stretch !important;
          }
          .hero-container {
            display: flex !important;
            flex-direction: column !important;
            justifyContent: space-between !important;
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
          /* Remove the opaque beige card on phone so the artwork shines through! */
          .hero-text-block {
            max-width: 100% !important;
            background: transparent !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
            text-align: center !important;
            align-items: center !important;
          }
          .hero-top-group {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .hero-title {
            font-size: clamp(2rem, 7.2vw, 2.75rem) !important;
            text-shadow: 0 1px 6px rgba(255, 247, 232, 0.9);
          }
          .hero-tagline {
            font-size: clamp(1.05rem, 3.8vw, 1.3rem) !important;
            text-shadow: 0 1px 5px rgba(255, 247, 232, 0.9);
            margin-bottom: 0.35rem !important;
          }
          .hero-subtitle {
            font-size: 0.88rem !important;
            margin-bottom: 0.75rem !important;
            text-shadow: 0 1px 4px rgba(255, 247, 232, 0.85);
          }
          /* Visual stage window on phone for Goddess, Veena, and animation */
          .hero-art-spacer {
            display: block !important;
            height: clamp(180px, 32vh, 270px) !important;
            width: 100% !important;
          }
          .hero-bottom-group {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .hero-pillars-group {
            justify-content: center !important;
            gap: 0.45rem !important;
            margin-bottom: 1.25rem !important;
          }
          .hero-pillar-chip {
            padding: 0.42rem 0.85rem !important;
            background: rgba(255, 252, 245, 0.88) !important;
            backdrop-filter: blur(8px) !important;
            -webkit-backdrop-filter: blur(8px) !important;
            box-shadow: 0 2px 8px rgba(16, 54, 36, 0.1) !important;
          }
          .hero-actions-group {
            justify-content: center !important;
            gap: 0.75rem !important;
          }
          .hero-scroll-indicator {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
