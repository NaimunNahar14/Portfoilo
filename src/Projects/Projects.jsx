import React from 'react';
import { FaCheck } from 'react-icons/fa';
import fashiondesign from '../assets/fashiondesign.png';
import toysImg from '../assets/toyshop.png';
import chefsImg from '../assets/chefs.png';
const Projects = () => {
    const handleFDLive = () => {
        window.location.href = 'https://fashion-desinger-7e6f6.web.app/';
    }
    const handleFDGitHub = () => {
        window.location.href = 'https://github.com/NaimunNahar14/fashion-designer-client';
    }
    const handleToyLive = () => {
        window.location.href = 'https://toys-shop-248e2.web.app/';
    }
    const handleToyGitHub = () => {
        window.location.href = 'https://github.com/NaimunNahar14/Toys-Shop-Client';
    }
    const handleChefHunterLive = () => {
        window.location.href = 'https://recipe-hunter-4a325.web.app/';
    }
    const handleChefHunterGitHub = () => {
        window.location.href = 'https://github.com/NaimunNahar14/Chefs-Client';
    }

    return (
        <div id='projects'>
            <div className="  py-3 mx-auto mb-12">
                <h2 className="text-center text-3xl font-semibold text-red-400">
                    Projects
                </h2>
            </div>

          
            <div data-aos="fade-up" data-aos-duration="2000" className=" space-y-2 grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 rounded-xl  bg-neutral-200 hover:bg-cyan-700 border-2 border-[#3a2888]">
                <div className="">
                    <img className='rounded-xl w-full h-full' src={fashiondesign} alt="" />
                </div>
                <div className=" hover:text-white text-start">
                    <h1 className='text-xl'>StyleMaker Fashion (<span className='text-sm font-light'> A Fashion School </span>)</h1>
                    <div className="mt-2">
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>Responsive Design</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>Student Dashboard</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>Payment Integration</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>Instructor Dashboard</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>Admin Dashboard</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>Social integration</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-5 mt-8 mb-24">
                <button onClick={handleFDLive} className="text-black py-4 bg-cyan-700 px-8 rounded-md hover:bg-inherit hover:text-black border border-cyan-900 ">Live Preview</button>
                <button onClick={handleFDGitHub} className="text-black py-4 bg-cyan-700 px-8 rounded-md hover:bg-inherit hover:text-black border border-cyan-900 ">GitHub</button>
            </div>

            {/* toy-creating website */}
            <div data-aos="fade-up" data-aos-duration="2000" className=" space-y-2 grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 rounded-xl  bg-neutral-200 hover:bg-cyan-700 border-2 border-[#3a2888]">
                <div className="hover:text-white">
                    <img className='rounded-xl h-full' src={toysImg} alt="" />
                </div>
                <div className=" hover:text-white text-start">
                    <h1 className='text-xl'>Toy's Shop(<span className='text-sm font-light'> A Toy Marketplace </span>)</h1>
                    <div className="mt-2">
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>User-friendly interface</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>Secure seller accounts</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>Toy management</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>Exclusive seller access</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'> toy gallery</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'> Toy details</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'> Category section</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>Social integration</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>Blog section</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-5 mt-8 mb-24">
                <button onClick={handleToyLive} className="text-black py-4 bg-cyan-700 px-8 rounded-md hover:bg-inherit hover:text-black border border-cyan-900 ">Live Preview</button>
                <button onClick={handleToyGitHub} className="text-black py-4 bg-cyan-700 px-8 rounded-md hover:bg-inherit hover:text-black border border-cyan-900 ">GitHub</button>
            </div>

            {/* Chefs hunter website */}
            <div data-aos="fade-up" data-aos-duration="2000" className="space-y-2 grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 rounded-xl  bg-neutral-200 hover:bg-cyan-700 border-2 border-[#3a2888]">
                <div className="">
                    <img className='rounded-xl w-full h-full' src={chefsImg} alt="" />
                </div>
                <div className=" hover:text-white text-start">
                    <h1 className='text-xl'>Chef's Hunter (<span className='text-sm font-light'> Serve food by Master Chefs </span>)</h1>
                    <div className="mt-2">
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>User-friendly interface</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>Personalized experience</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>Fresh and seasonal</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>Social integration</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheck></FaCheck>
                            <p className='font-light'>Blog Section</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-5 mt-8 mb-24">
                <button onClick={handleChefHunterLive} className="text-black py-4 bg-cyan-700 px-8 rounded-md hover:bg-inherit hover:text-black border border-cyan-900 ">Live Preview</button>
                <button onClick={handleChefHunterGitHub} className="text-black py-4 bg-cyan-700 px-8 rounded-md hover:bg-inherit hover:text-black border border-cyan-900 ">GitHub</button>
            </div>
        </div>
    );
};

export default Projects;