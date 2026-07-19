import React from 'react';

const Testimonials = () => {
  const items = [
    { text: 'Professional, on-time, and the monitoring system transformed our daily operations.', name: 'Project Lead', role: 'PT Aplikasi Dagang Teknologi' },
    { text: 'Clean architecture and well-structured code. Easy for our internal team to extend.', name: 'Tech Lead', role: 'Politeknik Negeri Indramayu' },
    { text: 'High dedication. Translates business needs into technical solutions effectively.', name: 'Mentor', role: 'Software Engineering Program' },
  ];

  return (
    <section id="testimonials" className="py-section-gap border-t border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <p className="label-sm text-brand-600 mb-12">Testimonials</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((t, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <blockquote className="text-base text-primary leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</blockquote>
              <div className="text-sm">
                <p className="font-medium text-primary">{t.name}</p>
                <p className="text-secondary">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
