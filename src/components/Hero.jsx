import Button from './buttons/button'
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white px-8 py-8">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Section - Text and Buttons */}
          <div className="space-y-8">
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-[4.2rem] font-medium text-black leading-tight">
              Maximum profit <br />from advertising<br />on marketplaces
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
              We help raise products to the top using<br />
              smart management and analytics
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                text="Learn more" 
                styletype="secondary"
                onClickHandler={() => console.log("Learn more clicked")}
              />
              <Button 
                text="Start for free" 
                styletype="start-free"
                icon={<FiArrowUpRight className="w-4 h-4" />}
                onClickHandler={() => console.log("Start for free clicked")}
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
              
              {/* Text Overlay - Top Right */}
              <div className="absolute top-6 right-6 text-white">
                <div className="text-right flex">
                  <div className="text-5xl font-medium">100K+</div>
                  <div className="text-[1rem] font-medium text-left">Users<br />Joined</div>
                </div>
              </div>
              
              {/* Button Overlay - Bottom Right */}
              <div className="absolute bottom-6 right-6">
                <Button 
                  text="About company" 
                  styletype="about-company"
                  icon={<FiArrowRight className="w-3 h-3" />}
                  onClickHandler={() => console.log("About company clicked")}
                />
              </div>
            </div>

            {/* Statistics Section */}
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="flex justify-between">
                
                {/* First Statistic */}
                <div className="text-left">
                  <div className="text-4xl lg:text-5xl font-medium text-black mb-2">85%</div>
                  <div className="text-black text-[1.2rem]">earn in the<br />first month</div>
                </div>
                
                {/* Second Statistic */}
                <div className="text-left">
                  <div className="text-4xl lg:text-5xl font-medium text-black mb-2">120K</div>
                  <div className="text-black text-[1.2rem]">average profit<br />per month</div>
                </div>
                
                {/* Third Statistic */}
                <div className="text-left">
                  <div className="text-4xl lg:text-5xl font-medium text-black mb-2">5%</div>
                  <div className="text-black text-[1.2rem]">sales decline after<br />six months</div>
                </div>
                
              </div>
            </div>
            
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
