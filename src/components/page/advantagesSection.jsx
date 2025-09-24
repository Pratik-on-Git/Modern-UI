import React from "react";
import { motion } from "framer-motion";
import PillButton from "../buttons/PillButton";
import { FiArrowUpRight } from "react-icons/fi";
import getButtonStyling from "../buttons/getButtonStyling";
import { AdvantagesReveal, AdvantagesItem, AdvantagesCircle } from "../animations";
import withoutUs from "../subcomponents/withoutUsData";
import withUs from "../subcomponents/withUsData";

const tagsLeft = ["For a long time", "To no avail", "Expensive"];
const tagsRight = ["Fast", "Maximum benefit", "Available"];

const Tag = ({ children, type = 'grey-white' }) => (
  <button className={`${getButtonStyling(type)} text-sm mr-3 mb-2`}>
    {children}
  </button>
);

const Card = ({ icon, title, desc, crossed, diamond }) => (
  <div className={`flex items-center bg-[#f8f8f8] rounded-[24px] px-5 py-4 mb-6 shadow-sm`}>
    <div className="w-15 h-15 flex items-center justify-center bg-[#ededed] rounded-full mr-5">
      {icon}
    </div>
    <div className="flex-1">
      <div className="flex items-center">
        <span className={`text-black text-xl font-medium`}>{title}</span>
        {crossed && (
          <span className="ml-2 text-[#bdbdbd] text-xl font-bold select-none">×</span>
        )}
        {diamond && (
          <span className="ml-2 text-[#bdbdbd] text-xl font-bold select-none">◆</span>
        )}
      </div>
      <div className="text-[#bdbdbd] text-base font-normal">{desc}</div>
    </div>
  </div>
);

const AdvantagesSection = () => (
  <section className="w-full min-h-screen flex flex-col justify-center items-center bg-linear-65 from-[#f3f3f3] via-[#e0deff] to-[#fff] py-14 relative rounded-[32px]">
    <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center">
      <div className="flex w-full gap-16 justify-center">
        {/* Left */}
        <AdvantagesReveal className="flex-1 bg-white rounded-[32px] shadow-lg p-8 flex flex-col items-start min-w-[35vw] relative overflow-hidden" variant="left">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <AdvantagesItem className="w-full" variant="left" custom={0}>
            <div className="flex flex-wrap mb-3">
              {tagsLeft.map((tag, i) => (
                <motion.div 
                  key={tag}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      delay: 0.1 + (i * 0.1),
                      type: 'spring',
                      damping: 15
                    }
                  }}
                >
                  <Tag type="grey-white">{tag}</Tag>
                </motion.div>
              ))}
            </div>
          </AdvantagesItem>
          
          <AdvantagesItem variant="left" custom={1}>
            <h2 className="text-black text-5xl font-normal mb-6 w-full text-left">
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    delay: 0.3,
                    type: 'spring',
                    damping: 15
                  }
                }}
              >
                <span className="line-through decoration-4 decoration-[#000]">Without us</span>
              </motion.span>
            </h2>
          </AdvantagesItem>
          
          <div className="w-full space-y-4">
            {withoutUs.map((item, i) => (
              <AdvantagesItem key={i} variant="left" custom={i * 0.2 + 0.4}>
                <Card
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  crossed
                />
              </AdvantagesItem>
            ))}
          </div>
        </AdvantagesReveal>
        {/* Right */}
        <AdvantagesReveal className="flex-1 bg-gradient-to-br from-[#352ce8] to-[#847efc] rounded-[32px] shadow-lg p-8 pb-10 flex flex-col items-start min-w-[35vw] relative overflow-hidden">
          {/* Animated Circular Pattern Background */}
          <div className="absolute inset-0 opacity-30">
            <AdvantagesCircle className="top-0 -right-0 w-120 h-120" index={0} />
            <AdvantagesCircle className="top-1/18 -right-[-35px] w-100 h-100" index={1} />
            <AdvantagesCircle className="top-2/18 -right-[-70px] w-80 h-80" index={2} />
            <AdvantagesCircle className="top-3/18 -right-[-105px] w-60 h-60" index={3} />
            <AdvantagesCircle className="top-4/18 -right-[-140px] w-40 h-40" index={4} />
          </div>
          <AdvantagesItem className="w-full">
            <div className="flex flex-wrap mb-3">
              {tagsRight.map((tag) => (
                <Tag key={tag} type="blue-white">{tag}</Tag>
              ))}
            </div>
          </AdvantagesItem>
          
          <AdvantagesItem>
            <h2 className="text-white text-5xl font-normal mb-6 w-full">With us</h2>
          </AdvantagesItem>
          
          <div className="w-full space-y-6">
            {withUs.map((item, i) => (
              <AdvantagesItem key={i}>
                <div className="flex items-center bg-white/80 rounded-[24px] px-6 py-4 shadow-sm">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#ededed] rounded-full mr-5">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="text-black text-xl font-medium">{item.title}</span>
                      <span className="ml-2 text-[#352ce8] text-xl font-bold select-none">◆</span>
                    </div>
                    <div className="text-[#7d7d7d] text-base font-normal mt-1">{item.desc}</div>
                  </div>
                </div>
              </AdvantagesItem>
            ))}
          </div>
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-[32px] pointer-events-none border-4 border-transparent" style={{
            boxShadow: "0 0 0 4px rgba(53,44,232,0.12) inset"
          }} />
        </AdvantagesReveal>
      </div>
      {/* Button */}
      <div className="mt-10">
        <PillButton
          text="Start for free"
          icon={<FiArrowUpRight className="w-5 h-5" />}
          onClickHandler={() => {}}
          className="w-[220px] h-[56px] text-lg font-medium"
        />
      </div>
    </div>
  </section>
);

export default AdvantagesSection;