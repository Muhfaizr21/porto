import React, { useState, useEffect } from 'react';

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/about')
      .then(r => r.json())
      .then(d => {
        if (d.data) {
          setAboutData(d.data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const stats = aboutData ? [
    { value: aboutData.stat_1_value, label: aboutData.stat_1_label },
    { value: aboutData.stat_2_value, label: aboutData.stat_2_label },
    { value: aboutData.stat_3_value, label: aboutData.stat_3_label },
  ].filter(s => s.value || s.label) : [];

  return (
    <section id="about" className="py-section-gap border-t border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          <div className="md:col-span-2 reveal">
            <p className="label-sm text-brand-600 mb-4">About</p>
            {loading ? (
              <p className="text-secondary">Loading...</p>
            ) : aboutData ? (
              <>
                <p className="body-lg text-secondary leading-relaxed">
                  {aboutData.description_1}
                </p>
                {aboutData.description_2 && (
                  <p className="body-lg text-secondary leading-relaxed mt-6">
                    {aboutData.description_2}
                  </p>
                )}
              </>
            ) : (
              <>
                <p className="body-lg text-secondary leading-relaxed">
                  Based in Cirebon, Indonesia. Currently pursuing a BASc in Software Engineering 
                  at Politeknik Negeri Indramayu while working on real-world projects.
                </p>
                <p className="body-lg text-secondary leading-relaxed mt-6">
                  My focus is building reliable, scalable web systems — from monitoring platforms 
                  to full-stack applications. I believe in clean architecture, pragmatic tooling, 
                  and software that actually helps people.
                </p>
              </>
            )}
          </div>

          <div className="md:col-span-3 md:col-start-4 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="flex flex-col gap-4">
              {stats.length > 0 ? stats.map((s, i) => (
                <div key={i} className="group p-5 sm:p-6 bg-surface-container-lowest border border-outline-variant/60 rounded-2xl hover:border-brand-500/30 hover:shadow-sm transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-500/20 group-hover:bg-brand-500 transition-colors"></div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary leading-tight mb-2 group-hover:text-brand-600 transition-colors">
                    {s.value}
                  </h3>
                  <p className="text-sm text-secondary flex items-center gap-2">
                    {s.label}
                  </p>
                </div>
              )) : (
                <>
                  <div className="group p-5 sm:p-6 bg-surface-container-lowest border border-outline-variant/60 rounded-2xl hover:border-brand-500/30 hover:shadow-sm transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-500/20 group-hover:bg-brand-500 transition-colors"></div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary leading-tight mb-2 group-hover:text-brand-600 transition-colors">
                      42+
                    </h3>
                    <p className="text-sm text-secondary flex items-center gap-2">
                      Projects completed
                    </p>
                  </div>
                  <div className="group p-5 sm:p-6 bg-surface-container-lowest border border-outline-variant/60 rounded-2xl hover:border-brand-500/30 hover:shadow-sm transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-500/20 group-hover:bg-brand-500 transition-colors"></div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary leading-tight mb-2 group-hover:text-brand-600 transition-colors">
                      3+
                    </h3>
                    <p className="text-sm text-secondary flex items-center gap-2">
                      Years experience
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
