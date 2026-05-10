import { getTranslations } from 'next-intl/server';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Image from 'next/image';

const images = [
  "https://res.cloudinary.com/dtpjdj7m4/image/upload/v1776107899/WhatsApp_Image_2026-04-13_at_12.06.02_PM_1_gajuap.jpg",
  "https://res.cloudinary.com/dtpjdj7m4/image/upload/v1776107899/WhatsApp_Image_2026-04-13_at_12.06.02_PM_2_uutyzz.jpg",
  "https://res.cloudinary.com/dtpjdj7m4/image/upload/v1776107899/WhatsApp_Image_2026-04-13_at_12.06.02_PM_3_yfzjr3.jpg",
  "https://res.cloudinary.com/dtpjdj7m4/image/upload/v1776107899/WhatsApp_Image_2026-04-13_at_12.06.02_PM_4_oj34qo.jpg",
  "https://res.cloudinary.com/dtpjdj7m4/image/upload/v1776107899/WhatsApp_Image_2026-04-13_at_12.06.02_PM_5_h3batb.jpg",
  "https://res.cloudinary.com/dtpjdj7m4/image/upload/v1776107899/WhatsApp_Image_2026-04-13_at_12.06.02_PM_6_pjkvwf.jpg",
  "https://res.cloudinary.com/dtpjdj7m4/image/upload/v1776107899/WhatsApp_Image_2026-04-13_at_12.06.02_PM_7_p2fbki.jpg",
  "https://res.cloudinary.com/dtpjdj7m4/image/upload/v1776107899/WhatsApp_Image_2026-04-13_at_12.06.02_PM_fbr4et.jpg",
  "https://res.cloudinary.com/dtpjdj7m4/image/upload/v1776107899/WhatsApp_Image_2026-04-13_at_12.06.03_PM_1_t52djf.jpg",
  "https://res.cloudinary.com/dtpjdj7m4/image/upload/v1776107899/WhatsApp_Image_2026-04-13_at_12.06.03_PM_gqs9h5.jpg",
  "https://res.cloudinary.com/dtpjdj7m4/image/upload/v1776108372/WhatsApp_Image_2026-04-07_at_10.53.34_AM_h9wa0d.jpg",
  "https://res.cloudinary.com/dtpjdj7m4/image/upload/v1776108372/WhatsApp_Image_2026-04-07_at_10.54.19_AM_ubobt7.jpg",
  "https://res.cloudinary.com/dtpjdj7m4/image/upload/v1776108372/WhatsApp_Image_2026-04-07_at_10.54.35_AM_pry9mq.jpg",
  "https://res.cloudinary.com/dtpjdj7m4/image/upload/v1776108372/WhatsApp_Image_2026-04-07_at_10.54.50_AM_myrnmt.jpg",
  "https://res.cloudinary.com/dtpjdj7m4/image/upload/v1776108371/WhatsApp_Image_2026-04-07_at_10.57.48_AM_lrdro1.jpg"
];

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Gallery' });

  return (
    <main className="flex-grow flex flex-col bg-[var(--color-sand-light)] min-h-screen">
      
      {/* ── Page Header ── */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden border-b border-soft">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[var(--color-terracotta)] opacity-60" />
            <span className="font-body text-xs tracking-widest uppercase text-[var(--color-earth-light)]">
              03 — Visual Journey
            </span>
          </div>

          <h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-[var(--color-earth-dark)] mb-0">
            {t('title')}
          </h1>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 font-display text-[clamp(8rem,18vw,22rem)] leading-none text-[var(--color-terracotta)] opacity-[0.03] pointer-events-none select-none italic">
          Gallery
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="py-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <ScrollReveal>
          {/* CSS Masonry */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {images.map((src, idx) => (
              <div key={idx} className="gsap-scroll-item break-inside-avoid relative img-rounded overflow-hidden shadow-soft border border-[var(--color-earth-dark)]/5 group cursor-pointer">
                <Image 
                  src={src} 
                  alt={`Clinic Interior ${idx + 1}`} 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-[1400ms] ease-out" 
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
      
    </main>
  );
}
