import { getTranslations } from 'next-intl/server';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Services' });

  const services = [
    {
      num: '01',
      key: 'deepTissue' as const,
      descKey: 'deepTissueDesc' as const,
      tagKey: 'tagDeepTissue' as const,
      img: '/service-massage.png',
    },
    {
      num: '02',
      key: 'reflexology' as const,
      descKey: 'reflexologyDesc' as const,
      tagKey: 'tagReflexology' as const,
      img: '/botanical.png',
    },
    {
      num: '03',
      key: 'cupping' as const,
      descKey: 'cuppingDesc' as const,
      tagKey: 'tagCupping' as const,
      img: '/service-botanical.png',
    },
  ];

  return (
    <main className="flex-grow flex flex-col bg-[var(--color-sand-light)]">

      {/* ── Page Header ── */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden border-b border-soft">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[var(--color-terracotta)] opacity-60" />
            <span className="font-body text-xs tracking-widest uppercase text-[var(--color-earth-light)]">
              {t('overline')}
            </span>
          </div>

          <h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-[var(--color-earth-dark)] mb-0">
            {t('title')}
          </h1>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 font-display text-[clamp(8rem,18vw,22rem)] leading-none text-[var(--color-terracotta)] opacity-[0.03] pointer-events-none select-none italic">
          {t('bgText')}
        </div>
      </section>

      {/* ── Services List ── */}
      <section className="py-24 px-4 md:px-8 bg-[var(--color-sand-light)]">
        <div className="max-w-7xl mx-auto flex flex-col gap-20 md:gap-32">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.key}>
              <article className="gsap-scroll-item group grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
                
                {/* Image Panel */}
                <div className={`relative w-full h-[50vh] md:h-[70vh] img-rounded shadow-soft overflow-hidden ${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <Image
                    src={svc.img}
                    alt={t(svc.key)}
                    fill
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                  />
                  {/* Subtle edge overlay */}
                  <div className="absolute inset-0 bg-[var(--color-earth-dark)]/5 mix-blend-overlay" />
                  
                  {/* Floating Number */}
                  <div className={`absolute top-6 ${i % 2 === 0 ? 'left-6' : 'right-6'} font-display text-6xl lg:text-8xl text-white/90 drop-shadow-sm select-none mix-blend-overlay italic`}>
                    {svc.num}
                  </div>
                </div>

                {/* Text Panel */}
                <div className={`flex flex-col justify-center ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'} bg-[var(--color-sand-mid)] p-10 md:p-16 rounded-[2rem] shadow-sm`}>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-body text-xs tracking-widest uppercase text-[var(--color-terracotta)]">
                      {svc.num}
                    </span>
                    <div className="flex-1 h-[1px] bg-[var(--color-terracotta)] opacity-20" />
                  </div>

                  {/* Tag */}
                  <div className="inline-block px-4 py-2 border border-[var(--color-terracotta)]/20 rounded-full font-body text-[10px] tracking-widest uppercase text-[var(--color-earth-light)] mb-8 self-start">
                    {t(svc.tagKey as any)}
                  </div>

                  <h2 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl text-[var(--color-earth-dark)] mb-6 leading-tight">
                    {t(svc.key)}
                  </h2>

                  <p className="font-body text-base leading-relaxed text-[var(--color-earth-mid)] mb-10 max-w-lg">
                    {t(svc.descKey)}
                  </p>

                  <Link href="/contact" className="self-start">
                    <button className="btn-mediterranean">
                      <span>{t('bookSession')}</span>
                      <span>→</span>
                    </button>
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-24 md:py-32 px-6 bg-[var(--color-sand-mid)] text-center border-t border-soft">
        <ScrollReveal>
          <div className="gsap-scroll-item max-w-3xl mx-auto">
            <h2 className="font-display text-5xl md:text-7xl text-[var(--color-earth-dark)] mb-10 leading-tight">
              {t('readyTo')} <br />
              <span className="italic text-[var(--color-terracotta)]">{t('transform')}</span>
            </h2>
            <Link href="/contact">
              <button className="btn-mediterranean px-10 py-4 text-sm">
                <span>{t('schedule')}</span>
                <span className="text-lg">→</span>
              </button>
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}
