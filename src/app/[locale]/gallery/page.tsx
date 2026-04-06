import { getTranslations } from 'next-intl/server';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Image from 'next/image';

const images = [
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=1000&auto=format&fit=crop"
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
