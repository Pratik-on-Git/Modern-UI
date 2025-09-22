import Button from '../buttons/button'
import PillButton from '../buttons/PillButton'
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { SplitTextAnimation, AnimationController } from '../animations/AnimationController';
import { MagneticText, GradientText } from '../animations/ModernTextEffects';
import { WordByWordRevealText } from '../animations/MultiLineRevealText';
import { WordMorphingText } from '../animations/WordMorphingText';

const Hero = () => {
  return (
    <section className="min-h-screen px-0 py-8">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left Section - Text and Buttons */}
          <div className="space-y-8 pl-[1rem]">
            {/* Main Headline with Advanced GSAP Animations */}
            <AnimationController trigger="onLoad" className="mb-8">
              <h1 className="text-5xl lg:text-[4.2rem] font-medium text-black leading-tight">
                <SplitTextAnimation 
                  text="Maximum Profit"
                  splitType="words"
                  animationType="stagger"
                  className="block mb-2"
                />
                <SplitTextAnimation 
                  text="from Advertising"
                  splitType="words"
                  animationType="wave"
                  className="block mb-2"
                />
                <GradientText 
                  text="on Marketplaces"
                  className="block"
                  gradientColors={['#000000', '#352ce8', '#000000']}
                  animationSpeed={6}
                />
              </h1>
            </AnimationController>
            
             {/* Description with Modern Word Morphing Effect */}
             <AnimationController trigger="onLoad" className="mb-8">
               <p className="text-xl text-black leading-relaxed max-w-lg">
                 <WordMorphingText 
                   text="We help raise products to the top using smart management and analytics"
                   morphWords={["boost", "elevate", "enhance", "optimize", "maximize", "accelerate", "improve", "transform", "revolutionize", "streamline", "refine"]}
                   morphInterval={4000}
                   fadeInDuration={2}
                   morphDuration={0.6}
                   className="block"
                 />
               </p>
             </AnimationController>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                text="Learn More" 
                styletype="learn-more"
                onClickHandler={() => console.log("Learn more clicked")}
              />
              <PillButton 
                text="Start for Free" 
                icon={<FiArrowUpRight className="w-4 h-4 " />}
                onClickHandler={() => console.log("Start for Free Clicked")}
              />
            </div>
          </div>

          {/* Right Section - Visual and Statistics */}
          <div className="space-y-6">
            
            {/* Abstract Graphic Container */}
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-96">
              
              {/* Abstract Texture Background */}
              <div className="absolute inset-0">
                <img 
                  src="/pictures/20250920_2051_Vibrant Abstract Texture_remix_01k5kvabrgesw80cghea41202q.png" 
                  alt="Abstract texture background"
                  className="w-full h-full object-cover scale-130 animate-slow-zoom"
                />
              </div>
              
              {/* Abstract 3D Pattern Overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-11 gap-0 h-full p-4">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-white/15 rounded-full backdrop-blur-sm transform rotate-90 hover:rotate-0 transition-transform duration-300"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        animation: 'float 5s ease-in-out infinite'
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Text Overlay - Top Right with Animation */}
              <div className="absolute top-6 right-6 text-white">
                <AnimationController trigger="onLoad" className="text-right flex">
                  <GradientText 
                    text="100K+"
                    className="text-5xl font-medium block"
                    gradientColors={['#fff', '#e0deff', '#fff', '#e0deff']}
                    animationSpeed={10}
                  />
                  <WordByWordRevealText 
                    text="Users<br />Joined"
                    revealType="fade"
                    className="text-white text-[1rem] font-medium block"
                    staggerDelay={0.1}
                  />
                </AnimationController>
              </div>
              
              {/* Button Overlay - Bottom Right */}
              <div className="absolute bottom-6 right-6">
                <Button 
                  text="About Company" 
                  styletype="glassmorph"
                  icon={<FiArrowRight className="w-[16px] h-[16px] rotate-315" />}
                  onClickHandler={() => console.log("About company clicked")}
                />
              </div>
            </div>

            {/* Statistics Section with Animated Numbers */}
            <AnimationController trigger="onLoad" className="bg-[#F3F3F3] rounded-2xl p-8">
              <div className="flex justify-between">
                
                {/* First Statistic */}
                <div className="text-left">
                  <MagneticText 
                    text="85%"
                    className="text-4xl lg:text-5xl font-medium text-black mb-2 block"
                    magneticStrength={0.2}
                  />
                  <WordByWordRevealText 
                    text="earn in the<br />first month"
                    revealType="fade"
                    className="text-black text-[1.2rem] block"
                    staggerDelay={0.1}
                  />
                </div>
                
                {/* Second Statistic */}
                <div className="text-left">
                  <MagneticText 
                    text="120K"
                    className="text-4xl lg:text-5xl font-medium text-black mb-2 block"
                    magneticStrength={0.2}
                  />
                  <WordByWordRevealText 
                    text="average profit<br />per month"
                    revealType="slide"
                    className="text-black text-[1.2rem] block"
                    staggerDelay={0.1}
                  />
                </div>
                
                {/* Third Statistic */}
                <div className="text-left">
                  <MagneticText 
                    text="5%"
                    className="text-4xl lg:text-5xl font-medium text-black mb-2 block"
                    magneticStrength={0.2}
                  />
                  <WordByWordRevealText 
                    text="sales decline after<br />six months"
                    revealType="scale"
                    className="text-black text-[1.2rem] block"
                    staggerDelay={0.1}
                  />
                </div>
                
              </div>
            </AnimationController>
            
          </div>
        </div>
      </div>
      
      {/* CSS Animations for floating and zoom effects */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        
        @keyframes slow-zoom {
          0% { transform: scale(1.1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1.1); }
        }
        
        .animate-slow-zoom {
          animation: slow-zoom 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero
