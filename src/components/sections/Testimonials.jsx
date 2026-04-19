import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import SectionHeader from '../ui/SectionHeader';
import { TESTIMONIALS } from '../../data/content';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const t = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeader
            subtitle="Client Experiences"
            title="Words of Praise"
            description="Hear from those who have experienced the Traditions difference."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto text-center relative">
            <Quote size={40} className="text-gold/20 mx-auto mb-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>

                <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-text-primary mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-gold/30" />
                  <div className="text-left">
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-gold tracking-wide uppercase">{t.service}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-10">
              <button onClick={prev} className="w-10 h-10 border border-gold/20 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/50 transition-all rounded-full">
                <ChevronLeft size={18} />
              </button>
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-gold w-6' : 'bg-gold/20'}`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 border border-gold/20 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/50 transition-all rounded-full">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
