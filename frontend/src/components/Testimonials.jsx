import React, { useState, useEffect } from 'react';

const fallback = [
  { quote: 'Professional, on-time, and the monitoring system transformed our daily operations.', name: 'Project Lead', role: 'PT Aplikasi Dagang Teknologi', company: 'PT Aplikasi Dagang Teknologi' },
  { quote: 'Clean architecture and well-structured code. Easy for our internal team to extend.', name: 'Tech Lead', role: 'Politeknik Negeri Indramayu', company: 'Politeknik Negeri Indramayu' },
  { quote: 'High dedication. Translates business needs into technical solutions effectively.', name: 'Mentor', role: 'Software Engineering Program', company: 'Politeknik Negeri Indramayu' },
];

const Testimonials = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/testimonials')
      .then(r => r.json())
      .then(d => { 
        if (d && d.data && Array.isArray(d.data)) setItems(d.data);
        else if (Array.isArray(d)) setItems(d);
        else setItems([]);
      })
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading || items.length === 0) return null;

  return (
    <section id="testimonials" className="py-section-gap border-t border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <p className="label-sm text-brand-600 mb-12">Testimonials</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((t, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <blockquote className="text-base text-primary leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="text-sm">
                <p className="font-medium text-primary">{t.name}</p>
                <p className="text-secondary">{t.role} {t.company && `at ${t.company}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
