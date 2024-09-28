import React, { useState, useEffect, Component } from "react";
import BrandImage from '../assets/brand.png'
import BrandImage2 from '../assets/brand-2.png'
 
const BrandSection = () => {
    
    return (
        <div className="bg-gray-300 p-6 md:px-10 text-white flex justify-around flex-wrap items-center ">
            <div className="h-[7rem] align-center items-center w-[7rem]">
                <img src={BrandImage}  className="w-full max-w-lg mx-auto" alt="" />
            </div>
            <div className="h-[7rem] w-[7rem] grid align-center justify-center  items-center">
                <img src={BrandImage2}  className="w-full max-w-lg mx-auto" alt="" />
            </div>
            <div className="h-[7rem] w-[7rem] grid align-center justify-center  items-center">
                <img src={BrandImage}  className="w-full max-w-lg mx-auto" alt="" />
            </div>
            <div className="h-[7rem] w-[7rem] grid align-center justify-center  items-center">
                <img src={BrandImage2}  className="w-full max-w-lg mx-auto" alt="" />
            </div>
            <div className="h-[7rem] w-[7rem] grid align-center justify-center  items-center">
                <img src={BrandImage}  className="w-full max-w-lg mx-auto" alt="" />
            </div>
            <div className="h-[7rem] w-[7rem] grid align-center justify-center  items-center">
                <img src={BrandImage2}  className="w-full max-w-lg mx-auto" alt="" />
            </div>
           
        </div>
    );
};

export default BrandSection;
