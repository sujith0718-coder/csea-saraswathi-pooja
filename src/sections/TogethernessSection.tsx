import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { siteContent } from '../data/content';
import { Heart, Users, GraduationCap, Home } from 'lucide-react';

export const TogethernessSection: React.FC = () => {
  const { togetherness } = siteContent;

  const cardIcons = [GraduationCap, Home, Users, Heart];

  return (
    <section
      id="togetherness"
      style={{
        padding: 'clamp(5rem, 8vw, 7.5rem) 0',
        backgroundColor: 'var(--color-cream-light)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative lotus pink radial aura */}
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232, 166, 178, 0.15) 0%, rgba(255, 247, 232, 0) 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="container">
        <SectionHeading
          eyebrow={togetherness.eyebrow}
          title={togetherness.title}
          subtitle={togetherness.copy}
        />

        {/* Narrative lead */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto 3.5rem auto',
            textAlign: 'center',
          }}
        >
          {togetherness.paragraphs.map((p, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw, 1.15rem)',
                color: 'var(--color-text-dark)',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* 4 Pillars of Gratitude Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {togetherness.gratitudeCards.map((card, i) => {
            const Icon = cardIcons[i % cardIcons.length];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="glass-card"
                style={{
                  padding: '2rem 1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  borderTop: '3px solid var(--color-gold)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #17452F 0%, #103624 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-gold-light)',
                      border: '1px solid var(--color-gold)',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-marigold)',
                    }}
                  >
                    {card.role}
                  </span>
                </div>

                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    color: 'var(--color-emerald)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
