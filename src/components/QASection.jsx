import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import QuoteSign from '../assets/quote-sign.png';
import Arrows from '../assets/arrows.png';
const QASection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What is SME Unwind?",
      answer: "SMEsUnwind is a purposefully curated event designed to bring business owners and brands together to sell, connect, network, and have fun."
    },
    { question: "When and where is the event?", answer: "Details about date and location" },
    { question: "What does my payment cover?", answer: "Information about what the payment includes" },
    { question: "What can I expect at the event?", answer: "Description of event activities and experiences" },
    { question: "Who can attend SMEUnwind", answer: "Eligibility criteria for attendees" },
    { question: "How can I participate as a vendor", answer: "Steps to participate as a vendor" },
    { question: "Can I register as a vendor at the venue", answer: "Information about on-site vendor registration" },
    { question: "How can I register", answer: "Registration process details" },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-wrap p-5 pb-[6rem] md:p-[10rem] relative">
      <img src={QuoteSign} alt="Quote" className="absolute top-8 left-8 w-20 h-20  md:w-24 md:h-24" />
      <img src={Arrows} alt="Arrows" className="absolute hidden md:block top-40 left-12 w-16" />
      <img src={Arrows} alt="Arrows" className="absolute  bottom-8 right-8 w-6 md:w-16" />
      
      <div className="md:w-1/3 pr-8 pt-32">
        <h1 className="text-5xl font-bold mb-4 wineFont" >Got Questions?</h1>
        <h2 className="text-4xl font-bold mb-8 wineFont">We've Got Answers</h2>
      </div>
      
      <div className="md:w-2/3">
        {faqData.map((item, index) => (
          <div key={index} className="mb-4 overflow-hidden">
            <button
              className={`w-full text-left p-4 flex justify-between items-center transition-colors duration-300 ${
                index === openIndex ? 'bg-[#8B4513] text-white' : 'bg-black border border-white hover:bg-gray-900'
              }`}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            >
              <span className="text-lg font-semibold">{item.question}</span>
              <ChevronDown 
                className={`transform transition-transform duration-300 ${index === openIndex ? 'rotate-180' : ''}`} 
              />
            </button>
            <div 
              className={`bg-[#8B4513] overflow-hidden transition-all duration-300 ease-in-out ${
                index === openIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="p-4">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QASection;