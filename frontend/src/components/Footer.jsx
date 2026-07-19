import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-secondary">
            &copy; {new Date().getFullYear()} Muhammad Faiz Ramadhan
          </p>
          <div className="flex items-center gap-6 text-sm text-secondary">
            <a href="https://github.com/Muhfaizr21" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/muhammad-faiz-ramadhan-215a3625b/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="mailto:mfaizschl@gmail.com" className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
