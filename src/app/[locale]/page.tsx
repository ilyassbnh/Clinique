import { getTranslations } from 'next-intl/server';
import HeroAnimation from '@/components/animations/HeroAnimation';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Image from 'next/image';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Index' });
  const ts = await getTranslations({ locale, namespace: 'Services' });

  return (
    <main className="flex-grow flex flex-col">
      {/* Hero Section */}
      <HeroAnimation>
        {/* Parallax Background */}
        <div className="hero-bg absolute inset-0 w-full h-[130%] -top-[15%]">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop"
            alt="Spa Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-ink/50 backdrop-blur-[2px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-sand">
          <h1 className="gsap-reveal text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight drop-shadow-lg">
            {t('title')}
          </h1>
          <p className="gsap-reveal text-lg md:text-2xl mb-12 max-w-2xl mx-auto opacity-90 drop-shadow">
            {t('subtitle')}
          </p>
          <div className="gsap-reveal">
            <button className="bg-sage text-sand font-semibold text-lg md:text-xl py-4 px-10 rounded-md hover:bg-sage/90 hover:shadow-ambient transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
              {t('cta')}
            </button>
          </div>
        </div>
      </HeroAnimation>

      {/* Services Section */}
      <section className="bg-sand-alt py-32 px-6 md:px-12">
        <div className="container mx-auto">
          <ScrollReveal>
             {/* Note the use of background shift to visually separate, but with ultra-subtle borders to satisfy accessibility */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="gsap-scroll-item bg-sand rounded-xl p-10 flex flex-col items-center text-center shadow-ambient border border-olive/10 group hover:-translate-y-2 transition-transform duration-500">
                <div className="w-20 h-20 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-sage text-2xl">01</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{ts('deepTissue')}</h3>
                <p className="opacity-80 leading-relaxed text-sm">
                  Release chronic muscle tension and promote healing with deep, focused pressure.
                </p>
              </div>

              <div className="gsap-scroll-item bg-sand rounded-xl p-10 flex flex-col items-center text-center shadow-ambient border border-olive/10 group hover:-translate-y-2 transition-transform duration-500 md:translate-y-8">
                <div className="w-20 h-20 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-sage text-2xl">02</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{ts('reflexology')}</h3>
                <p className="opacity-80 leading-relaxed text-sm">
                  Restore balance and energy flow through precise foot and hand reflex points.
                </p>
              </div>

              <div className="gsap-scroll-item bg-sand rounded-xl p-10 flex flex-col items-center text-center shadow-ambient border border-olive/10 group hover:-translate-y-2 transition-transform duration-500">
                <div className="w-20 h-20 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-sage text-2xl">03</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{ts('cupping')}</h3>
                <p className="opacity-80 leading-relaxed text-sm">
                  Improve circulation and relieve pain with this ancient therapeutic technique.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
