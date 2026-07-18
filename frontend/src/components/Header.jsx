import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-8 border-b border-outline-variant bg-surface/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="font-headline-md text-headline-md font-bold tracking-tight text-primary hover:text-blue-600 transition-colors cursor-pointer">
          PORTOFOLIO
        </div>
        <nav className="hidden md:flex gap-10 font-label-md text-label-md uppercase tracking-widest text-secondary">
          <a className="hover:text-primary transition-colors" href="#about">Tentang</a>
          <a className="hover:text-primary transition-colors" href="#experience">Pengalaman</a>
          <a className="hover:text-primary transition-colors" href="#work">Karya</a>
          <a className="hover:text-primary transition-colors" href="#stack">Teknologi</a>
        </nav>
        <a href="#contact" className="hidden md:block bg-primary text-on-primary px-8 py-3 font-label-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors rounded-full shadow-sm hover:shadow-md">
          Mari Berdiskusi
        </a>
        {/* Mobile menu button */}
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
