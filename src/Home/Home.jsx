import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div id="#" className="mx-auto overflow-hidden">
       <Banner></Banner>
       <About></About>
       <Skills></Skills>
       <Projects></Projects>
       <Footer></Footer>
      </div>
    );
};

export default Home;