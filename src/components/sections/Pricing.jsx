import FadeIn from '../ui/FadeIn';
import SectionHeader from '../ui/SectionHeader';
import { SERVICES } from '../../data/content';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeader
            subtitle="Pricing"
            title="Transparent & Fair Pricing"
            description="Quality wellness should be accessible. No hidden fees — just honest pricing for exceptional care."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <div className="border border-gold/15 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-gold/5 px-6 py-4 border-b border-gold/10">
                <span className="text-xs tracking-widest uppercase text-gold font-semibold">Service</span>
                <span className="text-xs tracking-widest uppercase text-gold font-semibold text-center">Duration</span>
                <span className="text-xs tracking-widest uppercase text-gold font-semibold text-right">Price</span>
              </div>

              {/* Rows */}
              {SERVICES.map((service, i) => (
                <div
                  key={service.id}
                  className={`grid grid-cols-3 px-6 py-4 items-center hover:bg-gold/5 transition-colors ${
                    i < SERVICES.length - 1 ? 'border-b border-white/5' : ''
                  }`}
                >
                  <div>
                    <span className="text-sm font-medium">{service.name}</span>
                  </div>
                  <span className="text-sm text-text-secondary text-center">{service.duration}</span>
                  <span className="text-sm font-serif text-gold text-right">{service.price}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-text-muted mt-6">
              All prices are in Philippine Peso (PHP). Add-on services available upon request.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
