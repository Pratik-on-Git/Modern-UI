import React from 'react';
import { BasicRevealText, ModernFadeIn, ModernSlideIn } from '../animations';
import PillButton from '../buttons/PillButton';
import { FiArrowUpRight } from 'react-icons/fi';
import { useState, useMemo } from 'react';

// SVG background as a separate component for reuse
const CardBgClip = ({ color, children }) => {
  // State to track hover
  const [isHovered, setIsHovered] = useState(false);
  // Generate a unique ID for each pattern to avoid conflicts
  const patternId = useMemo(() => `logo-pattern-${Math.random().toString(36).substr(2, 9)}`, []);

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        viewBox="0 0 495 300"
        width="100%"
        height="100%"
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
        style={{ zIndex: 0 }}
      >
        {/* Background path with the main color */}
        <path
          d="M0 75C0 68.6487 5.14873 63.5 11.5 63.5H115H210C221.046 63.5 230 54.5457 230 43.5V20C230 8.95431 238.954 0 250 0H345H440C451.046 0 460 8.95431 460 20V75V150V225V227C460 238.046 451.046 247 440 247H307.5C296.454 247 287.5 255.954 287.5 267V280C287.5 291.046 278.546 300 267.5 300H230H115H20C8.95431 300 0 291.046 0 280V225V150V75Z"
          fill={color}
          className="transition-all duration-300"
        />
        {/* Logo background with blur effect */}
        <defs>
          <pattern id={patternId} x="0" y="0" width="1" height="1" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <image 
              href="/logo/Icon-107.png" 
              x="0" 
              y="0" 
              width="100" 
              height="100" 
              opacity="0.1"
              className="transition-all duration-500 ease-out"
              style={{
                filter: isHovered ? 'blur(0px)' : 'blur(2px)',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)'
              }}
            />
          </pattern>
        </defs>
        <path
          d="M0 75C0 68.6487 5.14873 63.5 11.5 63.5H115H210C221.046 63.5 230 54.5457 230 43.5V20C230 8.95431 238.954 0 250 0H345H440C451.046 0 460 8.95431 460 20V75V150V225V227C460 238.046 451.046 247 440 247H307.5C296.454 247 287.5 255.954 287.5 267V280C287.5 291.046 278.546 300 267.5 300H230H115H20C8.95431 300 0 291.046 0 280V225V150V75Z"
          fill={`url(#${patternId})`}
          className="transition-all duration-500"
        />
      </svg>
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

