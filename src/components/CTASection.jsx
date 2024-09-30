import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-[#E5E7E6] mb-[4rem] relative overflow-hidden md:rounded-br-full">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-5xl font-bold mb-4">Want to partner with us?</h2>
        <p className="text-xl mb-8 max-w-2xl">
          Join us in making SMEUnwind a success! Partner with us to showcase your brand,
          connect with thousands of business owners, and be part of an unforgettable
          experience.
        </p>
        <a href='https://wa.me/2349049027698' className="bg-[#F26B3A] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#D85A2A] transition-colors duration-300">
          Contact Us
        </a>
      </div>
      <div className="absolute right-[-4rem] top-[-2rem] w-1/4 h-[10rem] bg-[#FF4D0080] transform rotate-90 rounded-tr-full"></div>
      <div className="absolute right-0 bottom-0 flex flex-col items-end">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-3 h-3 bg-green-500 transform rotate-45 mb-2 mr-2"></div>
        ))}
      </div>
    </div>
  );
};

export default CTASection;