import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap relative">
      <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-900/[0.04] dark:bg-bottom dark:border-b dark:border-slate-100/5" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>
      <div className="max-w-4xl z-10 reveal-on-scroll">
        <span className="font-label-sm text-secondary uppercase tracking-widest mb-6 block border border-outline-variant rounded-full px-4 py-2 w-fit bg-surface-container-lowest shadow-sm">
          Muhammad Faiz Ramadhan
        </span>
        <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl leading-tight mb-8 text-primary">
          Full-Stack Software Engineer<br />
          <span className="text-secondary">&amp; Web Systems Architect.</span>
        </h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl mb-12 leading-relaxed">
          Spesialis dalam <strong>Sistem Pemantauan Otomatis (Automated Monitoring Systems)</strong> dan <strong>Optimasi Web</strong>. Saya merancang dan membangun arsitektur sistem web yang skalabel, efisien, dan andal untuk kebutuhan bisnis modern.
        </p>
        <div className="flex gap-6">
          <a href="#work" className="border-b-2 border-primary text-primary font-label-sm uppercase tracking-widest pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors duration-300">
            Lihat Proyek
          </a>
          <a href="#about" className="border-b-2 border-transparent text-secondary font-label-sm uppercase tracking-widest pb-1 hover:text-primary hover:border-primary transition-colors duration-300">
            Baca Selengkapnya
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
