import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { siteContent } from '../data/content';
import { BookOpen, Sparkles, Feather } from 'lucide-react';

export const CelebrationSection: React.FC = () => {
  const { celebration } = siteContent;

  const featureIcons = [Feather, Sparkles, BookOpen];

  return (
    <section
      id="celebration"
      style={{
        padding: 'clamp(4.5rem, 8vw, 7.5rem) 0',
        backgroundColor: 'var(--color-cream-light)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background subtle decorative radiance */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          right: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233, 161, 43, 0.12) 0%, rgba(255, 247, 232, 0) 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="container">
        <SectionHeading
          eyebrow={celebration.eyebrow}
          title={celebration.title}
          subtitle={celebration.copy}
        />

        {/* 2-Column Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          {/* Left Column: Framed Artwork Vignette */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <div
              className="artwork-frame"
              style={{
                width: '100%',
                aspectRatio: '4/3',
                backgroundColor: 'var(--color-emerald)',
              }}
            >
              <img
                src="/images/ezgif-frame-001.jpg"
                alt="Traditional illustration of Goddess Saraswathi with veena and lotus in courtyard"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '75% 50%',
                  transition: 'transform 0.8s ease',
                }}
                className="hover-zoom"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(16, 54, 36, 0.88)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(198, 154, 69, 0.4)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--color-gold-light)',
                    }}
                  >
                    Goddess Saraswathi
                  </div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.85 }}>
                    Associated with Knowledge, Learning, Music & Art
                  </div>
                </div>
                <span style={{ fontSize: '1.2rem' }}>🪷</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Tradition Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {celebration.paragraphs.slice(1).map((p, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: 'clamp(1rem, 1.2vw, 1.12rem)',
                  color: 'var(--color-text-dark)',
                  lineHeight: 1.75,
                  marginBottom: '1.25rem',
                }}
              >
                {p}
              </p>
            ))}

            {/* Symbols Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1rem',
                marginTop: '1.75rem',
              }}
            >
              {celebration.features.map((feat, i) => {
                const Icon = featureIcons[i % featureIcons.length];
                return (
                  <div
                    key={feat.title}
                    className="glass-card"
                    style={{
                      padding: '1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                    }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #17452F 0%, #103624 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-gold-light)',
                        flexShrink: 0,
                        marginTop: '2px',
                        border: '1px solid var(--color-gold)',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4
                        className="font-serif"
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: 600,
                          color: 'var(--color-emerald)',
                          marginBottom: '0.2rem',
                        }}
                      >
                        {feat.title}
                      </h4>
                      <p
                        style={{
                          fontSize: '0.9rem',
                          color: 'var(--color-text-muted)',
                          lineHeight: 1.5,
                        }}
                      >
                        {feat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hover-zoom:hover {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};
