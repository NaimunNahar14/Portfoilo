import React from 'react';
import LazyLoad from 'react-lazy-load';
import image from '../assets/images (11).jpg';

const BImage = () => {
    return (
        <>
        <div className="lg:w-full mx-auto">
          
            <LazyLoad>
              <img
                src={image}
                alt=""
                className="lg:w-80 lg:h-80 sm:mt-32 lg:mt-0 mb-10 ring-teal-400 hover:ring-red-600 ring-1 rounded-full"
              />
            </LazyLoad>
          
        </div>
      </>
    );
};

export default BImage;