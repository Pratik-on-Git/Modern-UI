import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import PillButton from '../buttons/PillButton';
import { ModernFadeIn } from '../animations';

const Footer = () => {
  return (
    <footer className="bg-white rounded-t-3xl px-8 pt-28">
        <ModernFadeIn>
        <div className="flex flex-row justify-between items-center pb-10">
        <div className="flex flex-col mb-16">
          <h1 className="text-black font-medium text-6xl mb-[20px] flex items-center">
              Maximum Profit From
              <video
                src="https://cdn.pixabay.com/video/2020/01/20/31442-386853555_large.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-[270px] h-[75px] rounded-full object-cover ml-6"
                style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}
              />
          </h1>
            <div className="flex items-center">
              {/* Decorative video */}
              
              <span className="text-black font-medium text-6xl">
                Advertising In Marketplaces
              </span>
            </div>
        </div>
        <PillButton text="Start For Free" 
        onClickHandler={() => {}}
        className="w-full lg:w-[220px] h-[58px] text-lg font-medium [&_.text-white_svg]:w-5 [&_.text-white_svg]:h-5 [&_.text-white]:ml-0"
        />
        </div>
        </ModernFadeIn>
      <div className="pt-8 border-t-2 border-gray-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - Copyright */}
          <div className="text-gray-400 text-sm order-2 md:order-1 mt-4 md:mt-0">
            ©2023. All rights registered
          </div>
          <div className="order-1 md:order-2">
            <div className="w-16 h-16 flex items-center justify-center">
            <img 
                 src="/logo/Icon-107.png" 
                 alt="Logo" 
                 className="w-full h-full object-contain"
               />
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-3 order-3">
            <a 
              href="#" 
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
