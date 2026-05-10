import { getTranslations } from 'next-intl/server';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });

  return (
    <main className="flex-grow flex flex-col bg-[var(--color-sand-light)] min-h-screen">
      
      {/* ── Page Header ── */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden border-b border-soft">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[var(--color-terracotta)] opacity-60" />
            <span className="font-body text-xs tracking-widest uppercase text-[var(--color-earth-light)]">
              04 — Connect With Us
            </span>
          </div>

          <h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-[var(--color-earth-dark)] mb-0">
            {t('title')}
          </h1>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 font-display text-[clamp(8rem,18vw,22rem)] leading-none text-[var(--color-terracotta)] opacity-[0.03] pointer-events-none select-none italic">
          Connect
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Information */}
            <div className="gsap-scroll-item flex flex-col justify-center">
              <p className="font-body text-lg md:text-xl text-[var(--color-earth-mid)] mb-12 leading-relaxed max-w-lg">
                {t('subtitle')}
              </p>
              
              <div className="space-y-10">
                <div>
                  <h3 className="font-body text-xs tracking-widest uppercase text-[var(--color-terracotta)] mb-4">{t('hours')}</h3>
                  <p className="font-display text-2xl text-[var(--color-earth-dark)] whitespace-pre-line leading-snug">{t('hoursDetail')}</p>
                </div>
                <div>
                  <h3 className="font-body text-xs tracking-widest uppercase text-[var(--color-terracotta)] mb-4">{t('location')}</h3>
                  <p className="font-display text-2xl text-[var(--color-earth-dark)] whitespace-pre-line leading-snug">{t('locationDetail')}</p>
                  <a 
                    href="https://maps.app.goo.gl/mip14bXUxTnHrc6W7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 font-body text-sm tracking-wider uppercase text-[var(--color-earth-light)] border-b border-[var(--color-earth-light)] pb-1 transition-colors hover:text-[var(--color-terracotta)] hover:border-[var(--color-terracotta)]"
                  >
                    {t('openMap')}
                  </a>
                </div>
                
                {/* Interactive Google Map Embed */}
                <div className="w-full h-80 md:h-96 img-rounded overflow-hidden shadow-soft mt-8 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.892789182375!2d13.824982676822295!3d50.63851537162985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47098e8def009581%3A0xc0936d10dfab8258!2sL%C3%A1ze%C5%88sk%C3%BD%20d%C5%AFm%20Beethoven!5e0!3m2!1sen!2scz!4v1700000000000!5m2!1sen!2scz"
                    className="absolute inset-0 w-full h-full border-0 grayscale opacity-80"
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Beethoven Clinic Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="gsap-scroll-item">
              <form className="bg-[var(--color-sand-mid)] p-10 md:p-16 rounded-[2rem] shadow-sm flex flex-col gap-8 h-full">
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-body text-xs tracking-widest uppercase text-[var(--color-earth-mid)] mb-3">{t('formName')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="bg-transparent border-b border-[var(--color-earth-light)]/30 px-0 py-3 font-display text-xl text-[var(--color-earth-dark)] outline-none focus:border-[var(--color-terracotta)] transition-colors duration-300 appearance-none" 
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="font-body text-xs tracking-widest uppercase text-[var(--color-earth-mid)] mb-3">{t('formEmail')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-transparent border-b border-[var(--color-earth-light)]/30 px-0 py-3 font-display text-xl text-[var(--color-earth-dark)] outline-none focus:border-[var(--color-terracotta)] transition-colors duration-300 appearance-none" 
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="font-body text-xs tracking-widest uppercase text-[var(--color-earth-mid)] mb-3">{t('formPhone')}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="bg-transparent border-b border-[var(--color-earth-light)]/30 px-0 py-3 font-display text-xl text-[var(--color-earth-dark)] outline-none focus:border-[var(--color-terracotta)] transition-colors duration-300 appearance-none" 
                  />
                </div>

                <div className="flex flex-col flex-grow">
                  <label htmlFor="message" className="font-body text-xs tracking-widest uppercase text-[var(--color-earth-mid)] mb-3">{t('formMessage')}</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="bg-transparent border-b border-[var(--color-earth-light)]/30 px-0 py-3 font-display text-xl text-[var(--color-earth-dark)] outline-none focus:border-[var(--color-terracotta)] transition-colors duration-300 appearance-none resize-none flex-grow" 
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="btn-mediterranean self-start mt-6"
                >
                  <span>{t('formSubmit')}</span>
                  <span className="text-lg">→</span>
                </button>
              </form>
            </div>

          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
