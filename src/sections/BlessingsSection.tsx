import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { siteContent } from '../data/content';
import { InteractiveDiya } from '../components/InteractiveDiya';
import { ArrowUp } from 'lucide-react';
import { OrnamentalDivider } from '../components/OrnamentalDivider';

export const BlessingsSection: React.FC = () => {
  const { blessings } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="blessings"
      style={{
        padding: 'clamp(5.5rem, 9vw, 8.5rem) 0 4rem 0',
        background: 'linear-gradient(180deg, #103624 0%, #0A2216 60%, #07170E 100%)',
        color: '#FFF7E8',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Golden divine aura in background */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(198, 154, 69, 0.16) 0%, rgba(10, 34, 22, 0) 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="container">
        <SectionHeading
          eyebrow={blessings.eyebrow}
          title={blessings.title}
          subtitle={blessings.copy}
          theme="dark"
        />

        {/* Interactive Brass Diya Experience */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem' }}
        >
          <InteractiveDiya />
        </motion.div>

        {/* Closing Warm Wishes & Signature Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: '680px',
            margin: '0 auto 4rem auto',
            textAlign: 'center',
            padding: '2.5rem 2rem',
            borderRadius: '20px',
            background: 'rgba(255, 247, 232, 0.05)',
            border: '1px solid rgba(223, 192, 122, 0.25)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🪷</div>

          <h3
            className="font-serif"
            style={{
              fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
              fontWeight: 600,
              color: 'var(--color-gold-light)',
              marginBottom: '1rem',
              lineHeight: 1.35,
            }}
          >
            {blessings.finalGreeting}
          </h3>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
              color: 'rgba(255, 247, 232, 0.88)',
              lineHeight: 1.75,
              marginBottom: '1.75rem',
            }}
          >
            {blessings.closing}
          </p>

          <OrnamentalDivider theme="dark" variant="diya" />

          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              color: 'var(--color-gold-light)',
              letterSpacing: '0.04em',
              marginTop: '1.25rem',
              fontWeight: 600,
              whiteSpace: 'pre-line',
            }}
          >
            {blessings.signature}
          </div>
          <div
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255, 247, 232, 0.6)',
              marginTop: '0.5rem',
            }}
          >
            Where Knowledge Blossoms, Wisdom Leads
          </div>
        </motion.div>

        {/* Back to Beginning Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          <button
            type="button"
            onClick={scrollToTop}
            className="btn-secondary"
            style={{
              background: 'rgba(255, 247, 232, 0.12)',
              borderColor: 'rgba(223, 192, 122, 0.4)',
              color: '#FFF7E8',
              padding: '0.75rem 1.6rem',
              gap: '0.6rem',
              cursor: 'pointer',
            }}
          >
            <ArrowUp size={16} style={{ color: 'var(--color-gold-light)' }} />
            <span>Back to the beginning</span>
          </button>
        </motion.div>

        {/* Subtle Footer */}
        <footer
          style={{
            borderTop: '1px solid rgba(223, 192, 122, 0.15)',
            paddingTop: '2rem',
            textAlign: 'center',
            fontSize: '0.82rem',
            color: 'rgba(255, 247, 232, 0.55)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <div>
            Computer Science and Engineering Association · PSG College of Technology
          </div>
          <div>
            Celebrating knowledge, creativity, and new beginnings
          </div>
        </footer>
      </div>
    </section>
  );
};
