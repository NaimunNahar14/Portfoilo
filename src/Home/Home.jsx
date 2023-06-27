import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div id="#" className="mx-auto overflow-hidden">
       <Banner></Banner>
       <About></About>
       <Skills></Skills>
       <Projects></Projects>
       <Contact></Contact>
       
       <Footer></Footer>
      </div>
    );
};

export default Home;