import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Index'});
 
  return {
    title: 'Natural Health Therapies | Premium Mediterranean Spa',
    description: t('subtitle'),
    keywords: 'luxury massage, natural health, holistic wellness, deep tissue therapy, premium spa',
  };
}

import Header from '@/components/navigation/Header';
import WhatsAppWidget from '@/components/navigation/WhatsAppWidget';
import Footer from '@/components/navigation/Footer';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-sand-light text-earth-dark antialiased min-h-screen flex flex-col pt-20" style={{ backgroundColor: 'var(--color-sand-light)', color: 'var(--color-earth-dark)' }}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          {children}
          <Footer />
          <WhatsAppWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
