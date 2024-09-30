import React from 'react';
import AboutImage from '../assets/about-bg.png';
import priceTagImage from '../assets/price-tag.png';
import starImage from '../assets/star.png';
import PurplePriceTagImage from '../assets/purple-price-tag.png';
import PurplePriceTagImage2 from '../assets/purple-price-tag-2.png';
import { Asterisk } from 'lucide-react';
const EventSchedule = () => {
    const events = [
        { name: 'Vendor Setup', time: '9 am - 11 am', color: "bg-[#1C3C26]", lineColor: "bg-green-500", starColor: "text-orange-500" },
        { name: 'Photos, Media', time: '11 am - 12 pm', color: 'bg-[#FF4D0033]', lineColor: "bg-orange-500", starColor: "text-green-500" },
        { name: 'Marketplace', time: '12 pm - 5 pm', color: 'bg-[#FFD52833]', lineColor: "bg-green-500", starColor: "text-orange-500" },
        { name: 'Raffle Draw, Performances', time: '5 pm - 6.30 pm', color: 'bg-green-700', lineColor: "bg-orange-500", starColor: "text-green-500" },
        { name: 'After Party', time: '7 pm - 11 pm', color: 'bg-[#FF4D0033]', lineColor: "bg-orange-500", starColor: "text-green-500" },
    ];

    return (

             <div className="bg-[#0E1D12] text-white p-6 pb-[8rem] md:pb-8 font-sans relative">
                <img src={priceTagImage} alt="Yellow Price Tag" className="absolute top-0 left-[40%] w-20 h-20" />
                <img src={PurplePriceTagImage2} alt="Purple Price Tag" className="absolute bottom-4 left-4 w-[6rem] h-[6rem]" />

                <div className="container mx-auto flex flex-col py-2 md:py-[3rem] md:flex-row  ">
                    <div className="lg:w-1/2 mb-0 md:mb-8 lg:mb-0 p-6 lg:pl-[10rem]">

                        <h1 className="text-5xl font-bold wineFont mb-4">Event</h1>
                        <h1 className="text-5xl pl-[3rem] font-bold wineFont mb-4">Schedule</h1>
                        <p className="mb-6 font-bold my-6">Don't miss out on any activity. Check out the event schedule</p>

                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSeb48uKYKLdO9ImUIMylPRDj6PT9hnn7vCXYJrfbaII2bAu5g/viewform' className="bg-orange-600 text-white px-4 py-2 rounded-full mb-8">
                            I want a stall
                        </a>
                    </div>
                    <div className="lg:w-1/2 px-4 lg:px-5 ">
                        <div className="space-y-4 flex flex-col items-center">
                            <div className="flex flex-col space-y-4  md:p-6">
                                {events.map((event, index) => (
                                    <div key={index} className={`${event.color} p-6 w-full rounded-lg flex justify-between items-center relative overflow-hidden`}>
                                        <div className={`w-2 absolute left-0 top-0 bottom-0 ${event.lineColor}`}></div>
                                        <div className="flex justify-between items-center w-full">
                                            <div className='flex flex-col gap-1 ml-6'>
                                                <h3 className="font-bold text-2xl text-white">{event.name}</h3>
                                                <p className='font-bold text-lg text-white'>{event.time}</p>
                                            </div>
                                            <div className={`${event.starColor}`}>
                                                <Asterisk size={32} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
};

            export default EventSchedule;