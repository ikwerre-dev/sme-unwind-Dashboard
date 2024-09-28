import React from 'react';
import AboutImage from '../assets/about-bg.png';
import priceTagImage from '../assets/price-tag.png';
import starImage from '../assets/star.png';
import PurplePriceTagImage from '../assets/purple-price-tag.png';

const AboutSection = () => {
    return (
        <div className=" text-white  flex items-center px-4 py-[5rem] lg:py-[7rem]">
            <div className="container mx-auto flex flex-col md:flex-row items-center ">
                <div className="lg:w-1/2 mb-0 md:mb-8 lg:mb-0 p-6 lg:pl-[10rem]">

                    <h1 className="text-4xl lg:text-5xl  font-bold mb-10 mt-4 leading-tight">
                        Your Business Is Our Business
                    </h1>
                    <p className="md:mb-8 mt-4 text-gray-300 text-lg max-w-md">
                        SMEsUnwind was born out of a simple but powerful need- a space where business owners can come together,
                         connect, and grow withput the usual pressures. This event offers beyond just sales.


                    </p>
                </div>
                <div className="lg:w-1/2 px-4 lg:px-5 ">
                    <img src={AboutImage} alt="Shop" className="w-full max-w-lg md:px-10 mx-auto" />
                    
                </div>
            </div>


        </div>
    );
};

export default AboutSection;