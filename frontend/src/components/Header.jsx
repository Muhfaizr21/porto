import React, { useState, useEffect } from 'react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('work');
  const [cvUrl, setCvUrl] = useState('/cv.pdf');

  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    // Attempt to fetch dynamic CV path if backend provides it via a full URL,
    // otherwise fallback to the default static /cv.pdf we put in public folder.
    fetch('/api/about').then(r => r.json()).then(d => {
      if (d.data?.cv_path && d.data.cv_path.startsWith('http')) {
        setCvUrl(d.data.cv_path);
      }
    }).catch(() => {});
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['work', 'experience', 'stack', 'about', 'contact'];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const links = [
    { href: '#work', label: 'Work', icon: 'grid_view' },
    { href: '#experience', label: 'Experience', icon: 'work_history' },
    { href: '#stack', label: 'Stack', icon: 'terminal' },
    { href: '#about', label: 'About', icon: 'person' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface/85 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-16 md:h-20">
          <a href="#" className="text-xl font-bold tracking-tight text-primary hover:text-brand-600 transition-colors">
            MFR<span className="text-brand-500">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-10 text-sm text-secondary">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className={`transition-colors ${activeSection === l.href.slice(1) ? 'text-primary font-medium' : 'hover:text-primary'}`}>
                {l.label}
              </a>
            ))}
            <button onClick={() => setDark(!dark)} className="hover:text-primary transition-colors" aria-label="Toggle theme">
              <span className="material-symbols-outlined text-base">{dark ? 'light_mode' : 'dark_mode'}</span>
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-xs font-medium text-secondary hover:text-primary border border-outline-variant rounded-full hover:border-primary transition-all">
              CV
            </a>
            <a href="#contact" className="px-4 py-2 text-xs font-medium bg-primary text-on-primary rounded-full hover:opacity-90 transition-all">
              Contact
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button onClick={() => setDark(!dark)} className="p-2 text-secondary">
              <span className="material-symbols-outlined text-xl">{dark ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 text-xs font-medium text-primary border border-outline-variant rounded-full bg-surface-container-low">
              CV
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md border-t border-outline-variant pb-safe">
        <div className="flex items-center justify-around h-16 px-2">
          {links.map(l => {
            const isActive = activeSection === l.href.slice(1);
            return (
              <a key={l.href} href={l.href} className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${isActive ? 'text-brand-600' : 'text-secondary hover:text-primary'}`}>
                <span className="material-symbols-outlined text-2xl">{l.icon}</span>
                <span className="text-[10px] font-medium">{l.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
