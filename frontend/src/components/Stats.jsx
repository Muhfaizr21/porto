import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    // Reset counted so it can animate again if the 'end' value updates from API
    counted.current = false;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref} className="font-headline-xl text-headline-xl text-primary tabular-nums">{count}{suffix}</span>;
};

const Stats = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    experience: 0,
    certifications: 0,
    tools: 30 // Based on the 30 skills in TechStack.jsx
  });

  useEffect(() => {
    Promise.all([
      fetch('/api/projects').then(r => r.json()).catch(() => ({})),
      fetch('/api/experiences').then(r => r.json()).catch(() => ({})),
      fetch('/api/certifications').then(r => r.json()).catch(() => ({}))
    ]).then(([projRes, expRes, certRes]) => {
      setCounts(prev => ({
        ...prev,
        projects: projRes?.data?.length || prev.projects,
        experience: expRes?.data?.length || prev.experience,
        certifications: certRes?.data?.length || prev.certifications
      }));
    });
  }, []);

  const items = [
    { value: counts.projects, suffix: '+', label: 'Proyek Selesai' },
    { value: counts.experience, suffix: '+', label: 'Pengalaman Kerja' },
    { value: counts.certifications, suffix: '+', label: 'Sertifikasi' },
    { value: counts.tools, suffix: '+', label: 'Tools & Tech Stack' },
  ];

  return (
    <section className="py-20 border-t border-outline-variant relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-500/[0.02] via-transparent to-brand-500/[0.02] pointer-events-none"></div>
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center">
          {items.map((item, i) => (
            <div key={i} className="space-y-3">
              <div className="flex items-baseline justify-center gap-1">
                <Counter end={item.value} suffix={item.suffix} />
              </div>
              <p className="font-label-sm text-secondary uppercase tracking-widest text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
