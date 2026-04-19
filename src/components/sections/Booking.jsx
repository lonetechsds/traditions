import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import SectionHeader from '../ui/SectionHeader';
import { SERVICES } from '../../data/content';

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '', time: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend/Supabase
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '', service: '', date: '', time: '', notes: '' });
  };

  return (
    <section id="booking" className="py-24 lg:py-32 px-6 bg-warm-gray/30">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeader
            subtitle="Reservations"
            title="Book Your Wellness Experience"
            description="Reserve your session and let us prepare a personalized experience for you. Walk-ins are welcome, but appointments are recommended."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="border border-gold/15 bg-warm-gray/20 p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" />
                  <input
                    type="text" name="name" placeholder="Full Name" required value={form.name} onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 bg-warm-black/50 border border-white/10 text-sm text-text-primary placeholder:text-text-muted focus:border-gold/50 focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" />
                  <input
                    type="tel" name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 bg-warm-black/50 border border-white/10 text-sm text-text-primary placeholder:text-text-muted focus:border-gold/50 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="relative md:col-span-2">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" />
                  <input
                    type="email" name="email" placeholder="Email (optional)" value={form.email} onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 bg-warm-black/50 border border-white/10 text-sm text-text-primary placeholder:text-text-muted focus:border-gold/50 focus:outline-none transition-colors"
                  />
                </div>

                {/* Service */}
                <div className="md:col-span-2">
                  <select
                    name="service" required value={form.service} onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-warm-black/50 border border-white/10 text-sm text-text-primary focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a Service</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>{s.name} — {s.price}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="relative">
                  <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" />
                  <input
                    type="date" name="date" required value={form.date} onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 bg-warm-black/50 border border-white/10 text-sm text-text-primary focus:border-gold/50 focus:outline-none transition-colors"
                  />
                </div>

                {/* Time */}
                <div className="relative">
                  <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" />
                  <input
                    type="time" name="time" required value={form.time} onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 bg-warm-black/50 border border-white/10 text-sm text-text-primary focus:border-gold/50 focus:outline-none transition-colors"
                  />
                </div>

                {/* Notes */}
                <div className="relative md:col-span-2">
                  <MessageSquare size={16} className="absolute left-4 top-4 text-gold/50" />
                  <textarea
                    name="notes" placeholder="Special requests or notes (optional)" rows={3} value={form.notes} onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 bg-warm-black/50 border border-white/10 text-sm text-text-primary placeholder:text-text-muted focus:border-gold/50 focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-4 bg-gold text-warm-black text-xs tracking-[0.2em] uppercase font-bold hover:bg-gold-light transition-colors duration-300"
              >
                {submitted ? '✓ Booking Received!' : 'Reserve My Session'}
              </button>

              {submitted && (
                <p className="text-center text-sm text-gold mt-4">Thank you! We&apos;ll confirm your appointment shortly.</p>
              )}
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
