import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Spa ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-black/70 via-warm-black/50 to-warm-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-subtitle mb-4"
        >
          Mabalacat City, Pampanga
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-6 leading-[1.1]"
        >
          where tradition
          <br />
          <span className="italic text-gold">meets wellness</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="gold-line mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto mb-10 font-light"
        >
          An authentic wellness sanctuary blending Filipino healing arts with international spa techniques for your mind, body & soul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#booking"
            className="px-10 py-4 bg-gold text-warm-black text-xs tracking-[0.2em] uppercase font-bold hover:bg-gold-light transition-colors duration-300"
          >
            Book Your Visit
          </a>
          <a
            href="#services"
            className="px-10 py-4 border border-gold/30 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold/10 transition-colors duration-300"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={24} className="text-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
