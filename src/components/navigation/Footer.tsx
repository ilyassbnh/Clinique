'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer
      style={{
        backgroundColor: '#0d0d0d',
        borderTop: '1px solid rgba(201, 169, 110, 0.1)',
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
          <div
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '1rem',
              fontWeight: 700,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#c9a96e',
            }}
          >
            N · H · T
          </div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.45rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(201, 169, 110, 0.35)',
              marginTop: '2px',
            }}
          >
            Beethoven Clinic
          </div>
        </div>

        {/* Center */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.5rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(232, 228, 220, 0.2)',
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
            color: 'rgba(232, 228, 220, 0.18)',
          }}
        >
          © {new Date().getFullYear()} — All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