const Tarrif = () => {
  return (
    <section className="py-16 bg-white">
      <ModernFadeIn delay={0.2}>
        <h2 className="text-5xl text-center lg:text-6xl font-medium text-black mb-4">
            Tariff Plans
        </h2>
        <p className="text-xl text-black text-center mb-16">
            You can choose a tariff that suits your business
        </p>
      </ModernFadeIn>
      <div className="flex flex-row justify-between space-between">
        {/* Left Card */}
        <ModernSlideIn delay={0.2}>
        <div className="flex-1 rounded-[40px]">
          <CardBgClip color="#eceaff">
            <div className="px-6 py-4 flex flex-col justify-center">
              <div>
                <div className="flex items-center mb-10 mt-2">
                  <BasicRevealText delay={0.3}>
                  <span className="text-[2.5rem] font-medium leading-none text-black mr-2">Advertising</span>
                  <span className="rounded-full border border-black px-2 py-0 text-[2.2rem] font-medium bg-transparent">10%</span>
                  </BasicRevealText>
                </div>
                <BasicRevealText delay={0.5}>
                <p className="text-[#757575] text-[1.1rem] mb-7 max-w-[90%]">
                  If you don't know your budget yet. Full access to “Advertising Management”: automatic control of bids and impressions.
                </p>
                </BasicRevealText>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center text-base text-[#757575]">
                    <span className="w-5 h-5 rounded-full border border-[#bcbcbc] flex items-center justify-center mr-3 text-[#bcbcbc]">•</span>
                    <span className="font-semibold text-black">Unlimited advertising</span>
                  </li>
                  <li className="flex items-center text-base text-[#757575]">
                    <span className="w-5 h-5 rounded-full border border-[#bcbcbc] flex items-center justify-center mr-3 text-[#bcbcbc]">•</span>
                    <span className="font-semibold text-black">Pay as you use it</span>
                  </li>
                  <li className="flex items-center text-base text-[#757575]">
                    <span className="w-5 h-5 rounded-full border border-[#bcbcbc] flex items-center justify-center mr-3 text-[#bcbcbc]">•</span>
                    <span className="font-semibold text-black">Any number of stores</span>
                  </li>
                </ul>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <div className="flex items-baseline mb-4 mt-2">
                        <span className="text-4xl font-bold text-black mr-2">0₽</span>
                        <span className="text-2xl text-[#bcbcbc] line-through mr-2">10% of budget</span>
                        </div>
                        <div className="text-sm text-[#bcbcbc] mb-7">until you open an ad worth 10,000</div>
                    </div>
                    <BasicRevealText delay={0.3}>
                        <div className="flex justify-end pt-[4rem] pr-[2rem]">
                        <PillButton
                        text="Start for Free"
                        icon={<FiArrowUpRight className="w-4 h-4" />}
                        onClickHandler={() => console.log("Start for Free Clicked")}
                        className="w-[230px] h-[88px] font-medium"
                      />
                        </div>
                        </BasicRevealText>
                </div>
              </div>
              
            </div>
          </CardBgClip>
        </div>
        </ModernSlideIn>
        {/* Right Card */}
        <ModernFadeIn delay={0.2}>
        <div className="flex-1 rounded-[40px] overflow-hidden">
          <CardBgClip color="#f6eaff">
            <div className="px-6 py-4 flex flex-col h-full justify-center">
              <div>
              <div className="flex items-center mb-10 mt-2">
                <BasicRevealText delay={0.4}>
                  <span className="text-[2.5rem] font-medium leading-none text-black mr-5">Advertising</span>
                  <span className="rounded-full border border-black px-4 py-0 text-[2.2rem] font-medium bg-white/80">Fix</span>
                </BasicRevealText>
                </div>
                <BasicRevealText delay={0.5}>
                <p className="text-[#757575] text-[1.1rem] mb-7 max-w-[90%]">
                  If you know your advertising budget. Full access to “Advertising Management”: automatic control of bids and impressions.
                </p>
                </BasicRevealText>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center text-base text-[#757575]">
                    <span className="w-5 h-5 rounded-full border border-[#bcbcbc] flex items-center justify-center mr-3 text-[#bcbcbc]">•</span>
                    <span className="font-semibold text-black">Campaigns with a budget of up to RUB 1 million per month</span>
                  </li>
                  <li className="flex items-center text-base text-[#757575]">
                    <span className="w-5 h-5 rounded-full border border-[#bcbcbc] flex items-center justify-center mr-3 text-[#bcbcbc]">•</span>
                    <span className="font-semibold text-black">SEO assistant</span>
                  </li>
                  <li className="flex items-center text-base text-[#757575]">
                    <span className="w-5 h-5 rounded-full border border-[#bcbcbc] flex items-center justify-center mr-3 text-[#bcbcbc]">•</span>
                    <span className="font-semibold text-black">4 stores (API)</span>
                  </li>
                </ul>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <div className="flex items-baseline mb-4 mt-2">
                        <span className="text-4xl font-bold text-black mr-2">0₽</span>
                        <span className="text-2xl text-[#bcbcbc] line-through mr-2">20,000₽/month</span>
                        </div>
                        <div className="text-sm text-[#bcbcbc] mb-7">until you open an ad worth 10,000</div>
                    </div>
                    <BasicRevealText delay={0.4}>
                    <div className="flex justify-end pt-[4rem] pr-[2rem]">
                        <PillButton
                        text="Start for Free"
                        icon={<FiArrowUpRight className="w-4 h-4" />}
                        onClickHandler={() => console.log("Start for Free Clicked")}
                        className="w-[230px] h-[88px] font-medium"
                      />
                    </div>
                    </BasicRevealText>
                </div>
            </div>
            </div>
          </CardBgClip>
        </div>
        </ModernFadeIn>
      </div>
    </section>
  );
};

export default Tarrif;
