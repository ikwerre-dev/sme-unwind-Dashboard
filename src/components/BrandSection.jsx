import React, { useState, useEffect, Component, useRef } from "react";
import BrandImage from '../assets/brand.png'
import yellowlyfeImage from '../assets/yellowlyfe.png'
import BrandImage2 from '../assets/brand-2.png'
import priceTagImage from '../assets/price-tag.png';
import starImage from '../assets/star.png';
import sterlingImage from '../assets/sterling.png';
import TraceImage from '../assets/trace.png';
import UberImage from '../assets/uber.png';
import Brand1Image from '../assets/brand/1.png';
import Brand2Image from '../assets/brand/2.jpeg';
import Brand3Image from '../assets/brand/3.jpeg';
import Brand4Image from '../assets/brand/4.jpeg';
import Brand5Image from '../assets/brand/5.png';
import Brand6Image from '../assets/brand/6.png';

import PurplePriceTagImage from '../assets/purple-price-tag.png';
import PurplePriceTagImage2 from '../assets/purple-price-tag-2.png';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const BrandSection = () => {

    return (
        <div className="bg-[#0E1D12] text-white p-6 md:p-[8rem] pb-[8rem] py-[4rem] md:py-[8rem] font-sans relative" id="partners">
            <img src={priceTagImage} alt="Yellow Price Tag" className="absolute top-0 left-5 w-[3rem] md:w-20 h-[3rem] md:h-20" />
            <img src={PurplePriceTagImage2} alt="Purple Price Tag" className="absolute bottom-4 left-4 w-[4rem] md:w-[6rem] h-[4rem] md:h-[6rem]" />
            <h1 className="text-5xl font-bold wineFont mb-4">Our Sponsors</h1>
            {/* <p className="mb-6 font-bold my-6">Don't miss out on any activity. Check out the event schedule</p> */}

            <div className=" py-5 ">

                <h1 className="text-3xl font-bold  mb-4">Headline</h1>
                <div className="bg-white p-6 md:px-10 text-white flex justify-around flex-wrap rounded-lg items-center ">
                    <div className="flex h-[7rem] align-center items-center w-[7rem] lg:w-[10rem]">
                        <img src={yellowlyfeImage} className="w-full max-w-lg mx-auto" alt="" />
                    </div>


                </div>
            </div>
            <div className=" py-5 ">

                <h1 className="text-3xl font-bold  mb-4">Plantinum</h1>
                <div className="bg-white p-6 md:px-10 text-white flex justify-around flex-wrap rounded-lg items-center ">
                    <div className="flex h-[7rem] align-center items-center w-[7rem] lg:w-[10rem]">
                        <img src={BrandImage2} className="w-full max-w-lg mx-auto" alt="" />
                    </div>


                </div>
            </div>
            <div className=" py-5 ">

                <h1 className="text-3xl font-bold  mb-4">Bronze</h1>
                <div className="bg-white p-6 md:px-10 text-white flex justify-evenly flex-wrap rounded-lg items-center ">
                    <div className="flex h-[7rem] align-center items-center w-[7rem] lg:w-[10rem]">
                        <img src={BrandImage} className="w-full max-w-lg mx-auto" alt="" />
                    </div>
                    <div className="flex h-[7rem] w-[7rem] lg:w-[10rem] grid align-center justify-center  items-center">
                        <img src={TraceImage} className="w-full max-w-lg mx-auto" alt="" />
                    </div>
                    <div className="flex h-[7rem] align-center items-center w-[7rem] lg:w-[10rem]">
                        <img src={Brand6Image} className="w-full max-w-lg mx-auto" alt="" />
                    </div>


                </div>
            </div>
            <hr className="my-10" />
            <div className=" py-5 ">

                <h1 className="text-3xl font-bold  mb-4">Previous Sponsors</h1>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                        type: 'bullets',
                        dynamicMainBullets: 1
                    }}
                    slidesPerView={2}   
                    spaceBetween={5}   
                    modules={[Pagination]}
                    className="mySwiper p-6 md:px-10 text-white bg-white flex w-[100%] gap-4 rounded-lg"
                >
                     <SwiperSlide className="flex flex-col justify-center items-center bg-white rounded-lg">
                        <div className="flex justify-center items-center  flex-shrink-0 h-[8rem] w-[8rem] ">
                            <img src={Brand1Image} className="w-full max-w-lg mx-auto" alt="Brand 1" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="flex justify-center items-center bg-white rounded-lg">
                        <div className="flex justify-center items-center  flex-shrink-0 h-[8rem] w-[8rem] ">
                            <img src={Brand2Image} className="w-full max-w-lg mx-auto" alt="Brand 2" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="flex justify-center items-center bg-white rounded-lg">
                        <div className="flex justify-center items-center  flex-shrink-0 h-[8rem] w-[8rem] ">
                            <img src={Brand3Image} className="w-full max-w-lg mx-auto" alt="Brand 3" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="flex justify-center items-center bg-white rounded-lg">
                        <div className="flex justify-center items-center  flex-shrink-0 h-[8rem] w-[8rem] ">
                            <img src={Brand4Image} className="w-full max-w-lg mx-auto" alt="Brand 4" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="flex justify-center items-center bg-white rounded-lg">
                        <div className="flex justify-center items-center  flex-shrink-0 h-[8rem] w-[8rem] ">
                            <img src={Brand5Image} className="w-full h-[2rem] max-w-lg mx-auto" alt="Brand 5" />
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* <div className="bg-white p-6 md:px-10 text-white flex justify-evenly flex-wrap rounded-lg items-center ">
                    <div className="flex h-[7rem] align-center items-center w-[7rem] lg:w-[10rem]">
                        <img src={Brand1Image} className="w-full max-w-lg mx-auto" alt="" />
                    </div>
                    <div className="flex h-[7rem] align-center items-center w-[7rem] lg:w-[10rem]">
                        <img src={Brand2Image} className="w-full max-w-lg mx-auto" alt="" />
                    </div>
                    <div className="flex h-[7rem] align-center items-center w-[7rem] lg:w-[10rem]">
                        <img src={Brand3Image} className="w-full max-w-lg mx-auto" alt="" />
                    </div>
                    <div className="flex h-[7rem] align-center items-center w-[7rem] lg:w-[10rem]">
                        <img src={Brand4Image} className="w-full max-w-lg mx-auto" alt="" />
                    </div>
                    <div className="flex h-[7rem] align-center items-center w-[7rem] lg:w-[10rem]">
                        <img src={Brand5Image} className="w-full max-w-lg mx-auto" alt="" />
                    </div>

                </div> */}

            </div>
        </div>
    );
};

export default BrandSection;
