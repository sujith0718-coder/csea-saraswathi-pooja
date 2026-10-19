import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { siteContent } from '../data/content';
import { Sparkles } from 'lucide-react';

export const WisdomSection: React.FC = () => {
  const { wisdom } = siteContent;

  return (
    <section
      id="wisdom"
      style={{
        padding: 'clamp(5rem, 9vw, 8rem) 0',
        background: 'linear-gradient(180deg, #103624 0%, #0A2216 100%)',
        color: '#FFF7E8',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Golden halo glow background */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(198, 154, 69, 0.15) 0%, rgba(10, 34, 22, 0) 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="container">
        <SectionHeading
          eyebrow={wisdom.eyebrow}
          title={wisdom.title}
          subtitle={wisdom.copy}
          theme="dark"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4rem)',
            alignItems: 'center',
            marginTop: '3rem',
          }}
        >
          {/* Left Column: Thoughtful Philosophy & Core Reflection */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {wisdom.paragraphs.map((p, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: 'clamp(1.05rem, 1.25vw, 1.18rem)',
                  color: 'rgba(255, 247, 232, 0.92)',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                }}
              >
                {p}
              </p>
            ))}

            {/* Wisdom Reflection Box */}
            <div
              className="glass-card-dark"
              style={{
                padding: '1.75rem',
                marginTop: '2rem',
                position: 'relative',
                borderLeft: '4px solid var(--color-gold)',
              }}
            >
              <Sparkles
                size={24}
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  color: 'var(--color-gold)',
                  opacity: 0.6,
                }}
              />
              <p
                className="font-serif"
                style={{
                  fontSize: 'clamp(1.15rem, 1.6vw, 1.35rem)',
                  fontStyle: 'italic',
                  color: 'var(--color-gold-light)',
                  lineHeight: 1.6,
                }}
              >
                "{wisdom.reflection}"
              </p>
            </div>
          </motion.div>

          {/* Right Column: Close-up Vignette of Goddess & Veena */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="artwork-frame"
              style={{
                width: '100%',
                aspectRatio: '1/1',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(198, 154, 69, 0.25)',
                borderColor: 'rgba(223, 192, 122, 0.5)',
              }}
            >
              <img
                src="/images/ezgif-frame-001.jpg"
                alt="Detailed focus on Goddess Saraswathi and the Veena"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '78% 48%',
                  transform: 'scale(1.25)',
                  transformOrigin: '78% 48%',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
