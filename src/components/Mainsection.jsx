import React from 'react';
import shopImage from '../assets/shop-image.png';  
import priceTagImage from '../assets/price-tag.png'; 
import starImage from '../assets/star.png'; 

const MainSection = () => {
  return (
    <div className="bg-black text-white  flex items-center px-4 py-[15rem]">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="bg-orange-500 text-white px-4 py-1 rounded-full inline-block mb-4 text-sm">
            SMEUnwind 2024
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Sell to 5,000+ customers at Lagos Mega Black Friday event
          </h1>
          <p className="mb-8 text-gray-300 max-w-md">
            This is your chance to sell your market right in front of over
            5,000 potential customers while connecting and networking
            with over 500 businesses and brands
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <img src={shopImage} alt="Shop" className="w-full max-w-md mx-auto" />
          <img 
            src={priceTagImage} 
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
            className="absolute bottom-0 left-1/4 w-12 h-12 transform rotate-45"
          />
        </div>
      </div>
      <img 
        src={priceTagImage} 
        alt="Price Tag" 
        className="absolute top-[10rem] left-8 w-12 h-12 transform -rotate-12"
      />
      <img 
        src={starImage} 
        alt="Star" 
        className="absolute bottom-8 right-8 w-16 h-16"
      />
    </div>
  );
};

export default MainSection;