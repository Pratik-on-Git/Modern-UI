import React from 'react';
import { FiSearch, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import PillButton from '../buttons/PillButton';
import getButtonStyling from '../buttons/getButtonStyling';

const ResultsSection = () => {
  return (
    <section className=" px-2 py-16">
      <div className="max-w-[90rem] mx-auto">
        {/* SVG defs for reusable clip-paths */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="roundedNotchClip" clipPathUnits="objectBoundingBox">
              <path d=" M0.05 0 
                        H0.86  
                        Q0.90 0.0 0.90 0.04
                        V0.16 
                        Q0.90 0.20 0.94 0.20
                        H1 
                        V0.96
                        Q1 1 0.96 1 
                        H0.04 
                        Q0 1 0 0.96 
                        V0.04 
                        Q0 0 0.04 0 
                        Z" />
            </clipPath>
            <clipPath id="card4Clip" clipPathUnits="objectBoundingBox">
              <path transform="scale(0.0007835)" d="M638.197 1276.39H0C0 926.373 288.176 638.197 638.197 638.197C988.218 638.197 1276.39 926.373 1276.39 1276.39H638.197ZM0 0C0 350.021 288.176 638.197 638.197 638.197C988.218 638.197 1276.39 350.021 1276.39 0H0Z" />
            </clipPath>
          </defs>
        </svg>
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-medium text-black mb-4">
            We work for you,<br/>not for the marketplace
          </h2>
          <p className="text-xl text-black">
            Our approach and the results we have achieved
          </p>
        </div>

        {/* Cards Grid - 5x5 Layout */}
        <div className="grid grid-cols-5 grid-rows-5 gap-4 h-[600px]">
          
          {/* Card 1: Top Left Blue Gradient Card (2x2) - Custom SVG Shape */}
          <div className="col-span-2 row-span-2 relative">
            <div className="relative overflow-hidden h-full">
              {/* Custom SVG background using provided path */}
              <svg
                viewBox="0 0 536 246"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
                style={{ zIndex: 1 }}
              >
                <defs>
                  <radialGradient id="card1Gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#352ce8" />
                  </radialGradient>
                </defs>
                <path
                  d="M435.382 0.878197C448.94 0.878197 457.567 18.6422 457.5 32.2003C457.458 40.7872 460.437 50.055 469.5 58.5C481.607 69.7813 496.183 70.9456 508.579 68.7975C521.04 66.6382 535.781 75.1018 535.781 87.7484V152.372V230C535.781 238.837 528.617 246 519.781 246H395.5H166H16C7.16344 246 0 238.837 0 230V152.372V16.8782C0 8.04163 7.16344 0.878197 16 0.878197H308.802H435.382Z"
                  fill="url(#card1Gradient)"
                />
              </svg>

              {/* Content on top of SVG */}
              <div className="absolute left-0 right-0 bottom-0 flex justify-between items-end h-auto p-8 pb-7 z-10">
                <div className="text-white max-w-md mb-2 font-light">
                  <p className="text-lg leading-relaxed">Reduced the CPM rate and<br/>secured a position in the top<br/>for hundreds of queries</p>
                </div>
                <div className="text-white text-right mb-2">
                  <p className="text-4xl font-normal">The rate is<br/><span className="font-normal">2.8 lower</span></p>
                </div>
              </div>
            </div>
            {/* Circular Search Icon */}
            <div className="absolute -top-2 -right-[-10px] w-15 h-15 bg-[#f3f3f3] rounded-full flex items-center justify-center shadow-lg z-20">
              <FiSearch className="w-6 h-6 text-black" />
            </div>
          </div>

          {/* Card 2: Bottom Left Light Purple Card (2x3) */}
          <div className="col-span-2 row-span-3 col-start-1 row-start-3 relative">
            <div className="relative bg-gradient-to-r from-purple-100 to-white rounded-2xl p-6 h-full overflow-hidden">
              {/* Background Pattern - Wavy Lines */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,20 Q25,10 50,20 T100,20 L100,80 Q75,90 50,80 T0,80 Z" fill="url(#purpleGradient)" />
                  <path d="M0,30 Q30,15 60,30 T100,30 L100,70 Q70,85 40,70 T0,70 Z" fill="url(#purpleGradient2)" />
                  <defs>
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E9D5FF" />
                      <stop offset="100%" stopColor="#F3E8FF" />
                    </linearGradient>
                    <linearGradient id="purpleGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DDD6FE" />
                      <stop offset="100%" stopColor="#E9D5FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="text-black">
                  <p className="text-sm leading-relaxed">experts prepared a card for promotion and launched an auto campaign through Advertising Management</p>
                </div>
                <div className="text-black text-right">
                  <p className="text-2xl font-bold">orders x4</p>
                </div>
              </div>
              
              {/* Arrow Icon */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                <FiArrowRight className="w-5 h-5 text-black" />
              </div>
            </div>
          </div>

          {/* Card 3: Middle Right Light Purple Card (1x5) */}
          <div className="row-span-5 col-start-3 row-start-1">
            <div className="relative bg-gradient-to-br from-[#F3f3f3] to-[#E0DEFF] rounded-2xl p-6 h-full overflow-hidden">
              {/* Background Pattern - Concentric Circles */}
              <div className="absolute inset-0 opacity-8">
                <div className="absolute bottom-[50%] right-4 w-100 h-100 border-2 border-[#352ce8] rounded-full"></div>
                <div className="absolute bottom-[60%] right-8 w-80 h-80 border-2 border-[#352ce8] rounded-full"></div>
                <div className="absolute bottom-[70%] right-12 w-60 h-60 border-2 border-[#352ce8] rounded-full"></div>
                <div className="absolute bottom-[80%] right-16 w-40 h-40 border-2 border-[#352ce8] rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <button
                    className={getButtonStyling('learn-more')}
                    type="button"
                    onClick={() => console.log("Our Approach Clicked")}
                  >
                    Our Approach <FiArrowUpRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </div>
                <div className="text-black">
                  <p className="font-medium text-3xl leading-relaxed">Individual Approach to Each Product for the Greatest Benefit for you</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Far Right Video Background (2x5) */}
          <div className="col-span-2 row-span-5 col-start-4 row-start-1">
            <div className="relative rounded-2xl overflow-hidden h-full">
              {/* Clipped video background */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                style={{ clipPath: 'url(#card4Clip)' }}
                src="/video/10994870-hd_1080_1920_25fps.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
