import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Noto_Serif, Manrope, Amiri, Cairo } from 'next/font/google';
import '../globals.css'; // since it's one level up

// English Fonts
const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

// Arabic Fonts
const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
});

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Index'});
 
  return {
    title: t('title') + ' | Premium Wellness',
    description: t('subtitle')
  };
}

import Header from '@/components/navigation/Header';

import WhatsAppWidget from '@/components/navigation/WhatsAppWidget';

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

  const fontClasses = locale === 'ar' 
    ? `${amiri.variable} ${cairo.variable} font-cairo` 
    : `${notoSerif.variable} ${manrope.variable} font-manrope`;

  return (
    <html lang={locale} dir={dir} className={fontClasses}>
      <body className="bg-sand text-ink antialiased min-h-screen flex flex-col selection:bg-sage selection:text-white pt-20">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          {children}
          <WhatsAppWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
