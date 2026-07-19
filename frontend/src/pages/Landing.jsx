import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Work from '../components/Work';
import TechStack from '../components/TechStack';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Awards from '../components/Awards';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Faq from '../components/Faq';
import GitHubActivity from '../components/GitHubActivity';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const Landing = () => {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Stats />
        <Work />
        <TechStack />
        <Experience />
        <Education />
        <Awards />
        <Blog />
        <Testimonials />
        <Faq />
        <GitHubActivity />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Landing;
