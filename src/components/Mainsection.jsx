import React from 'react';
import shopImage from '../assets/shop-image.png';
import priceTagImage from '../assets/price-tag.png';
import starImage from '../assets/star.png';
import PurplePriceTagImage from '../assets/purple-price-tag.png';

const MainSection = () => {
    return (
        <div className=" text-white  flex items-center px-4 md:px-10 pt-5 py-[7rem] lg:py-[10rem] lg:pb-[10rem]" id='home'>
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="lg:w-1/2 mb-8 lg:mb-0 p-5">
                    <div className="flex items-center text-center">
                        <div className="bg-orange-500  wineFont text-white px-4 py-1 rounded-full inline-block mb-4 text-sm">
                            SMEUnwind 2024
                        </div>
                        <img
                            src={priceTagImage}
                            alt="Price Tag"
                            className="w-8 h-8 ml-[-.5rem] "
                        />
                    </div>
                    <h1 className="text-4xl lg:text-6xl wineFont font-bold mb-4 mt-4 leading-tight">
                        Sell to 5,000+ customers at the Lagos Black Friday Trade Fair
                    </h1>
                    <p className="mb-8 text-gray-300 text-bold max-w-md">
                        This is your chance to sell your market right in front of over
                        5,000 potential customers while connecting and networking
                        with over 500 businesses and brands
                    </p>
                </div>
                <div className="lg:w-1/2 relative">
                <div className="realative">
                    
                    <img src={shopImage} alt="Shop" className="w-full max-w-lg mx-auto " />
                    <p className='absolute bottom-3 text-[.7rem] md:text-sm font-bold wineFont left-[33.5%] md:left-[41%]'>24th November 2024</p>
                </div>
                    <img
                        src={PurplePriceTagImage}
                        alt="Price Tag"
                        className="absolute top-0 right-0 w-12 h-12"
                    />
                    <img
                        src={starImage}
                        alt="Star"
                        className="absolute top-1/4 right-1/4 w-8 h-8"
                    />
                    <img
                        src={priceTagImage}
                        alt="Price Tag"
                        className="absolute bottom-0 left-2/3 md:left-1/4 w-12 h-12 transform rotate-45"
                    />
                </div>
            </div>

            <img
                src={starImage}
                alt="Star"
                className="absolute bottom-25 right-8 w-16 h-16"
            />
        </div>
    );
};

export default MainSection;