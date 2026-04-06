import { getTranslations } from 'next-intl/server';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Image from 'next/image';

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Services' });

  return (
    <main className="flex-grow container mx-auto px-6 md:px-12 py-16">
      <ScrollReveal>
        <h1 className="gsap-scroll-item text-4xl md:text-6xl font-bold mb-16 text-center">{t('title')}</h1>

        <div className="space-y-24">
          {/* Deep Tissue */}
          <div className="gsap-scroll-item flex flex-col md:flex-row gap-8 items-center bg-sand-alt p-8 rounded-2xl shadow-ambient border border-olive/10 group">
            <div className="w-full md:w-1/2 relative h-80 rounded-xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop" 
                alt={t('deepTissue')} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">{t('deepTissue')}</h2>
              <p className="text-lg opacity-80 leading-relaxed">{t('deepTissueDesc')}</p>
            </div>
          </div>

          {/* Reflexology */}
          <div className="gsap-scroll-item flex flex-col md:flex-row-reverse gap-8 items-center bg-sand-alt p-8 rounded-2xl shadow-ambient border border-olive/10 group">
             <div className="w-full md:w-1/2 relative h-80 rounded-xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop" 
                alt={t('reflexology')} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="w-full md:w-1/2 md:pr-12">
              <h2 className="text-3xl font-bold mb-4">{t('reflexology')}</h2>
              <p className="text-lg opacity-80 leading-relaxed">{t('reflexologyDesc')}</p>
            </div>
          </div>

           {/* Cupping */}
           <div className="gsap-scroll-item flex flex-col md:flex-row gap-8 items-center bg-sand-alt p-8 rounded-2xl shadow-ambient border border-olive/10 group">
            <div className="w-full md:w-1/2 relative h-80 rounded-xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1000&auto=format&fit=crop" 
                alt={t('cupping')} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">{t('cupping')}</h2>
              <p className="text-lg opacity-80 leading-relaxed">{t('cuppingDesc')}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </main>
  );
}
