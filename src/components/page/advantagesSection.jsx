import React from "react";
import PillButton from "../buttons/PillButton";
import { FiArrowUpRight, FiXCircle } from "react-icons/fi";
import { MdOutlineQueryStats, MdOutlineAttachMoney, MdOutlineVisibilityOff, MdOutlineSettings, MdOutlineDone, MdOutlineTrendingUp, MdOutlineAnalytics, MdOutlineAutorenew } from "react-icons/md";
import getButtonStyling from "../buttons/getButtonStyling";

const withoutUs = [
  {
    icon: <MdOutlineQueryStats className="w-8 h-8 text-[#bdbdbd]" />,
    title: "Irrelevant Queries",
    desc: "From the start, you cannot choose which phrases to advertise with.",
  },
  {
    icon: <MdOutlineAttachMoney className="w-8 h-8 text-[#bdbdbd]" />,
    title: "Overpayment for Rates",
    desc: "There is one price for all requests, although they cost differently.",
  },
  {
    icon: <MdOutlineVisibilityOff className="w-8 h-8 text-[#bdbdbd]" />,
    title: "It is not clear where the money is going",
    desc: "Analytics only for the campaign as a whole.",
  },
  {
    icon: <MdOutlineSettings className="w-8 h-8 text-[#bdbdbd]" />,
    title: "Complex Controls",
    desc: "You need to manually change the bid every time the auction changes.",
  },
];

const withUs = [
  {
    icon: <MdOutlineDone className="w-8 h-8 text-[#352ce8]" />,
    title: "Only necessary requests",
    desc: "We add negative keywords even before the start of impressions.",
  },
  {
    icon: <MdOutlineTrendingUp className="w-8 h-8 text-[#352ce8]" />,
    title: "Real rates",
    desc: "Set your own price for different boosts.",
  },
  {
    icon: <MdOutlineAnalytics className="w-8 h-8 text-[#352ce8]" />,
    title: "Transparent analytics",
    desc: "All data on campaigns, expenses and performance in one table.",
  },
  {
    icon: <MdOutlineAutorenew className="w-8 h-8 text-[#352ce8]" />,
    title: "Fully automatic control",
    desc: "We control bids and make sure that the product is not shown using unnecessary phrases.",
  },
];

const tagsLeft = ["For a long time", "To no avail", "Expensive"];
const tagsRight = ["Fast", "Maximum benefit", "Available"];

const Tag = ({ children, type = 'grey-white' }) => (
  <button className={`${getButtonStyling(type)} text-sm mr-3 mb-2`}>
    {children}
  </button>
);

const Card = ({ icon, title, desc, crossed, diamond }) => (
  <div className={`flex items-center bg-[#f8f8f8] rounded-[24px] px-6 py-4 mb-6 shadow-sm`}>
    <div className="w-14 h-14 flex items-center justify-center bg-[#ededed] rounded-full mr-5">
      {icon}
    </div>
    <div className="flex-1">
      <div className="flex items-center">
        <span className={`text-black text-xl font-medium`}>{title}</span>
        {crossed && (
          <span className="ml-2 text-[#bdbdbd] text-2xl font-bold select-none">×</span>
        )}
        {diamond && (
          <span className="ml-2 text-[#bdbdbd] text-xl font-bold select-none">◆</span>
        )}
      </div>
      <div className="text-[#bdbdbd] text-base font-normal mt-1">{desc}</div>
    </div>
  </div>
);

const AdvantagesSection = () => (
  <section className="w-full min-h-screen flex flex-col justify-center items-center bg-linear-65 from-[#f3f3f3] to-[#fff] py-12 relative">
    <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center">
      <div className="flex w-full gap-16 justify-center">
        {/* Left */}
        <div className="flex-1 bg-white rounded-[32px] shadow-lg p-8 flex flex-col items-center min-w-[35vw]">
          <div className="flex flex-wrap mb-3 w-full">
            {tagsLeft.map((tag) => (
              <Tag key={tag} type="grey-white">{tag}</Tag>
            ))}
          </div>
          <h2 className="text-black text-5xl font-normal mb-6 w-full text-left">
            <span className="line-through decoration-4 decoration-[#000]">Without us</span>
          </h2>
          <div className="w-full">
            {withoutUs.map((item, i) => (
              <Card
                key={i}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                crossed
              />
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="flex-1 bg-gradient-to-br from-[#352ce8] to-[#847efc] rounded-[32px] shadow-lg p-8 pb-10 flex flex-col items-center min-w-[35vw] relative overflow-hidden">
          {/* Circular Pattern Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -right-0 w-120 h-120 border-2 border-white rounded-full animate-[pulse_8s_ease-in-out_infinite]" />
            <div className="absolute top-1/18 -right-[-35px] w-100 h-100 border-2 border-white rounded-full animate-[pulse_7s_ease-in-out_1s_infinite]" />
            <div className="absolute top-2/18 -right-[-70px] w-80 h-80 border-2 border-white rounded-full animate-[pulse_9s_ease-in-out_0.5s_infinite]" />
            <div className="absolute top-3/18 -right-[-105px] w-60 h-60 border-2 border-white rounded-full animate-[pulse_10s_ease-in-out_1.5s_infinite]" />
            <div className="absolute top-4/18 -right-[-140px] w-40 h-40 border-2 border-white rounded-full animate-[pulse_12s_ease-in-out_2s_infinite]" />
            <style jsx global>{`
              @keyframes pulse {
                0%, 100% {
                  transform: scale(1);
                  opacity: 0.5;
                }
                50% {
                  transform: scale(1.05);
                  opacity: 0.9;
                }
              }
            `}</style>
          </div>
          <div className="flex flex-wrap mb-6 w-full">
            {tagsRight.map((tag) => (
              <Tag key={tag} type="blue-white">{tag}</Tag>
            ))}
          </div>
          <h2 className="text-white text-5xl font-normal mb-6 w-full text-left">With us</h2>
          <div className="w-full">
            {withUs.map((item, i) => (
              <div key={i} className="flex items-center bg-white/80 rounded-[24px] px-6 py-4 mb-6 shadow-sm">
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
            ))}
          </div>
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-[32px] pointer-events-none border-4 border-transparent" style={{
            boxShadow: "0 0 0 4px rgba(53,44,232,0.12) inset"
          }} />
        </div>
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