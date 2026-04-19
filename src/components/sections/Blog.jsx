import { ArrowRight } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import SectionHeader from '../ui/SectionHeader';
import { BLOG_POSTS } from '../../data/content';

export default function Blog() {
  return (
    <section id="blog" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeader
            subtitle="From Our Blog"
            title="Insights & Inspiration"
            description="Wellness tips, healing traditions, and guides to help you make the most of your spa experience."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.1}>
              <article className="group border border-white/5 bg-warm-gray/30 overflow-hidden hover:border-gold/20 transition-all duration-500">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold/90 text-warm-black text-[0.6rem] tracking-widest uppercase font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-text-muted mb-2">{post.date}</p>
                  <h3 className="font-serif text-lg mb-3 leading-snug group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
