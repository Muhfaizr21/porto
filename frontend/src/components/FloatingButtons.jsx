import React, { useState, useEffect } from 'react';

const FloatingButtons = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {show && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all duration-300">
          <span className="material-symbols-outlined text-sm">arrow_upward</span>
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
