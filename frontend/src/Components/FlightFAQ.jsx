import { useState } from "react";
import pilotImage from '../assets/pilot.jpg'

const faqs = [
  {
    question: "Pre-Book Your Baggage Donating a Small",
    answer: "You can pre-book your baggage by logging into your account and selecting baggage options under manage booking."
  },
  {
    question: "Search and Save on Cheap Car Rentals",
    answer: "We’ve partnered with top car rental services. You can save more by booking early with our deals."
  },
  {
    question: "Leave it to us when it comes to finding you",
    answer: "Our crew ensures you are always accounted for — from check-in to landing."
  }
];

const FlightFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
      {/* Left: FAQ */}
      <div>
        <h4 className="text-yellow-500 font-semibold uppercase text-sm mb-2">Asked Questions</h4>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Flight Asked Questions</h2>
        <p className="text-gray-500 mb-8 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit in imperdiet interdum imperdiet ipsum.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 border-4 border-gray-300 rounded-full block" />
                  <span className="font-semibold text-purple-900">{faq.question}</span>
                </div>
                <span className="text-xl font-bold text-purple-900">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Image */}
      <div className="relative">
        <img
          src={pilotImage} // Replace with correct image path
          alt="Flight Crew"
          className="rounded-md shadow-lg relative z-10"
        />
        <div className="absolute top-4 right-4 bottom-4 left-4 border-4 border-yellow-400 z-0 rounded-md"></div>
      </div>
    </section>
  );
};

export default FlightFAQ;
