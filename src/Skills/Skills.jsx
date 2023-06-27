import React from 'react';
import { Fade } from 'react-awesome-reveal';
import html from '../assets/html.jpg';
import css from '../assets/css.png';
import javascript from '../assets/js.png';
import bootstrap from '../assets/bootstrap.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import node from '../assets/nodejs.png';
import python from '../assets/python.png';
import firebase from '../assets/firebase.png'
import mongodb from '../assets/mongodb.jpg';
import express from '../assets/express.png';
import java from '../assets/java.png';


const Skills = () => {
  return (
    <div className="my-20 mx-auto" id="skills" >
      <h2 className="text-center text-3xl font-semibold text-red-400">
        Skills
      </h2>
      <div className="my-10">
        <div className='grid grid-cols-2 lg:grid-cols-4 text-center gap-3'>
          <Fade direction="up" duration={1000} damping={0.1}>
            <div className="flex bg-neutral-200 mx-auto w-36 py-2 rounded-xl gap-3 items-center">
              <img src={html} alt="" className="w-14" />
              <p>HTML</p>
            </div>
            <div className="flex gap-3 bg-neutral-200 mx-auto w-36 py-2 rounded-xl items-center">
              <img src={css} alt="" className="w-14" />
              <p>CSS</p>
            </div>
            <div className="flex gap-3 bg-neutral-200 mx-auto w-36 py-2 rounded-xl items-center">
              <img src={javascript} alt="" className="w-14" />
              <p>JavaScript</p>
            </div>
            <div className="flex gap-3 bg-neutral-200 mx-auto w-36 py-2 rounded-xl items-center">
              <img src={bootstrap} alt="" className="w-14" />
              <p>Bootstrap</p>
            </div>
          </Fade>
          <Fade direction="up" delay={1} duration={1000} damping={0.1}>
            <div className="flex gap-3 bg-neutral-200 mx-auto w-36 py-2 rounded-xl items-center">
              <img src={tailwind} alt="" className="w-14" />
              <p>Tailwind CSS</p>
            </div>
            <div className="flex gap-3 bg-neutral-200 mx-auto w-36 py-2 rounded-xl items-center">
              <img src={react} alt="" className="w-14" />
              <p>React</p>
            </div>
            <div className="flex gap-3 bg-neutral-200 mx-auto w-36 py-2 rounded-xl items-center">
              <img src={node} alt="" className="w-14" />
              <p>Node.js</p>
            </div>
            <div className="flex gap-3 bg-neutral-200 mx-auto w-36 py-2 rounded-xl items-center">
              <img src={python} alt="" className="w-14" />
              <p>Python</p>
            </div>
          </Fade>
          <Fade direction="up" duration={1000} damping={0.1}>
            <div className="flex gap-3 bg-neutral-200 mx-auto w-36 py-2 rounded-xl items-center">
              <img src={mongodb} alt="" className="w-14 h-14" />
              <p>MongoDB</p>
            </div>
            <div className="flex gap-3 bg-neutral-200 mx-auto w-36 py-2 rounded-xl items-center">
              <img src={express} alt="" className="w-12 h-14 bg-white" />
              <p>Express.js</p>
            </div>
            <div className="flex gap-3 bg-neutral-200 mx-auto w-36 py-2 rounded-xl items-center">
              <img src={firebase} alt="" className="w-10" />
              <p>Firebase</p>
            </div>
            <div className="flex gap-3 bg-neutral-200 mx-auto w-36 py-2 rounded-xl items-center">
              <img src={java} alt="" className="w-10" />
              <p>Java</p>
            </div>
          </Fade>

        </div>
      </div>
    </div>
  );
};

export default Skills;