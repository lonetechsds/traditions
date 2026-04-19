import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-warm-black/90 backdrop-blur-md border-b border-gold/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => handleClick('/#home')}>
          <img src="/favicon.svg" alt="Traditions" className="w-10 h-10" />
          <div className="hidden sm:block">
            <span className="font-serif text-lg text-gold tracking-wide">Traditions</span>
            <span className="block text-[0.6rem] tracking-[0.25em] uppercase text-text-muted">Wellness Spa</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { if (link.href.startsWith('/#')) { e.preventDefault(); handleClick(link.href); } }}
              className="text-[0.78rem] tracking-wide uppercase text-text-secondary hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="/#booking"
            onClick={(e) => { e.preventDefault(); handleClick('/#booking'); }}
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-gold/10 border border-gold/30 text-gold text-xs tracking-widest uppercase rounded-sm hover:bg-gold/20 transition-all duration-300"
          >
            Book Now
          </a>
          <button className="lg:hidden text-text-secondary hover:text-gold transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-warm-black/95 backdrop-blur-lg border-t border-gold/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { if (link.href.startsWith('/#')) { e.preventDefault(); handleClick(link.href); } }}
                  className="text-sm tracking-wide uppercase text-text-secondary hover:text-gold transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#booking"
                onClick={(e) => { e.preventDefault(); handleClick('/#booking'); }}
                className="mt-2 text-center px-6 py-3 bg-gold text-warm-black text-xs tracking-widest uppercase font-bold rounded-sm"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
