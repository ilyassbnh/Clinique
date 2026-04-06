import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });

  return (
    <main className="flex-grow container mx-auto px-6 md:px-12 py-16 lg:py-24">
      <ScrollReveal>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Information */}
          <div className="gsap-scroll-item w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('title')}</h1>
            <p className="text-xl opacity-80 mb-12">{t('subtitle')}</p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-sage font-bold mb-2">{t('hours')}</h3>
                <p className="whitespace-pre-line text-lg opacity-90">{t('hoursDetail')}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-sage font-bold mb-2">{t('location')}</h3>
                <p className="whitespace-pre-line text-lg opacity-90">{t('locationDetail')}</p>
                <a 
                  href="https://maps.app.goo.gl/mip14bXUxTnHrc6W7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sage font-semibold hover:text-sage/80 underline decoration-sage/30 hover:decoration-sage transition-all duration-300"
                >
                  {t('openMap')}
                </a>
              </div>
              
              {/* Interactive Google Map Embed */}
              <div className="w-full h-80 md:h-96 rounded-[2rem] overflow-hidden shadow-sm border border-olive/10 mt-8 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.892789182375!2d13.824982676822295!3d50.63851537162985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47098e8def009581%3A0xc0936d10dfab8258!2sL%C3%A1ze%C5%88sk%C3%BD%20d%C5%AFm%20Beethoven!5e0!3m2!1sen!2scz!4v1700000000000!5m2!1sen!2scz"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Beethoven Clinic Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="gsap-scroll-item w-full lg:w-1/2">
            <form className="bg-sand-alt p-8 md:p-12 rounded-3xl shadow-ambient border border-olive/10 flex flex-col gap-8">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold opacity-80 mb-2">{t('formName')}</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-transparent border-b-2 border-olive/20 px-0 py-2 outline-none focus:border-sage transition-colors duration-300 shadow-none focus:ring-0 appearance-none" 
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold opacity-80 mb-2">{t('formEmail')}</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-transparent border-b-2 border-olive/20 px-0 py-2 outline-none focus:border-sage transition-colors duration-300 shadow-none focus:ring-0 appearance-none" 
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-semibold opacity-80 mb-2">{t('formPhone')}</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="bg-transparent border-b-2 border-olive/20 px-0 py-2 outline-none focus:border-sage transition-colors duration-300 shadow-none focus:ring-0 appearance-none" 
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-semibold opacity-80 mb-2">{t('formMessage')}</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="bg-transparent border-b-2 border-olive/20 px-0 py-2 outline-none focus:border-sage transition-colors duration-300 shadow-none focus:ring-0 appearance-none resize-none" 
                ></textarea>
              </div>

              <button 
                type="button" 
                className="self-start mt-4 bg-sage text-sand font-semibold text-lg py-4 px-10 rounded-md hover:bg-sage/90 hover:shadow-ambient transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
              >
                {t('formSubmit')}
              </button>
            </form>
          </div>

        </div>
      </ScrollReveal>
    </main>
  );
}
