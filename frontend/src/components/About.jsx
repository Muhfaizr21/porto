import React, { useState, useEffect } from 'react';

const About = () => {
  const [projects, setProjects] = useState(null);
  const [years, setYears] = useState(null);
  const [certs, setCerts] = useState(null);
  const [stacks, setStacks] = useState(null);

  useEffect(() => {
    fetch('/api/projects').then(r => r.json()).then(d => { if (d.data) setProjects(d.data.length); }).catch(() => setProjects(42));
    fetch('/api/experiences').then(r => r.json()).then(d => {
      if (d.data && d.data.length) {
        const yearsSet = new Set();
        d.data.forEach(e => {
          if (e.start_year) yearsSet.add(parseInt(e.start_year));
          if (e.end_year) yearsSet.add(parseInt(e.end_year));
        });
        setYears(yearsSet.size || 3);
      }
    }).catch(() => setYears(3));
    fetch('/api/certifications').then(r => r.json()).then(d => { if (d.data) setCerts(d.data.length); }).catch(() => setCerts(8));
    fetch('/api/experiences').then(r => r.json()).then(d => {
      if (d.data && d.data.length) {
        const allSkills = new Set();
        d.data.forEach(e => { if (e.skills) e.skills.split(',').forEach(s => allSkills.add(s.trim().toLowerCase())); });
        setStacks(allSkills.size || 5);
      }
    }).catch(() => setStacks(5));
  }, []);

  const stats = [
    { value: projects ?? 42, suffix: '+', label: 'Projects completed' },
    { value: years ?? 3, suffix: '+', label: 'Years experience' },
    { value: certs ?? 8, suffix: '+', label: 'Certifications' },
    { value: stacks ?? 5, suffix: '+', label: 'Tech stacks' },
  ];

  return (
    <section id="about" className="py-section-gap border-t border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          <div className="md:col-span-2 reveal">
            <p className="label-sm text-brand-600 mb-4">About</p>
            <p className="body-lg text-secondary leading-relaxed">
              Based in Cirebon, Indonesia. Currently pursuing a BASc in Software Engineering 
              at Politeknik Negeri Indramayu while working on real-world projects.
            </p>
            <p className="body-lg text-secondary leading-relaxed mt-6">
              My focus is building reliable, scalable web systems — from monitoring platforms 
              to full-stack applications. I believe in clean architecture, pragmatic tooling, 
              and software that actually helps people.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-4 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="p-6 bg-surface-container-low rounded-2xl">
                  <p className="text-2xl font-bold text-primary">{s.value}{s.suffix}</p>
                  <p className="text-sm text-secondary mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
