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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: nextLocale });
    setIsMobileMenuOpen(false); // Auto-close on interaction
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-sand/80 backdrop-blur-[20px] border-b border-olive/5 shadow-ambient transition-all duration-300">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <div className="text-xl font-bold tracking-wider relative z-[60]">
            <Link href="/" onClick={closeMenu}>N.H.T.</Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide opacity-80">
            <Link href="/" className="hover:text-sage hover:opacity-100 transition-colors">{t('home')}</Link>
            <Link href="/services" className="hover:text-sage hover:opacity-100 transition-colors">{t('services')}</Link>
            <Link href="/gallery" className="hover:text-sage hover:opacity-100 transition-colors">{t('gallery')}</Link>
            <Link href="/contact" className="hover:text-sage hover:opacity-100 transition-colors">{t('contact')}</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="text-sm font-semibold hover:text-sage transition-colors uppercase"
            >
              {locale === 'en' ? 'AR' : 'EN'}
            </button>
            
            <Link 
              href="/contact" 
              className="bg-sage text-sand font-semibold text-sm py-2 px-6 rounded-md hover:bg-sage/90 hover:shadow-ambient transform hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300"
            >
              {t('book')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-4 relative z-[60]">
            {/* Keeping the language toggle visible on mobile header alongside hamburger is optional, but often requested. We will place it inside the menu to stay clean as requested. */}
            <button 
              className="text-ink flex items-center justify-center focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-sand/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-center px-6 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl uppercase tracking-widest font-semibold mb-12">
          <Link href="/" onClick={closeMenu} className="hover:text-sage transition-colors">{t('home')}</Link>
          <Link href="/services" onClick={closeMenu} className="hover:text-sage transition-colors">{t('services')}</Link>
          <Link href="/gallery" onClick={closeMenu} className="hover:text-sage transition-colors">{t('gallery')}</Link>
          <Link href="/contact" onClick={closeMenu} className="hover:text-sage transition-colors">{t('contact')}</Link>
        </nav>
        
        <div className="flex flex-col items-center gap-8 mt-6">
          <button 
            onClick={toggleLanguage}
            className="text-xl font-bold hover:text-sage transition-colors uppercase tracking-widest border-b border-olive/20 pb-2"
          >
            {locale === 'en' ? 'Arabic' : 'English'}
          </button>
          
          <Link 
            href="/contact" 
            onClick={closeMenu}
            className="bg-sage text-sand font-semibold text-lg py-4 px-12 rounded-md hover:bg-sage/90 hover:shadow-ambient transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 w-full text-center max-w-[300px]"
          >
            {t('book')}
          </Link>
        </div>
      </div>
    </>
  );
}
