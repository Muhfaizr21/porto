import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Work from '../components/Work';
import TechStack from '../components/TechStack';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Awards from '../components/Awards';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <TechStack />
        <Experience />
        <Education />
        <Awards />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
