import React from "react";
import PillButton from "../buttons/PillButton";
import { FiArrowUpRight } from "react-icons/fi";
import { ModernFadeIn, ModernSlideIn } from "../animations";

const EarnMore = () => {
  return (
    <section className="w-full flex flex-col pt-20 px-6">
      <div className="flex justify-between w-full items-end">
        {/* Left side: Headline and image */}
        <div className="flex flex-col">
          <h1 className="text-black font-medium text-6xl mb-[20px]">
            <ModernFadeIn delay={0.5}>
              Earn money with us
            </ModernFadeIn>
          </h1>
          <ModernSlideIn direction="up" delay={0.5}>
          <div className="flex items-center">
            {/* Decorative video */}
            <video
              src="/video/10994870-hd_1080_1920_25fps.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[250px] h-[75px] rounded-full object-cover mr-6"
              style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}
            />
            <span className="text-black font-medium text-6xl">
              quickly and easily
            </span>
          </div>
            </ModernSlideIn>
        </div>
        {/* Right side: PillButton */}
        <div className="flex items-center justify-end" style={{ minWidth: "277px" }}>
          <ModernSlideIn direction="right" delay={0.5} >
          <PillButton
            text="Start for Free"
            icon={<FiArrowUpRight className="w-4 h-4" />}
            onClickHandler={() => console.log("Start for Free Clicked")}
            className="w-[220px] h-[88px] font-medium"
          />
            </ModernSlideIn>
        </div>
      </div>
    </section>
  );
};

export default EarnMore;