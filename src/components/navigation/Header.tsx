'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useState, useEffect } from 'react';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Function no longer needed since we use standard Links for localization,
  // but keeping it just in case of any programmatic switches.
  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: nextLocale });
    setIsMobileMenuOpen(false);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/services', label: t('services') },
    { href: '/gallery', label: t('gallery') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(250, 248, 245, 0.95)'
            : 'rgba(250, 248, 245, 0.0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(74, 67, 61, 0.1)' : '1px solid transparent',
        }}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          
          {/* Logo wordmark */}
          <Link href="/" onClick={closeMenu} className="relative z-[60] group">
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '1.1rem',
                fontWeight: 700,
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'var(--color-earth-dark)',
                transition: 'color 0.3s ease',
              }}
            >
              N · H · T
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.45rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-earth-light)',
                marginTop: '1px',
              }}
            >
              Beethoven Clinic
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--color-earth-mid)',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-terracotta)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-earth-mid)')}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href={pathname}
              locale={locale === 'en' ? 'ar' : 'en'}
              onClick={closeMenu}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-earth-mid)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-terracotta)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-earth-mid)')}
            >
              {locale === 'en' ? 'AR' : 'EN'}
            </Link>
            
            <Link href="/contact" onClick={closeMenu}>
              <button className="btn-mediterranean" style={{ fontSize: '0.58rem', padding: '0.65rem 1.75rem' }}>
                <span>{t('book')}</span>
                <span style={{ fontSize: '0.7rem' }}>→</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-4 relative z-[60]">
            <button 
              style={{
                color: isMobileMenuOpen ? 'var(--color-terracotta)' : 'var(--color-earth-dark)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                padding: '4px',
                transition: 'color 0.3s ease',
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <line x1="4" y1="4" x2="20" y2="20"/>
                  <line x1="20" y1="4" x2="4" y2="20"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <line x1="3" y1="7" x2="21" y2="7"/>
                  <line x1="3" y1="17" x2="21" y2="17"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          background: 'rgba(250, 248, 245, 0.98)',
          backdropFilter: 'blur(30px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0',
          transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-12px)',
        }}
      >
        {/* Thin gold rule top */}
        <div style={{ width: '40px', height: '1px', background: 'rgba(200, 107, 83, 0.4)', marginBottom: '4rem' }} />

        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem', marginBottom: '4rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '2.5rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-earth-dark)',
                transition: 'color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-terracotta)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-earth-dark)')}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <Link 
            href={pathname}
            locale={locale === 'en' ? 'ar' : 'en'}
            onClick={closeMenu}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-terracotta)',
              background: 'none',
              border: '1px solid rgba(200, 107, 83, 0.2)',
              padding: '0.5rem 1.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
            }}
          >
            {locale === 'en' ? '— Arabic —' : '— English —'}
          </Link>
          
            <Link href="/contact" onClick={closeMenu}>
              <button className="btn-mediterranean">
                <span>{t('book')}</span>
                <span>→</span>
              </button>
            </Link>
          </div>

          <div style={{ width: '40px', height: '1px', background: 'rgba(200, 107, 83, 0.4)', marginTop: '4rem' }} />
      </div>
    </>
  );
}
