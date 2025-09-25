import React, { useState } from 'react';
import { ModernFadeIn, ModernSlideIn } from '../animations';

const Qna = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      number: "001",
      question: "From which marketplaces can you promote products?",
      answer: "We support advertising on major Russian marketplaces including Ozon, Wildberries, AliExpress, and Yandex Market. Our platform integrates seamlessly with these platforms to optimize your product visibility and sales performance.",
      isExternal: true
    },
    {
      number: "002",
      question: "What actions is advertising optimized for?",
      answer: "Our advertising system is optimized for various actions including product views, clicks, add-to-cart actions, and completed purchases. We use advanced algorithms to target users most likely to convert.",
      isExternal: false
    },
    {
      number: "003",
      question: "What restrictions should you be aware of when promoting goods?",
      answer: "There are several restrictions to consider: prohibited product categories, advertising content guidelines, budget limitations per campaign, and platform-specific rules for each marketplace. We ensure all campaigns comply with these restrictions.",
      isExternal: false
    },
    {
      number: "004",
      question: "How will the ad be shown?",
      answer: "Ads are displayed strategically across the marketplace platform - in search results, product category pages, competitor product pages, and through targeted recommendations based on user behavior and preferences.",
      isExternal: false
    },
    {
      number: "005",
      question: "Where can I get a store key to add to my advertising account?",
      answer: "Store keys can be obtained from your marketplace seller dashboard. For Ozon, go to Settings > API keys. For Wildberries, visit your personal account settings. We'll guide you through the process during account setup.",
      isExternal: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className=" mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col mb-16">
                  <h1 className="text-black font-medium text-6xl mb-[20px]">
                    <ModernFadeIn delay={0.1}>
                      Questions and
                    </ModernFadeIn>
                  </h1>
                  <ModernSlideIn direction="up" delay={0.1}>
                  <div className="flex items-center">
                    {/* Decorative video */}
                    <video
                      src="https://cdn.pixabay.com/video/2016/09/13/5148-183300161_large.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-[270px] h-[75px] rounded-full object-cover mr-6"
                      style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}
                    />
                    <span className="text-black font-medium text-6xl">
                      Answers
                    </span>
                  </div>
                    </ModernSlideIn>
                </div>

        {/* FAQ List */}
        <div className="space-y-0 mb-16">
          {faqData.map((item, index) => (
            <ModernFadeIn key={index} delay={0.2 + (index * 0.1)}>
              <div className="border-b last:border-b-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-6 px-0 text-left hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <div className="flex">
                    <div className="flex items-center flex-1">
                      {/* Number */}
                      <span className="text-gray-300 font-mono text-lg font-light mr-6 min-w-[4rem]">
                        {item.number}
                      </span>

                      {/* Question and subtext */}
                      <div className="flex-1">
                        <h3 className="text-3xl font-medium text-black mb-1">
                          {item.question}
                        </h3>
                        {item.subtext && (
                          <p className="text-gray-500 text-sm">
                            {item.subtext}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="ml-6">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`text-gray-400 transition-transform duration-200 ${
                          openItems[index] ? 'rotate-180' : 'group-hover:translate-x-1'
                        }`}
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                  </div>
                </button>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  openItems[index] ? 'max-h-96 opacity-100 py-5' : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-20">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ModernFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qna;
