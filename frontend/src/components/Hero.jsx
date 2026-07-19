import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('/api/about')
      .then(r => r.json())
      .then(d => {
        if (d.data) {
          setAboutData(d.data);
        }
      })
      .catch(console.error);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      <motion.div 
        className="max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-outline-variant shrink-0">
            <img 
              src="/profile.jpeg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="label-sm text-brand-600 tracking-[0.15em] m-0">Muhammad Faiz Ramadhan</p>
        </motion.div>

        {aboutData && aboutData.title ? (
          <motion.h1 variants={itemVariants} className="heading-xl text-primary leading-[1.05] mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-primary to-brand-500 animate-gradient">
              {aboutData.title}
            </span>
            <span className="text-brand-500 font-medium">.</span>
          </motion.h1>
        ) : (
          <motion.h1 variants={itemVariants} className="heading-xl text-primary leading-[1.05] mb-6">
            Full-Stack<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-primary to-brand-500 animate-gradient font-medium">
              Software&nbsp;Engineer
            </span>
            <span className="text-brand-500 font-medium">.</span>
          </motion.h1>
        )}

        <motion.p variants={itemVariants} className="body-lg text-secondary max-w-2xl mb-10 leading-relaxed">
          {aboutData && aboutData.description_1 ? aboutData.description_1 : (
            <>
              I design and build scalable web systems — from automated monitoring platforms 
              to high-performance web applications. Currently based in Indonesia, working with 
              startups and agencies to ship reliable software.
            </>
          )}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <a href="#work" className="inline-flex items-center gap-2 bg-primary text-on-primary px-7 py-3.5 rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition-all">
            See my work
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
          <a href="#about" className="inline-flex items-center gap-2 text-secondary hover:text-primary px-7 py-3.5 rounded-full border border-outline-variant hover:border-primary text-sm font-medium hover:scale-105 active:scale-95 transition-all">
            More about me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
