import FadeIn from '../ui/FadeIn';
import SectionHeader from '../ui/SectionHeader';
import { Sparkles, Heart, Leaf } from 'lucide-react';

const VALUES = [
  { icon: Sparkles, title: 'Authentic Traditions', desc: 'We honor time-tested Filipino healing arts like Hilot, Dagdagay, and Ventosa alongside world-class spa techniques.' },
  { icon: Heart, title: 'Personalized Care', desc: 'Every session is tailored to your unique needs. Our therapists listen, adapt, and deliver care that truly resonates.' },
  { icon: Leaf, title: 'Natural Wellness', desc: 'We use premium, natural products to nourish your body while respecting the environment and your wellbeing.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeader
            subtitle="Our Story"
            title="Rooted in Tradition, Refined for You"
            description="Nestled on the second floor of Juanita Building along Mawaque Road in Mabalacat City, Traditions Wellness Spa is a sanctuary where ancient Filipino healing wisdom meets modern comfort. We believe true wellness begins when mind, body, and soul are in harmony."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-8">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3865792/pexels-photo-3865792.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Traditional spa treatment"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold/10 border border-gold/20 backdrop-blur-sm px-8 py-6 hidden lg:block">
                <span className="text-4xl font-serif text-gold">5+</span>
                <p className="text-xs tracking-widest uppercase text-text-muted mt-1">Years of Wellness</p>
              </div>
            </div>
          </FadeIn>

          {/* Values */}
          <div className="flex flex-col gap-8">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.15}>
                <div className="flex gap-5">
                  <div className="w-12 h-12 shrink-0 border border-gold/20 rounded-full flex items-center justify-center">
                    <v.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">{v.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
