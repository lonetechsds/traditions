import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import SectionHeader from '../ui/SectionHeader';
import { SERVICES } from '../../data/content';

const CATEGORIES = [
  { key: 'all', label: 'All Services' },
  { key: 'massage', label: 'Massage' },
  { key: 'therapeutic', label: 'Therapeutic' },
  { key: 'body', label: 'Body Care' },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 lg:py-32 px-6 bg-warm-gray/30">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeader
            subtitle="Our Offerings"
            title="Services Crafted for Your Wellness"
            description="From ancient Filipino healing traditions to internationally renowned techniques, every treatment is performed with intention, skill, and care."
          />
        </FadeIn>

        {/* Category filters */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 text-xs tracking-widest uppercase border transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-gold text-warm-black border-gold'
                    : 'border-gold/20 text-text-secondary hover:border-gold/50 hover:text-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative bg-warm-gray/50 border border-white/5 overflow-hidden hover:border-gold/20 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs tracking-widest uppercase text-gold">{service.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl mb-2">{service.name}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-text-muted">
                      <Clock size={14} className="text-gold" />
                      <span>{service.duration}</span>
                    </div>
                    <span className="font-serif text-gold text-lg">{service.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
