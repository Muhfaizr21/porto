import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-16 border-t border-outline-variant bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8 transition-opacity duration-200">
        
        <div className="font-headline-md text-headline-md font-bold text-primary">
          FAIZ RAMADHAN
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 font-body-md text-body-md">
          <a className="text-secondary hover:text-blue-600 transition-colors font-medium" href="https://www.linkedin.com/in/muhammad-faiz-ramadhan-215a3625b/?skipRedirect=true" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="text-secondary hover:text-blue-600 transition-colors font-medium" href="https://github.com/muhammadfaizramadha" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        
        <div className="font-body-md text-body-md text-secondary text-center md:text-right">
          © {new Date().getFullYear()} Muhammad Faiz Ramadhan. <br className="md:hidden" />Dibuat dengan tangan · Jakarta.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
