import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { siteContent } from '../data/content';
import { Compass, Code2, Sparkles, Terminal } from 'lucide-react';

export const LearningSection: React.FC = () => {
  const { learning } = siteContent;

  const iconMap: Record<string, React.FC<{ size?: number }>> = {
    compass: Compass,
    code: Code2,
    sparkles: Sparkles,
  };

  return (
    <section
      id="learning"
      style={{
        padding: 'clamp(5rem, 8vw, 7.5rem) 0',
        backgroundColor: 'var(--color-ivory)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow={learning.eyebrow}
          title={learning.title}
          subtitle={learning.copy}
        />

        {/* CSEA Engineering & Learning Bridge Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'center',
            marginBottom: '3.5rem',
          }}
        >
          {/* Left Column: Focused Artwork Vignette on Laptop + Books */}
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
                aspectRatio: '16/10',
                backgroundColor: 'var(--color-cream)',
              }}
            >
              <img
                src="/images/ezgif-frame-001.jpg"
                alt="Close-up of laptop, textbooks, handwritten notes, and floral offerings"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '50% 92%',
                  transform: 'scale(1.45)',
                  transformOrigin: '50% 92%',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  background: 'rgba(16, 54, 36, 0.88)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--color-gold)',
                  color: '#FFF7E8',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                }}
              >
                <Terminal size={14} style={{ color: 'var(--color-marigold)' }} />
                <span>Curiosity, Logic & Creativity</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Connection to CSEA & Tech Journey */}
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
              For Every Aspiring Technologist
            </div>
            {learning.paragraphs.map((p, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: 'clamp(1rem, 1.2vw, 1.12rem)',
                  color: 'var(--color-text-dark)',
                  lineHeight: 1.8,
                  marginBottom: '1.25rem',
                }}
              >
                {p}
              </p>
            ))}
          </motion.div>
        </div>

        {/* 3 Pillars Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {learning.aspects.map((aspect, i) => {
            const Icon = iconMap[aspect.icon] || Sparkles;
            return (
              <motion.div
                key={aspect.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card"
                style={{
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #FFF7E8 0%, #F8EBD2 100%)',
                    border: '1.5px solid var(--color-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-emerald)',
                    marginBottom: '1.25rem',
                    boxShadow: '0 4px 12px rgba(198, 154, 69, 0.15)',
                  }}
                >
                  <Icon size={24} />
                </div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 600,
                    color: 'var(--color-emerald)',
                    marginBottom: '0.65rem',
                  }}
                >
                  {aspect.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {aspect.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
