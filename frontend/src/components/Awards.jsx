import React from 'react';

const Awards = () => {
  const items = [
    { title: 'Fullstack Developer Award', org: 'PT Aplikasi Dagang Teknologi', date: 'Jul 2026' },
    { title: 'Speaker — TECHSOFT.V1 2026', org: 'HIMA-RPL', date: 'Mei 2026' },
    { title: 'TECHCOMFEST Web Competition 2026', org: 'Politeknik Negeri Semarang', date: 'Jan 2026' },
  ];

  return (
    <section id="awards" className="py-section-gap border-t border-outline-variant bg-surface-container-low">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1 reveal">
            <p className="label-sm text-brand-600 mb-4">Recognition</p>
            <p className="text-sm text-secondary leading-relaxed">Awards and speaking engagements that validate the work.</p>
          </div>
          <div className="md:col-span-3 space-y-6 reveal" style={{ transitionDelay: '0.1s' }}>
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-4 pb-6 border-b border-outline-variant/40 last:border-0">
                <span className="text-2xl font-bold text-brand-500/30 w-8">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="font-semibold text-primary">{item.title}</p>
                  <p className="text-sm text-secondary">{item.org} · {item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
