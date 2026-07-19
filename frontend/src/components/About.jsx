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
            <div className="grid grid-cols-2 gap-6">
              {stats.length > 0 ? stats.map((s, i) => (
                <div key={i} className="p-6 bg-surface-container-low rounded-2xl">
                  <p className="text-2xl font-bold text-primary">{s.value}</p>
                  <p className="text-sm text-secondary mt-1">{s.label}</p>
                </div>
              )) : (
                <>
                  <div className="p-6 bg-surface-container-low rounded-2xl">
                    <p className="text-2xl font-bold text-primary">42+</p>
                    <p className="text-sm text-secondary mt-1">Projects completed</p>
                  </div>
                  <div className="p-6 bg-surface-container-low rounded-2xl">
                    <p className="text-2xl font-bold text-primary">3+</p>
                    <p className="text-sm text-secondary mt-1">Years experience</p>
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
