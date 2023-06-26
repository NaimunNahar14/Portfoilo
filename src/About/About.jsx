import React from 'react';
import { Fade } from "react-awesome-reveal";
import picture from '../assets/hijab-woman.jpg';
import LazyLoad from "react-lazy-load";

const About = () => {
    return (
        <div className="my-20 mx-auto" id="about">
        <h2 className="text-center text-3xl font-semibold text-red-400">
          About Me
        </h2>
        <div className="lg:flex items-center my-5">
          <div className="lg:w-1/2">
            <Fade direction="right" duration={2000} delay={1000}>
              <LazyLoad>
                <img src={picture} alt="" className="rounded-2xl w-96" />
              </LazyLoad>
            </Fade>
          </div>
          <div className=" lg:w-2/3 mt-4">
            <Fade direction="right" duration={3000}>
              <p className="lg:text-xl">
                Welcome to my portfolio! I am a passionate web developer with a
                focus on front-end development and expertise in the MERN stack.
                With hands-on experience in three successful projects, I have
                honed my skills in building responsive websites and web
                applications. Explore my portfolio to see how I have utilized my
                technical knowledge and creative flair to deliver visually
                appealing designs and seamless user experiences. I am constantly
                learning and staying up-to-date with the latest industry trends to
                provide innovative solutions. Let's connect and discuss how I can
                contribute to your next digital project.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    );
};

export default About;