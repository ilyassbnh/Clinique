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
    <main className="flex-grow container mx-auto px-6 md:px-12 py-16">
      <ScrollReveal>
        <h1 className="gsap-scroll-item text-4xl md:text-6xl font-bold mb-16 text-center">{t('title')}</h1>
        
        {/* CSS Masonry */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <div key={idx} className="gsap-scroll-item break-inside-avoid relative rounded-xl overflow-hidden shadow-ambient border border-olive/10 group cursor-pointer">
              <Image 
                src={src} 
                alt="Spa Interior" 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
              />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </main>
  );
}
