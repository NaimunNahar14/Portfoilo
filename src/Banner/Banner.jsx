import React from 'react';
import Type from '../Banner/Typeanimation';
import BannerImage from '../Banner/BImage';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa";



const Banner = () => {
    return (
        <div className='lg:flex mt-5 justify-center mx-auto items-center gap-12'>
            <div className='lg:w-2/3 mx-auto lg:mx-0 text-black'>
                <h2 className='lg:text-3xl'>I am Naimun Nahar </h2>
                <div className="lg:text-3xl lg:my-5">
                    <Type></Type>
                </div>
                <p className="lg:text-xl">
                    Passionate and Hard Working  front-end developer with expertise in HTML,
                    CSS, and JavaScript. Committed to creating visually appealing,
                    user-friendly websites that deliver seamless and engaging experiences.
                    I am familiar with version control systems like Git, allowing you to collaborate effectively with designers, back-end developers, and other team members. 
                </p>
                <div className="flex gap-5 justify-center items-center mt-5">
                    <a href="https://www.linkedin.com/in/naimun-nahar-531232280/">
                        <span><FaLinkedin></FaLinkedin></span>

                    </a>
                    <a href="https://github.com/NaimunNahar14">
                        <span><FaGithub></FaGithub></span>

                    </a>
                    <a href="">
                        <span><FaFacebook></FaFacebook></span>
                    </a>
                </div>
                <div className="text-center mx-auto">
                    <button className="btn text-white mt-5 bg-gradient-to-r from-red-400 to-blue-500 hover:from-pink-500 hover:to-yellow-400">
                      <a href="/NaimunNaharSoseResume.pdf" download>
                      Download Resume
                      </a>

                    </button>
                    <button className="btn text-white mt-5 bg-gradient-to-r from-red-400 to-blue-500 hover:from-pink-500 hover:to-yellow-400">
                        <Link to="#contacts">Hire Me</Link>
                    </button>

                </div>
            </div>
            <div>
                <BannerImage></BannerImage>
            </div>

        </div>
    );
};

export default Banner;