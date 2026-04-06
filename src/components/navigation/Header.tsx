'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sand/80 backdrop-blur-[20px] border-b border-olive/5 shadow-ambient transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <div className="text-xl font-bold tracking-wider">
          <Link href="/">N.H.T.</Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide opacity-80">
          <Link href="/" className="hover:text-sage hover:opacity-100 transition-colors">{t('home')}</Link>
          <Link href="/services" className="hover:text-sage hover:opacity-100 transition-colors">{t('services')}</Link>
          <Link href="/gallery" className="hover:text-sage hover:opacity-100 transition-colors">{t('gallery')}</Link>
          <Link href="/contact" className="hover:text-sage hover:opacity-100 transition-colors">{t('contact')}</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="text-sm font-semibold hover:text-sage transition-colors uppercase"
          >
            {locale === 'en' ? 'AR' : 'EN'}
          </button>
          
          <Link 
            href="/contact" 
            className="bg-sage text-sand font-semibold text-sm py-2 px-6 rounded-md hover:bg-sage/90 hover:shadow-ambient transform hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 hidden sm:block"
          >
            {t('book')}
          </Link>
        </div>
      </div>
    </header>
  );
}
