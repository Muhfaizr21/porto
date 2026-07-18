import { useEffect } from 'react';

export function useScrollReveal(options = { threshold: 0.1 }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => {
      el.style.opacity = '0';
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [options]);
}
