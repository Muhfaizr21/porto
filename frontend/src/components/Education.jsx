import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-section-gap border-t border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal">
        <div className="max-w-3xl">
          <p className="label-sm text-brand-600 mb-4">Education</p>
          <h2 className="heading-lg text-primary mb-12">Background & credentials</h2>

          <div className="space-y-10">
            <div>
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="heading-md text-primary">Politeknik Negeri Indramayu</h3>
                <span className="text-xs text-secondary/60 shrink-0 ml-4">2023 — 2027</span>
              </div>
              <p className="text-sm text-secondary mb-4">BASc — Software Engineering</p>
              <div className="text-sm text-secondary leading-relaxed space-y-2">
                <p>HIMA-RPL · Head of Public Relations (2024-2025)</p>
                <p>Permikomnas Jawa Barat · Strategic Studies & Advocacy (2025-2026)</p>
                <p>BEM · Communications Staff (2023-2024)</p>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="heading-md text-primary">SMKN 1 Kota Cirebon</h3>
                <span className="text-xs text-secondary/60 shrink-0 ml-4">2020 — 2023</span>
              </div>
              <p className="text-sm text-secondary">Vocational High School — Software Engineering (Grade: 83.00)</p>
            </div>
          </div>

          <div className="mt-16">
            <p className="label-sm text-brand-600 mb-6">Certifications</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 border border-outline-variant/60 rounded-xl">
                <p className="font-medium text-primary text-sm">Belajar Dasar AI</p>
                <p className="text-xs text-secondary mt-1">Dicoding · Sep 2025</p>
              </div>
              <div className="p-5 border border-outline-variant/60 rounded-xl">
                <p className="font-medium text-primary text-sm">Python Programming</p>
                <p className="text-xs text-secondary mt-1">Dicoding · Okt 2025</p>
              </div>
              <div className="p-5 border border-outline-variant/60 rounded-xl md:col-span-2">
                <p className="font-medium text-primary text-sm">KKNI Level II — Software Engineering</p>
                <p className="text-xs text-secondary mt-1">BNSP · Mar 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
