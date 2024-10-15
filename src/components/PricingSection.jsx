import React from 'react';
import redstar from '../assets/redstar.png'
const PricingPlan = () => {
    return (
        <div className="bg-[#e8f1f1] p-4 sm:p-[3rem] relative font-sans pb-[5rem]">
            <h1 className="text-5xl font-bold wineFont  font-bold mb-6 sm:mb-[5rem] text-center">Pricing Plan</h1>

            <img
                src={redstar}
                alt="Star"
                className="absolute top-4 right-[30%] w-6 h-6 sm:w-[4rem] sm:h-[4rem]"
            />

            <div className="flex flex-wrap md:flex-nowrap   md:px-[10rem] space-y-5 md:space-y-0 md:space-x-[5rem] pb-[3rem]">
                <PlanCard
                    title="Basic Plan"
                    price="N100,000"
                    features={[
                        "Canopy Stand (with branded logo)",
                        "One Table",
                        "Two Chairs"
                    ]}
                    link="https://docs.google.com/forms/d/e/1FAIpQLSeb48uKYKLdO9ImUIMylPRDj6PT9hnn7vCXYJrfbaII2bAu5g/viewform"
                />
                <PlanCard
                    title="Premium Plan"
                    price="N450,000"
                    features={[
                        "Premium Stand (with branded logo)",
                        "One Table",
                        "Two Chairs"
                    ]}
                    link="https://forms.gle/uTPovbFbBZHh2f4T7"
                />
            </div>
        </div>
    );
};

const PlanCard = ({ title, price, features,link }) => {
    return (
        <div className="bg-white rounded-2xl p-6 w-full w-full flex shadow-lg transition-all justify-between duration-300 hover:shadow-xl">
            <div className="">
                <h2 className="text-2xl mb-[2rem]">{title}</h2>
                <ul className="mb-6 space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="">
                <p className="text-3xl font-bold mb-6">{price}</p>

                <a href={link} target='_blank' className="block text-center font-bold w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
                    I want a stall
                </a>
            </div>
        </div>
    );
};

export default PricingPlan;