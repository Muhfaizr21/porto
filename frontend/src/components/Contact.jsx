import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center relative border-t border-outline-variant">
      <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-900/[0.04] dark:bg-bottom dark:border-b dark:border-slate-100/5 -z-10" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>
      <div className="max-w-3xl mx-auto reveal-on-scroll bg-surface-container-lowest p-12 rounded-3xl border border-outline-variant/30 shadow-sm">
        <span className="font-label-sm text-secondary uppercase tracking-widest mb-8 block">Kontak</span>
        <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-12">
          Mari membangun<br />sesuatu yang <em>hebat</em>.
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a 
            className="bg-primary text-on-primary px-12 py-5 font-label-sm uppercase tracking-widest hover:bg-neutral-800 transition-all rounded-full hover:shadow-xl hover:-translate-y-1" 
            href="mailto:mfaizschl@gmail.com"
          >
            Kirim Email
          </a>
          <a 
            className="border border-primary text-primary px-12 py-5 font-label-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all rounded-full" 
            href="https://www.linkedin.com/in/muhammad-faiz-ramadhan-215a3625b/?skipRedirect=true"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profil
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
