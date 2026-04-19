import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import SectionHeader from '../ui/SectionHeader';
import { GALLERY_IMAGES } from '../../data/content';

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-24 lg:py-32 px-6 bg-warm-gray/30">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeader
            subtitle="Our Space"
            title="A Glimpse Inside"
            description="Every corner of Traditions has been thoughtfully designed to create an atmosphere of calm, warmth, and healing energy."
          />
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {GALLERY_IMAGES.map((img, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <motion.div
                className="relative overflow-hidden cursor-pointer group aspect-square"
                whileHover={{ scale: 0.98 }}
                onClick={() => setSelected(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-warm-black/0 group-hover:bg-warm-black/40 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-xs tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-warm-black/95 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-text-secondary hover:text-gold transition-colors" onClick={() => setSelected(null)}>
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selected.src.replace('w=600', 'w=1200')}
              alt={selected.alt}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
