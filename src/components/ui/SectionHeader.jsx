export default function SectionHeader({ subtitle, title, description, align = 'center', light = false }) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <p className="section-subtitle mb-3">{subtitle}</p>
      )}
      <h2 className={`section-title text-3xl md:text-4xl lg:text-5xl mb-4 ${light ? 'text-warm-black' : ''}`}>
        {title}
      </h2>
      <div className={`gold-line ${align === 'center' ? 'mx-auto' : ''} mb-6`} />
      {description && (
        <p className={`max-w-2xl text-base leading-relaxed ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-warm-gray' : 'text-text-secondary'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
