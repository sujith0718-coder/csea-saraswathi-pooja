import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { siteContent } from '../data/content';
import { Compass, Sparkles, Rocket, ArrowRight } from 'lucide-react';

export const FutureSection: React.FC = () => {
  const { future } = siteContent;

  const stepIcons = [Compass, Sparkles, Rocket];

  return (
    <section
      id="future"
      style={{
        padding: 'clamp(5rem, 8vw, 8rem) 0',
        backgroundColor: 'var(--color-ivory)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow={future.eyebrow}
          title={future.title}
          subtitle={future.copy}
        />

        {/* Imaginative Campus Vignette & Future Narrative */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4rem)',
            alignItems: 'center',
            marginBottom: '4rem',
          }}
        >
          {/* Left Column: Campus Scene in Golden Sunrise */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="artwork-frame"
              style={{
                width: '100%',
                aspectRatio: '16/11',
                backgroundColor: 'var(--color-cream)',
              }}
            >
              <img
                src="/images/ezgif-frame-001.jpg"
                alt="Imaginative campus illustration in morning sunlight"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '26% 56%',
                  transform: 'scale(1.45)',
                  transformOrigin: '26% 56%',
                }}
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
                  border: '1px solid var(--color-gold)',
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
                    {future.campusHeading}
                  </div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.85 }}>
                    {future.campusSubtitle}
                  </div>
                </div>
                <span style={{ fontSize: '1.2rem' }}>🏛️</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Encouraging Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                display: 'inline-block',
                color: 'var(--color-marigold)',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              The Horizon Awaits
            </div>
            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                fontWeight: 600,
                color: 'var(--color-emerald)',
                lineHeight: 1.3,
                marginBottom: '0.35rem',
              }}
            >
              {future.campusHeading}
            </h3>
            <div
              className="font-serif"
              style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                fontStyle: 'italic',
                color: 'var(--color-gold-dark)',
                marginBottom: '1.25rem',
              }}
            >
              {future.campusSubtitle}
            </div>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.12rem)',
                color: 'var(--color-text-dark)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}
            >
              {future.campusDescription}
            </p>
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
              }}
            >
              Remember that every great engineer, researcher, and pioneer was once a student sitting with a question. Trust your pace, celebrate small milestones, and know that your unique voice has a place in the future of technology.
            </p>
          </motion.div>
        </div>

        {/* Visual Sequence: LEARN → GROW → CREATE */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              fontSize: '0.82rem',
              letterSpacing: '0.12em',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--color-emerald)',
              marginBottom: '0.5rem',
            }}
          >
            The Triad of Transformation
          </div>
          <h4
            className="font-serif"
            style={{
              fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
              color: 'var(--color-gold-dark)',
              fontStyle: 'italic',
            }}
          >
            Learn → Grow → Create
          </h4>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            position: 'relative',
          }}
        >
          {future.sequence.map((item, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-card"
                style={{
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.8rem',
                      fontWeight: 700,
                      color: 'rgba(198, 154, 69, 0.35)',
                    }}
                  >
                    {item.step}
                  </span>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #17452F 0%, #103624 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-gold-light)',
                      border: '1px solid var(--color-gold)',
                    }}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: 'var(--color-emerald)',
                    marginBottom: '0.65rem',
                  }}
                >
                  {item.label}
                </h3>

                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
