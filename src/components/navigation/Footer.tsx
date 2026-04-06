import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="mt-auto py-8 text-center opacity-40 hover:opacity-80 transition-opacity duration-300">
      <div className="container mx-auto px-6">
        <p className="text-sm uppercase tracking-widest">{t('location')}</p>
      </div>
    </footer>
  );
}
