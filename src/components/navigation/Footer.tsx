'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-sand-dark)',
        borderTop: '1px solid rgba(74, 67, 61, 0.1)',
        padding: '3rem clamp(2rem, 5vw, 6rem)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        {/* Logo */}
        <div>
          <img 
            src="/logo.png" 
            alt="Beethoven Clinic Logo" 
            className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Center */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.5rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-earth-mid)',
            textAlign: 'center',
          }}
        >
          {t('location')}
        </div>

        {/* Right */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.5rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-earth-mid)',
            textAlign: 'right',
          }}
        >
          <div style={{ marginBottom: '0.5rem' }}>© {new Date().getFullYear()} — All Rights Reserved</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}>
            <span>{t('madeBy')}</span>
            <a 
              href="https://github.com/ilyassbnh" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: 'var(--color-terracotta)', 
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-earth-dark)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-terracotta)'}
            >
              Ilyass B.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
