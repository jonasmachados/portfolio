import React from 'react';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import Banner from '../Banner/Banner.js';
import Projects from '../Projects/Projects.js';
import Skills from '../Skills/Skills.js';

const HomePage = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;