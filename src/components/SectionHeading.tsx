import React from 'react';
import { motion } from 'motion/react';
import { OrnamentalDivider } from './OrnamentalDivider';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div
      className={`section-heading ${className}`}
      style={{
        textAlign: isCenter ? 'center' : 'left',
        marginBottom: '2.5rem',
      }}
    >
      {/* Eyebrow Badge */}
      <div
        style={{
          display: 'inline-flex',
          marginBottom: '0.85rem',
        }}
      >
        <span
          className="gold-badge"
          style={
            isDark
              ? {
                  background: 'rgba(255, 247, 232, 0.1)',
                  color: '#DFC07A',
                  borderColor: 'rgba(223, 192, 122, 0.4)',
                }
              : {}
          }
        >
          {eyebrow}
        </span>
      </div>

      {/* Main Heading */}
      <h2
        className="font-serif"
        style={{
          fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
          color: isDark ? '#FFF7E8' : 'var(--color-emerald)',
          marginBottom: '0.5rem',
        }}
      >
        {title}
      </h2>

      {/* Ornamental Divider */}
      <div
        style={{
          display: 'flex',
          justifyContent: isCenter ? 'center' : 'flex-start',
        }}
      >
        <OrnamentalDivider theme={theme} variant="lotus" />
      </div>

      {/* Optional Subtitle */}
      {subtitle && (
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            fontStyle: 'italic',
            lineHeight: 1.55,
            color: isDark ? '#DFC07A' : 'var(--color-gold-dark)',
            maxWidth: '750px',
            margin: isCenter ? '0 auto' : '0',
          }}
        >
          "{subtitle}"
        </p>
      )}
    </div>
  );
};
