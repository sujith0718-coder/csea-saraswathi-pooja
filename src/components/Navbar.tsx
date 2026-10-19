import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  onShowerPetals?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Celebration', href: '#celebration' },
    { label: 'Wisdom', href: '#wisdom' },
    { label: 'Learning', href: '#learning' },
    { label: 'Togetherness', href: '#togetherness' },
    { label: 'Future', href: '#future' },
    { label: 'Wishes', href: '#blessings' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.35s ease',
        backgroundColor: isScrolled
          ? 'rgba(255, 247, 232, 0.92)'
          : 'rgba(255, 247, 232, 0.75)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: isScrolled
          ? '1px solid rgba(198, 154, 69, 0.25)'
          : '1px solid transparent',
        boxShadow: isScrolled
          ? '0 4px 20px rgba(16, 54, 36, 0.06)'
          : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: isScrolled ? '64px' : '74px',
          transition: 'height 0.3s ease',
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: 'inherit',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #17452F 0%, #103624 100%)',
              border: '1.5px solid #C69A45',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(198, 154, 69, 0.3)',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: '1.15rem',
                lineHeight: 1,
              }}
              role="img"
              aria-label="Lotus"
            >
              🪷
            </span>
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.08em',
                color: 'var(--color-emerald)',
                lineHeight: 1.15,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              CSEA <span style={{ color: 'var(--color-gold)', fontWeight: 400 }}>·</span> PSG TECH
            </div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.8rem',
                fontStyle: 'italic',
                color: 'var(--color-gold-dark)',
                lineHeight: 1.1,
              }}
            >
              Where Knowledge Blossoms
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                color: 'var(--color-text-dark)',
                letterSpacing: '0.02em',
                transition: 'color 0.2s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-marigold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-dark)')}
            >
              {link.label}
            </a>
          ))}

          {/* Festive Wishes Action */}
          <a
            href="#blessings"
            onClick={(e) => handleLinkClick(e, '#blessings')}
            className="btn-primary"
            style={{
              padding: '0.55rem 1.25rem',
              fontSize: '0.82rem',
              letterSpacing: '0.04em',
            }}
          >
            <Sparkles size={14} />
            <span>Wishes</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            style={{
              background: 'transparent',
              border: '1px solid var(--color-border-gold)',
              borderRadius: '8px',
              padding: '0.45rem',
              cursor: 'pointer',
              color: 'var(--color-emerald)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: 'hidden',
              background: 'rgba(255, 247, 232, 0.98)',
              borderBottom: '1px solid var(--color-border-gold)',
              boxShadow: '0 10px 25px rgba(16, 54, 36, 0.1)',
            }}
          >
            <div
              className="container"
              style={{
                paddingTop: '1.25rem',
                paddingBottom: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--color-text-dark)',
                    padding: '0.4rem 0',
                    borderBottom: '1px solid rgba(198, 154, 69, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{link.label}</span>
                  <span style={{ color: 'var(--color-gold)', fontSize: '0.8rem' }}>→</span>
                </a>
              ))}
              <a
                href="#blessings"
                onClick={(e) => handleLinkClick(e, '#blessings')}
                className="btn-primary"
                style={{
                  marginTop: '0.5rem',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                <Sparkles size={16} />
                <span>Festival Wishes</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
