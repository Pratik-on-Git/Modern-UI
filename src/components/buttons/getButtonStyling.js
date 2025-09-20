function getButtonStyling(styletype) {
    switch (styletype) {
      case "primary":
        return "bg-[#352ce8] text-white text-[15px] border-[#352ce8] border-1 rounded-full px-5 py-[4px] font-normal hover:bg-blue-700 transition-colors duration-400";
      case "secondary":
        return "bg-[#fff] text-black text-[15px] border-black border-1 rounded-full px-5 py-[4px] font-normal hover:bg-[#f3f3f3] transition-colors duration-400";
      case "secondary-icon":
        return "bg-[#fff] text-black text-[15px] border-black border-1 rounded-full px-5 py-[4px] font-normal hover:bg-[#f3f3f3] transition-colors duration-400 ";
      case "primary-icon":
        return "bg-[#352ce8] text-white text-[15px] border-[#352ce8] border-1 rounded-full px-5 py-[4px] font-normal hover:bg-blue-700 transition-colors duration-400 flex items-center justify-center gap-1 shadow-lg";
      case "learn-more":
        return "bg-white text-black text-[15px] border-black border-1 rounded-lg px-6 py-3 font-medium hover:bg-gray-50 transition-colors duration-200";
      case "start-free":
        return "inline-flex items-center bg-[#352ce8] text-white font-medium rounded-full pl-6 pr-2 py-3 hover:bg-blue-700 transition-colors duration-200";
      case "about-company":
        return "bg-white text-black text-[14px] border-none rounded-lg px-4 py-2 font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2";
     default:
        return "text-gray-600 hover:text-black transition-colors duration-200 text-[15px] font-medium";
       }}
  
  export default getButtonStyling;