import { getTranslations } from 'next-intl/server';
import HeroAnimation from '@/components/animations/HeroAnimation';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Index' });
  const ts = await getTranslations({ locale, namespace: 'Services' });

  const services = [
    {
      num: '01',
      key: 'deepTissue',
      descKey: 'deepTissueDesc',
      img: '/service-massage.png',
    },
    {
      num: '02',
      key: 'reflexology',
      descKey: 'reflexologyDesc',
      img: '/botanical.png',
    },
    {
      num: '03',
      key: 'cupping',
      descKey: 'cuppingDesc',
      img: '/service-botanical.png',
    },
  ];

  return (
    <main className="flex-grow flex flex-col bg-[var(--color-sand-light)]">

      {/* ══════════════════════════════════════════════
          HERO — Airy, Split Layout with Soft Corners
      ══════════════════════════════════════════════ */}
      <HeroAnimation>
        <section className="relative min-h-[90vh] flex flex-col md:grid md:grid-cols-2 overflow-hidden px-4 md:px-8 pt-24 pb-8 gap-8">
          
          {/* Left — Text Panel */}
          <div className="flex flex-col justify-center px-4 md:px-12 z-10">
            {/* Overline */}
            <div className="gsap-reveal flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[var(--color-terracotta)] opacity-60" />
              <span className="font-body text-xs tracking-widest uppercase text-[var(--color-earth-light)]">
                {t('overline')}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="gsap-reveal font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-[var(--color-earth-dark)] mb-6">
              {t('titleLine1')} <br/>
              <span className="italic text-[var(--color-terracotta)]">{t('titleLine2')}</span>
            </h1>

            {/* Sub text */}
            <p className="gsap-reveal font-body text-sm md:text-base leading-relaxed text-[var(--color-earth-mid)] max-w-md mb-10">
              {t('subtitle')}
            </p>

            {/* CTA Group */}
            <div className="gsap-reveal flex items-center gap-8">
              <Link href="/contact">
                <button className="btn-mediterranean">
                  <span>{t('cta')}</span>
                  <span className="text-lg">→</span>
                </button>
              </Link>
              <Link
                href="/services"
                className="font-body text-xs tracking-widest uppercase text-[var(--color-earth-light)] no-underline border-b border-[var(--color-earth-light)] pb-1 transition-colors hover:text-[var(--color-terracotta)] hover:border-[var(--color-terracotta)]"
              >
                {t('explore')}
              </Link>
            </div>
          </div>

          {/* Right — Image Panel */}
          <div className="relative w-full h-[60vh] md:h-full img-rounded shadow-soft overflow-hidden">
            <Image
              src="/hero_mediterranean.png"
              alt="Mediterranean Wellness Spa"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

        </section>
      </HeroAnimation>

      {/* ══════════════════════════════════════════════
          ABOUT — Manifesto Section
      ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-[var(--color-sand-mid)]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="gsap-scroll-item grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
              
              {/* Left label column */}
              <div>
                <div className="font-body text-xs tracking-widest uppercase text-[var(--color-earth-light)] mb-4">
                  — {t('aboutLabel')}
                </div>
                <div className="w-[1px] h-20 bg-gradient-to-b from-[var(--color-terracotta)] to-transparent opacity-40" />
              </div>

              {/* Right content column */}
              <div>
                <h2 className="font-display font-medium text-4xl md:text-5xl text-[var(--color-earth-dark)] mb-8 leading-tight">
                  {t('aboutTitle')}
                </h2>
                <p className="font-body text-base md:text-lg leading-relaxed text-[var(--color-earth-mid)] max-w-2xl">
                  {t('aboutTeaser')}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SERVICES — Soft Split-Screen Cards
      ══════════════════════════════════════════════ */}
      <section className="py-24 px-4 md:px-8 bg-[var(--color-sand-light)]">
        {/* Section header */}
        <div className="flex items-center justify-between border-y border-soft py-6 mb-16 max-w-7xl mx-auto px-4">
          <span className="font-body text-xs tracking-widest uppercase text-[var(--color-earth-light)]">
            {t('servicesLabel')}
          </span>
          <span className="font-display text-lg tracking-wider text-[var(--color-earth-mid)] italic">
            {ts('title')}
          </span>
        </div>

        {/* Service Items */}
        <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.key}>
              <div className="gsap-scroll-item group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                
                {/* Image */}
                <div className={`relative w-full h-[50vh] md:h-[60vh] img-rounded shadow-soft overflow-hidden ${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <Image
                    src={svc.img}
                    alt={ts(svc.key as any)}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Text Panel */}
                <div className={`flex flex-col justify-center ${i % 2 === 0 ? 'md:order-1 md:pr-12' : 'md:order-2 md:pl-12'}`}>
                  <div className="font-body text-xs tracking-widest uppercase text-[var(--color-terracotta)] mb-6 flex items-center gap-4">
                    <span>{svc.num}</span>
                    <div className="flex-1 h-[1px] bg-[var(--color-terracotta)] opacity-20" />
                  </div>

                  <h3 className="font-display text-4xl md:text-5xl text-[var(--color-earth-dark)] mb-6">
                    {ts(svc.key as any)}
                  </h3>

                  <p className="font-body text-base leading-relaxed text-[var(--color-earth-mid)] max-w-md mb-10">
                    {ts(svc.descKey as any)}
                  </p>

                  <Link href="/services">
                    <button className="btn-mediterranean text-xs py-3 px-8 self-start">
                      <span>{t('discover')}</span>
                      <span>→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STONES — Soft Rounded Visual Break
      ══════════════════════════════════════════════ */}
      <section className="px-4 md:px-8 py-16 bg-[var(--color-sand-light)]">
        <div className="relative w-full h-[50vh] md:h-[70vh] img-rounded overflow-hidden shadow-soft max-w-7xl mx-auto">
          <Image
            src="/stones_sand.png"
            alt="Smooth therapeutic stones on sand"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[var(--color-earth-dark)]/20 mix-blend-overlay" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <div className="font-body text-xs tracking-widest uppercase text-white mb-6 drop-shadow-md">
              — {t('ritualOverline')}
            </div>
            <div className="font-display font-medium text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-lg leading-tight">
              {t('ritualLine1')} <br/>
              <span className="italic font-light">{t('ritualLine2')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA — Final Booking Section
      ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 px-6 bg-[var(--color-sand-mid)] text-center">
        <ScrollReveal>
          <div className="gsap-scroll-item max-w-3xl mx-auto">
            <div className="font-body text-xs tracking-widest uppercase text-[var(--color-terracotta)] mb-8 flex items-center justify-center gap-4">
              <div className="w-8 h-[1px] bg-[var(--color-terracotta)] opacity-40" />
              <span>{t('ctaOverline')}</span>
              <div className="w-8 h-[1px] bg-[var(--color-terracotta)] opacity-40" />
            </div>

            <h2 className="font-display text-5xl md:text-7xl text-[var(--color-earth-dark)] mb-8 leading-tight">
              {t('ctaTitleLine1')} <br />
              <span className="italic text-[var(--color-terracotta)]">{t('ctaTitleLine2')}</span>
            </h2>

            <p className="font-body text-base leading-relaxed text-[var(--color-earth-mid)] mb-12 max-w-lg mx-auto whitespace-pre-line">
              {t('ctaText')}
            </p>

            <Link href="/contact">
              <button className="btn-mediterranean">
                <span>{t('cta')}</span>
                <span className="text-lg">→</span>
              </button>
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}
