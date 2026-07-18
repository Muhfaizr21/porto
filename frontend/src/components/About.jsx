import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-surface py-section-gap border-t border-outline-variant relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10"></div>
      
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        
        <div className="md:col-span-5 reveal-on-scroll">
          <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-2xl shadow-lg relative group">
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            {/* Visual representation placeholder based on user's site */}
            <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center p-8 text-center group-hover:scale-105 transition-transform duration-700">
              <span className="font-headline-md text-secondary">Foto Profil LinkedIn</span>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-6 md:col-start-7 reveal-on-scroll" style={{ animationDelay: '0.1s' }}>
          <span className="font-label-sm text-secondary uppercase tracking-widest mb-6 block">Tentang Saya</span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8 leading-tight">
            Arsitek Sistem yang Berorientasi pada Efisiensi.
          </h2>
          <div className="space-y-6 font-body-lg text-body-lg text-secondary">
            <p>
              Saya adalah seorang <strong>Full-Stack Software Engineer</strong> yang berbasis di Kota Cirebon, Jawa Barat. Latar belakang saya berasal dari <strong>Politeknik Negeri Indramayu</strong>, di mana saya mengasah kemampuan analitis dan pemecahan masalah teknis.
            </p>
            <p>
              Keahlian utama saya terletak pada perancangan <strong>Sistem Pemantauan Otomatis</strong> dan <strong>Optimasi Web</strong>. Saya membangun arsitektur perangkat lunak end-to-end yang tangguh, memastikan keandalan, dan memaksimalkan kinerja untuk memberikan dampak nyata pada proses bisnis.
            </p>
          </div>
          
          <div className="mt-12 flex gap-12 border-t border-outline-variant pt-8">
            <div>
              <div className="font-headline-lg text-primary">Teknik</div>
              <div className="font-label-sm text-secondary uppercase tracking-widest mt-2">Informatika</div>
            </div>
            <div>
              <div className="font-headline-lg text-primary">Full-Stack</div>
              <div className="font-label-sm text-secondary uppercase tracking-widest mt-2">Software Engineering</div>
            </div>
            <div>
              <div className="font-headline-lg text-primary">Automated</div>
              <div className="font-label-sm text-secondary uppercase tracking-widest mt-2">Monitoring Systems</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
