import React from 'react';

interface OrnamentalDividerProps {
  variant?: 'lotus' | 'diya' | 'floral' | 'simple';
  className?: string;
  theme?: 'light' | 'dark';
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  variant = 'lotus',
  className = '',
  theme = 'light',
}) => {
  const isDark = theme === 'dark';
  const strokeColor = isDark ? '#DFC07A' : '#C69A45';
  const fillColor = isDark ? '#E9A12B' : '#C69A45';

  return (
    <div
      className={`ornament-line ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.85rem',
        margin: '1.25rem 0',
      }}
      aria-hidden="true"
    >
      <svg
        width="180"
        height="24"
        viewBox="0 0 180 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: '100%', height: 'auto' }}
      >
        {/* Left flourish line */}
        <path
          d="M10 12 H70 M25 8 Q45 12 65 12"
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity={isDark ? '0.7' : '0.6'}
        />

        {variant === 'lotus' ? (
          /* Central Lotus Bloom */
          <g transform="translate(90, 12)">
            {/* Center petal */}
            <path
              d="M0 -9 C3 -4 4 2 0 7 C-4 2 -3 -4 0 -9 Z"
              fill={fillColor}
              opacity="0.9"
            />
            {/* Left petal */}
            <path
              d="M-1 1 C-6 -4 -10 0 -5 6 C-3 6 -2 4 -1 1 Z"
              fill={fillColor}
              opacity="0.75"
            />
            {/* Right petal */}
            <path
              d="M1 1 C6 -4 10 0 5 6 C3 6 2 4 1 1 Z"
              fill={fillColor}
              opacity="0.75"
            />
            {/* Lotus Base */}
            <circle cx="0" cy="8" r="1.5" fill={strokeColor} />
          </g>
        ) : (
          /* Central Diya Flame */
          <g transform="translate(90, 12)">
            <path
              d="M-5 5 C-5 7 5 7 5 5 C4 3 -4 3 -5 5 Z"
              fill={strokeColor}
            />
            <path
              d="M0 -7 C2 -3 3 0 0 4 C-3 0 -2 -3 0 -7 Z"
              fill={fillColor}
            />
          </g>
        )}

        {/* Right flourish line */}
        <path
          d="M110 12 H170 M115 12 Q135 12 155 8"
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity={isDark ? '0.7' : '0.6'}
        />
      </svg>
    </div>
  );
};
