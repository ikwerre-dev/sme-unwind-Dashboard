import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import images (assuming these are imported correctly)
import yellowlyfeImage from '../assets/yellowlyfe.png';
import zoho from '../assets/zoho.png';
import BrandImage2 from '../assets/brand-2.png';
import priceTagImage from '../assets/price-tag.png';
import PurplePriceTagImage2 from '../assets/purple-price-tag-2.png';

// Bronze images import
import Bronze1 from '../assets/brand/bronze/1.png';
import Bronze2 from '../assets/brand/bronze/2.png';
import Bronze3 from '../assets/brand/bronze/3.png';
import Bronze4 from '../assets/brand/bronze/4.jpeg';
import Bronze5 from '../assets/brand/bronze/5.jpeg';
import Bronze6 from '../assets/brand/bronze/6.jpeg';
import Bronze7 from '../assets/brand/bronze/7.png';
import Bronze8 from '../assets/brand/bronze/8.png';
import Bronze9 from '../assets/brand/bronze/9.png';
import Bronze10 from '../assets/brand/bronze/10.png';
import Bronze11 from '../assets/brand/bronze/11.png';
import Bronze12 from '../assets/brand/bronze/12.png';
import Bronze13 from '../assets/brand/bronze/13.png';



// Bronze images import
import Platinum1 from '../assets/brand/platinum/1.png';
import Platinum2 from '../assets/brand/platinum/2.png';
import Platinum3 from '../assets/brand/platinum/3.png';


// Media images import
import Media1 from '../assets/brand/media/1.png';
import Media2 from '../assets/brand/media/2.png';
import Media3 from '../assets/brand/media/3.jpg';
import Media4 from '../assets/brand/media/4.png';
import Media5 from '../assets/brand/media/5.png';
import Media6 from '../assets/brand/media/6.jpg';
import Media7 from '../assets/brand/media/7.png';
import Media8 from '../assets/brand/media/8.png';
import Media9 from '../assets/brand/media/9.png';
import Media10 from '../assets/brand/media/10.png';
import Media11 from '../assets/brand/media/11.png';
import Media12 from '../assets/brand/media/12.png';





// Previous Sponsors images
import Brand1Image from '../assets/brand/1.png';
import Brand2Image from '../assets/brand/2.jpeg';
import Brand3Image from '../assets/brand/3.jpeg';
import Brand4Image from '../assets/brand/4.jpeg';
import Brand5Image from '../assets/brand/5.png';

const bronzeImages = [
    Bronze1, Bronze2, Bronze3, Bronze4, Bronze5,
    Bronze6, Bronze7, Bronze8, Bronze9, Bronze10,
    Bronze11, Bronze12, Bronze13
];



const mediaImages = [
    Media1, Media2, Media3, Media4, Media5,
    Media6, Media7, Media8, Media9, Media10,
    Media11, Media12
];


const platinumImages = [
    Platinum1, Platinum2, Platinum3
];

const BrandSection = () => {
    return (
        <div className="bg-[#0E1D12] text-white p-6 md:p-[8rem] pb-[8rem] py-[4rem] md:py-[8rem] font-sans relative" id="partners">
            <img src={priceTagImage} alt="Yellow Price Tag" className="absolute top-0 left-5 w-[3rem] md:w-20 h-[3rem] md:h-20" />
            <img src={PurplePriceTagImage2} alt="Purple Price Tag" className="absolute bottom-4 left-4 w-[4rem] md:w-[6rem] h-[4rem] md:h-[6rem]" />

            <h1 className="text-5xl font-bold wineFont mb-4">Our Sponsors</h1>

            <div className="py-5">
                <h1 className="text-3xl font-bold mb-4">Headline</h1>
                <div className="bg-white p-6 md:px-10 text-white flex justify-around flex-wrap rounded-lg items-center">
                    <div className="flex h-[7rem] align-center items-center w-[7rem] lg:w-[10rem]">
                        <img src={yellowlyfeImage} className="w-full max-w-lg mx-auto" alt="" />
                    </div>
                    <div className="flex h-[7rem] align-center items-center w-[7rem] lg:w-[10rem]">
                        <img src={zoho} className="w-full max-w-lg mx-auto" alt="" />
                    </div>
                </div>
            </div>

            <div className="py-5">
                <h1 className="text-3xl font-bold mb-4">Platinum</h1>
                <div className="bg-white p-6 md:px-10 text-white flex justify-around flex-wrap rounded-lg items-center">
                    {platinumImages.map((image, index) => (

                        <div className="flex h-[7rem] align-center items-center w-[7rem] lg:w-[10rem]">
                            <img src={image} className="w-full max-w-lg mx-auto" alt="" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-5">
                <h1 className="text-3xl font-bold mb-4">Bronze</h1>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                        type: 'bullets',
                        dynamicMainBullets: 1
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        }
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper p-6 md:px-10 text-white bg-white flex w-[100%] gap-4 rounded-lg"
                >
                    {bronzeImages.map((image, index) => (
                        <SwiperSlide key={index} className="flex flex-col justify-center items-center bg-white rounded-lg">
                            <div className="flex justify-center items-center flex-shrink-0">
                                <img
                                    src={image}
                                    className="max-w-lg mx-auto h-[8rem] w-[8rem] object-contain"
                                    alt={`Brand ${index + 1}`}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <hr className="my-10" />

            <div className="py-5">
                <h1 className="text-3xl font-bold mb-4">Media</h1>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                        type: 'bullets',
                        dynamicMainBullets: 1
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        }
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper p-6 md:px-10 text-white bg-white flex w-[100%] gap-4 rounded-lg"
                >
                    {mediaImages.map((image, index) => (
                        <SwiperSlide key={index} className="flex flex-col justify-center items-center bg-white rounded-lg">
                            <div className="flex justify-center items-center flex-shrink-0">
                                <img
                                    src={image}
                                    className="max-w-lg mx-auto h-[8rem] w-[8rem] object-contain"
                                    alt={`Brand ${index + 1}`}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <hr className="my-10" />

            <div className="py-5">
                <h1 className="text-3xl font-bold mb-4">Previous Sponsors</h1>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                        type: 'bullets',
                        dynamicMainBullets: 1
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        }
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper p-6 md:px-10 text-white bg-white flex w-[100%] gap-4 rounded-lg"
                >
                    {[Brand1Image, Brand2Image, Brand3Image, Brand4Image, Brand5Image].map((image, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center bg-white rounded-lg">
                            <div className="flex justify-center items-center flex-shrink-0 h-[8rem] w-[8rem]">
                                <img
                                    src={image}
                                    className="w-full max-w-lg mx-auto object-contain"
                                    alt={`Brand ${index + 1}`}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default BrandSection;