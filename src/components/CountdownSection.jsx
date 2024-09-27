import React, { useState, useEffect, Component } from "react";

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { ArrowRight } from "lucide-react";

const Countdown = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date("2023-12-31T00:00:00");
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });
    const targetDate = new Date('2024-09-30T00:00:00').getTime();

    return (
        <div className="bg-green-700 p-6 md:px-10 text-white flex justify-around items-center ">

            <div className="flex flex-col items-center">
                <p className="text-lg font-semibold">Early Bird Countdown</p>
                <div className="flex space-x-3 mt-2">
                    <FlipClockCountdown
                        digitBlockStyle={{
                            background: '#1BAA76',
                            width: '1.5rem',
                            height: '1.5rem',
                            fontSize: '.8rem',
                            marginRight: '.1rem',
                        }}
                        separatorStyle={{ margin: 0, padding: 0 }}
                        renderOnServer={false}
                        duration={0.7}
                        showLabels={false}
                        to={targetDate}  
                    />                </div>
            </div>
            <div className="flex items-center">
                <div className="text-center mr-6">
                    <p className="text-l font-semibold">Standard Price</p>
                    <p className="text-3xl font-bold">₦60,000</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="text-center mr-6">
                    <p className="text-l font-semibold">Early Bird</p>
                    <p className="text-3xl font-bold">₦50,000</p>
                </div>

            </div>
            <div className="">
            <ArrowRight  size={40} />

            </div>
            <div className="flex items-center">

                <button className="bg-orange-500 text-white py-2 px-6 rounded-full font-bold hover:bg-orange-600">
                    I want a stall
                </button>
            </div>
        </div>
    );
};

export default Countdown;
