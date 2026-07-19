import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="max-w-3xl">
        <p className="label-sm text-brand-600 mb-6 tracking-[0.15em]">Muhammad Faiz Ramadhan</p>

        <h1 className="heading-xl text-primary leading-[1.05] mb-6">
          Full-Stack<br />
          <span className="text-secondary font-medium">Software&nbsp;Engineer</span>
          <span className="text-brand-500 font-medium">.</span>
        </h1>

        <p className="body-lg text-secondary max-w-2xl mb-10 leading-relaxed">
          I design and build scalable web systems — from automated monitoring platforms 
          to high-performance web applications. Currently based in Indonesia, working with 
          startups and agencies to ship reliable software.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#work" className="inline-flex items-center gap-2 bg-primary text-on-primary px-7 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-all">
            See my work
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
          <a href="#about" className="inline-flex items-center gap-2 text-secondary hover:text-primary px-7 py-3.5 rounded-full border border-outline-variant hover:border-primary text-sm font-medium transition-all">
            More about me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
