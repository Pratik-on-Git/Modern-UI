import React, { useState } from 'react';
import { ModernFadeIn, ModernSlideIn } from '../animations';
import { FiHeart, FiArrowUpRight } from 'react-icons/fi';
import PillButton from '../buttons/PillButton';
import getButtonStyling from '../buttons/getButtonStyling';

const JoinCommunity = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="w-full px-6">
      <div>
        <div className="rounded-3xl p-8 lg:p-16 overflow-hidden relative">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-100"
            >
              <source src="https://cdn.pixabay.com/video/2016/09/06/4967-181688483_large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-[#352ce8]/90 to-[#fff]/95"></div>
          </div>
          <ModernFadeIn delay={0.8}>
              {/* User avatars */}
                <div className="flex justify-end -space-x-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-full border-2 border-white"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-gray-700">
                    +
                  </div>
                  <div className="text-white text-5xl font-medium pl-4">100+</div>
                  <div className="flex flex-col">
                    <div className="text-white text-l font-medium pl-3 text-end">Users</div>
                    <div className="text-white text-l font-medium pl-3 text-end">Joined</div>
                  </div>
                </div>
            </ModernFadeIn>
          <div className="flex flex-row gap-12 justify-between items-end">
            {/* Left Side - Text and Form */}
            <div className="text-white">
              <ModernFadeIn delay={0.2}>
                <h2 className="text-4xl lg:text-6xl font-normal mb-6 leading-tight">
                  Join Our<br/>Community
                </h2>
              </ModernFadeIn>

              <ModernFadeIn delay={0.4}>
                <p className="text-lg mb-8 leading-relaxed opacity-90 max-w-lg">
                  Be the first to receive notifications about updates, improvements and promotion tips.
                  <br />
                  Once a month we give away a subscription to a free month of promotion among our subscribers.
                </p>
              </ModernFadeIn>

              <ModernSlideIn delay={0.6} direction="up">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="text-md w-full px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/15 transition-all duration-200 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="text-md w-full px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/15 transition-all duration-200 backdrop-blur-sm"
                    />
                  </div>

                  <PillButton
                    text="Join Community"
                    icon={<FiHeart className="w-4 h-4" />}
                    onClickHandler={() => {}}
                    className="w-full lg:w-[230px] h-[62px] text-lg font-medium"
                  />
                </form>
              </ModernSlideIn>
            </div>

            {/* Right Side - Visual and Stats */}
            
            <div className="flex flex-col items-center lg:items-end">
            <button
              className={getButtonStyling('learn-more') + " z-10"}
              type="button"
              onClick={() => console.log("Our Approach Clicked")}
            >
              Learn More About Company <FiArrowUpRight className="inline-block ml-2 w-4 h-4" />
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
