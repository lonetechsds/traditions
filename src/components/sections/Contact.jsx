import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import SectionHeader from '../ui/SectionHeader';
import { BUSINESS } from '../../data/content';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6 bg-warm-gray/30">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeader
            subtitle="Find Us"
            title="Visit Traditions Wellness Spa"
            description="We're conveniently located on the second floor of Juanita Building along Mawaque Road, Mabalacat City."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Map */}
          <FadeIn direction="left">
            <div className="h-[400px] border border-gold/15 overflow-hidden">
              <iframe
                title="Traditions Wellness Spa Location"
                src={`https://maps.google.com/maps?q=${BUSINESS.mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </FadeIn>

          {/* Info cards */}
          <FadeIn direction="right">
            <div className="flex flex-col gap-4 h-full justify-center">
              {[
                { icon: MapPin, label: 'Address', value: BUSINESS.address },
                { icon: Phone, label: 'Phone', value: BUSINESS.phone },
                { icon: Mail, label: 'Email', value: BUSINESS.email },
                { icon: Clock, label: 'Hours', value: BUSINESS.hours },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-5 border border-white/5 bg-warm-gray/20 hover:border-gold/15 transition-all">
                  <div className="w-10 h-10 shrink-0 border border-gold/20 rounded-full flex items-center justify-center">
                    <item.icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-gold mb-1">{item.label}</p>
                    <p className="text-sm text-text-secondary">{item.value}</p>
                  </div>
                </div>
              ))}

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${BUSINESS.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center py-3 border border-gold/30 text-gold text-xs tracking-widest uppercase hover:bg-gold/10 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
