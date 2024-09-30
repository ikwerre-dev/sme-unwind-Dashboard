import React, { useState, useEffect, Component } from "react";
import BrandImage from '../assets/brand.png'
import BrandImage2 from '../assets/brand-2.png'
import { Users } from "lucide-react";

const FeatureSection = () => {

    return (
        <div className=" p-6 md:px-10 text-white py-[5rem] flex flex-col items-center ">

            <h2 className="wineFont text-4xl">What you're Getting</h2>

            <div className="flex justify-center flex-wrap gap-8 mt-[3rem]">
            <div className="flex justify-between ">
                <div className="bg-[#D4D4D4] p-5  rounded rounded-lg flex flex-col gap-5">
                    <div className="bg-[#FFF3E5] w-9 h-9 flex items-center justify-center p-2 rounded rounded-[50%]">
                        <Users color="#FF8700" />
                    </div>
                    <h3 className="text-black font-bold text-sm">Access to 5000+ potential customer</h3>
                </div>
            </div>

            <div className="flex justify-between ">
                <div className="bg-[#D4D4D4] p-5  rounded rounded-lg flex flex-col gap-5">
                    <div className="bg-[#FFF3E5] w-9 h-9 flex items-center justify-center p-2 rounded rounded-[50%]">
                        <Users color="#FF8700" />
                    </div>
                    <h3 className="text-black font-bold text-sm">Connect with 500+ Brands and SME's</h3>
                </div>
            </div>

            <div className="flex justify-between ">
                <div className="bg-[#D4D4D4] p-5  rounded rounded-lg flex flex-col gap-5">
                    <div className="bg-[#FFF3E5] w-9 h-9 flex items-center justify-center p-2 rounded rounded-[50%]">
                        <Users color="#FF8700" />
                    </div>
                    <h3 className="text-black font-bold text-sm">Exclusive after-party to Unwind and have fun</h3>
                </div>
            </div>
            </div>
            <h5 className="wineFont text-green-700 mt-[3rem]">Get 10% off if you pay today</h5>
        </div>
    );
};

export default FeatureSection;
