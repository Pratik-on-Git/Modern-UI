
import { FiSearch, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import getButtonStyling from '../buttons/getButtonStyling';
import AnimatedGradientSVG from '../animations/AnimatedGradientSVG';
import { ModernSlideIn, ModernFadeIn } from '../animations';

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
          <ModernFadeIn delay={0.4}>
          <h2 className="text-5xl lg:text-6xl font-medium text-black mb-4">
            We work for you,<br/>not for the marketplace
          </h2>
          <p className="text-xl text-black">
            Our approach and the results we have achieved
          </p>
          </ModernFadeIn>
        </div>

        {/* Cards Grid - 5x5 Layout */}
        <div className="grid grid-cols-5 grid-rows-5 gap-4 h-[600px]">
          
          {/* Card 1: Top Left Blue Gradient Card (2x2) - Custom SVG Shape */}
          <ModernSlideIn direction="left" className="col-span-2 row-span-2 relative">
            <div className="relative overflow-hidden h-full">
              {/* Animated gradient background using AnimatedGradientSVG */}
              <AnimatedGradientSVG gradientId="card1Gradient" colors={["#000000", "#352ce8"]} duration={3}>
                <path
                  d="M435.382 0.878197C448.94 0.878197 457.567 18.6422 457.5 32.2003C457.458 40.7872 460.437 50.055 469.5 58.5C481.607 69.7813 496.183 70.9456 508.579 68.7975C521.04 66.6382 535.781 75.1018 535.781 87.7484V152.372V230C535.781 238.837 528.617 246 519.781 246H395.5H166H16C7.16344 246 0 238.837 0 230V152.372V16.8782C0 8.04163 7.16344 0.878197 16 0.878197H308.802H435.382Z"
                  fill="url(#card1Gradient)"
                />
              </AnimatedGradientSVG>

              {/* Content on top of SVG */}
              <div className="absolute left-0 right-0 bottom-0 flex justify-between items-end h-auto p-8 pb-7 z-10">
                <ModernFadeIn delay={0.1} className="text-white max-w-md mb-2 font-light">
                  <p className="text-lg leading-relaxed">Reduced the CPM rate and<br/>secured a position in the top<br/>for hundreds of queries</p>
                </ModernFadeIn>
                <ModernFadeIn delay={0.2} className="text-white text-right mb-2">
                  <p className="text-4xl font-normal">The rate is<br/><span className="font-normal">2.8 lower</span></p>
                </ModernFadeIn>
              </div>
            </div>
            {/* Circular Search Icon */}
            <div className="absolute -top-2 -right-[-10px] w-15 h-15 bg-[#f3f3f3] rounded-full flex items-center justify-center shadow-lg z-20">
              <FiSearch className="w-6 h-6 text-black" />
            </div>
          </ModernSlideIn>

          {/* Card 2: Bottom Left Light Purple Card (2x3) */}
          <ModernSlideIn direction="right" className="col-span-2 row-span-3 col-start-1 row-start-3 relative">
            <div className="relative rounded-2xl overflow-hidden h-full">
              {/* Gradient background */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#f8e5ff] to-[#e0deff]" />

              {/* Logo PNG background, top right, low opacity */}
              <img
                src="/logo/Icon-107.png"
                alt="Logo background"
                className="absolute right-50 w-128 h-128 object-contain opacity-5 z-10 pointer-events-none select-none"
                draggable="false"
              />

              {/* Arrow Icon - Top Right */}
              <div className="absolute top-6 right-6 w-15 h-15 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                <FiArrowRight className="w-6 h-6 text-black" />
              </div>

              {/* Content at bottom */}
              <div className="absolute left-0 right-0 bottom-0 flex justify-between items-end h-auto p-8 pb-7 z-20">
                <ModernFadeIn delay={0.1} className="text-black max-w-md mb-2 font-light">
                  <p className="text-2xl leading-relaxed">Experts prepared a card for<br/>promotion and launched an auto campaign<br/> through Advertising Management</p>
                </ModernFadeIn>
                <ModernFadeIn delay={0.2} className="text-black text-right mb-2">
                  <p className="text-5xl font-medium">Orders<br/><span className="font-medium">x4</span></p>
                </ModernFadeIn>
              </div>
            </div>
          </ModernSlideIn>

          {/* Card 3: Middle Right Light Purple Card (1x5) */}
          <ModernSlideIn direction="up" delay={0.5} className="row-span-5 col-start-3 row-start-1">
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
          </ModernSlideIn>

          {/* Card 4: Far Right Video Background (2x5) */}
          <ModernSlideIn direction="right" delay={0.5} className="col-span-2 row-span-5 col-start-4 row-start-1">
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
          </ModernSlideIn>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
