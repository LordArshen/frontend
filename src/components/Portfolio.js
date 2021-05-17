import React from 'react';
import Header from './Header';
import About from './About';
import Profile from './Profile';
import Experience from './Experience';
import Academic from './Academic';
import Skills from './Skills';
import Interest from './Interest';
import Languages from './Languages';

const Portfolio = () => {
  return (
    <>
      <div className='container'>
        <div className='left-column'>
          <div className='avatar'>
            .
          </div>
          <Header />
          <Languages />
          <Skills />
          <Interest />
        </div>
        <div className='right-column'>
          <About />
          <Profile />
          <Academic />
          <Experience />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
