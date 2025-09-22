import React from 'react';
import { FiSearch, FiArrowRight } from 'react-icons/fi';

const ResultsSection = () => {
  return (
    <section className=" px-8 py-16">
      <div className="max-w-[90rem] mx-auto">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-medium text-black mb-4">
            We work for you,<br/>not for the marketplace
          </h2>
          <p className="text-xl text-black">
            Our approach and the results we have achieved
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Top Left Blue Card with Clip-path Effect */}
          <div className="lg:col-span-2 lg:row-span-1 relative">
            <div 
              className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 rounded-2xl p-8 h-48 overflow-hidden"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)'
              }}
            >
              {/* Background Pattern - Concentric Arcs */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-6 right-12 w-20 h-20 border-2 border-blue-300 rounded-full"></div>
                <div className="absolute top-10 right-16 w-16 h-16 border-2 border-blue-300 rounded-full"></div>
                <div className="absolute top-14 right-20 w-12 h-12 border-2 border-blue-300 rounded-full"></div>
                <div className="absolute top-18 right-24 w-8 h-8 border-2 border-blue-300 rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex justify-between items-center h-full">
                <div className="text-white max-w-md">
                  <p className="text-sm leading-relaxed">reduced the CPM rate and secured a position in the top for hundreds of queries</p>
                </div>
                <div className="text-white text-right">
                  <p className="text-3xl font-bold">the rate is 2.8 lower</p>
                </div>
              </div>
            </div>
            
            {/* Circular Search Icon with Clip-path Effect */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
              <FiSearch className="w-6 h-6 text-black" />
            </div>
          </div>

          {/* Bottom Left Light Purple Card */}
          <div className="lg:col-span-1 lg:row-span-1 relative">
            <div className="relative bg-gradient-to-r from-purple-100 to-white rounded-2xl p-6 h-48 overflow-hidden">
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

          {/* Middle Right Light Purple Card */}
          <div className="lg:col-span-1 lg:row-span-1">
            <div className="relative bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 h-48 overflow-hidden">
              {/* Background Pattern - Concentric Circles */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute bottom-4 right-4 w-20 h-20 border-2 border-purple-200 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-purple-200 rounded-full"></div>
                <div className="absolute bottom-12 right-12 w-12 h-12 border-2 border-purple-200 rounded-full"></div>
                <div className="absolute bottom-16 right-16 w-8 h-8 border-2 border-purple-200 rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <button className="bg-purple-100 border border-purple-300 rounded-lg px-4 py-2 text-sm text-black mb-4 hover:bg-purple-200 transition-colors">
                    Our approach →
                  </button>
                </div>
                <div className="text-black">
                  <p className="text-base leading-relaxed">Individual approach to each product for the greatest benefit for you</p>
                </div>
              </div>
            </div>
          </div>

          {/* Far Right 3D Image Card */}
          <div className="lg:col-span-1 lg:row-span-2">
            <div className="relative bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 rounded-2xl p-6 h-full overflow-hidden">
              {/* Background 3D Pattern - Flowing Organic Shapes */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 200 300" preserveAspectRatio="none">
                  <path d="M0,50 Q50,30 100,50 T200,50 L200,150 Q150,130 100,150 T0,150 Z" fill="url(#flowGradient)" />
                  <path d="M0,100 Q75,80 150,100 T200,100 L200,200 Q125,180 50,200 T0,200 Z" fill="url(#flowGradient2)" />
                  <path d="M0,150 Q60,130 120,150 T200,150 L200,250 Q140,230 80,250 T0,250 Z" fill="url(#flowGradient3)" />
                  <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A78BFA" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                    <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C4B5FD" />
                      <stop offset="100%" stopColor="#A78BFA" />
                    </linearGradient>
                    <linearGradient id="flowGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DDD6FE" />
                      <stop offset="100%" stopColor="#C4B5FD" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* 3D Figure - Metallic Reflective Person */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="relative">
                  {/* Main 3D Figure */}
                  <div className="w-40 h-40 relative">
                    {/* Reflective Surface */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-blue-400 to-green-400 rounded-full shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-700">
                      {/* Metallic Reflections */}
                      <div className="absolute inset-2 bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 rounded-full opacity-80"></div>
                      <div className="absolute inset-4 bg-gradient-to-br from-purple-600 via-blue-600 to-green-600 rounded-full opacity-60"></div>
                      <div className="absolute inset-6 bg-gradient-to-br from-purple-700 via-blue-700 to-green-700 rounded-full opacity-40"></div>
                      
                      {/* Highlight */}
                      <div className="absolute top-2 left-2 w-8 h-8 bg-white/30 rounded-full blur-sm"></div>
                      <div className="absolute top-4 left-4 w-4 h-4 bg-white/50 rounded-full blur-sm"></div>
                    </div>
                    
                    {/* Person Silhouette */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-20 bg-gradient-to-br from-purple-800 via-blue-800 to-green-800 rounded-full relative">
                        {/* Head */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-800 via-blue-800 to-green-800 rounded-full"></div>
                        {/* Arms */}
                        <div className="absolute top-2 -left-1 w-3 h-8 bg-gradient-to-br from-purple-800 via-blue-800 to-green-800 rounded-full transform -rotate-12"></div>
                        <div className="absolute top-2 -right-1 w-3 h-8 bg-gradient-to-br from-purple-800 via-blue-800 to-green-800 rounded-full transform rotate-12"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-gradient-to-br from-blue-400 to-green-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
