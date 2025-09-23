import { FiArrowUpRight } from "react-icons/fi";

const PillButton = ({ text, onClickHandler, icon, className = "" }) => {
  return (
    <button
      className={`relative flex items-center bg-transparent p-0 border-none cursor-pointer group ${className}`}
      onClick={onClickHandler}
      type="button"
      style={{ outline: 'none', height: '48px', minWidth: '220px' }}
    >
      <svg
        viewBox="0 0 385 78"
        height="48"
        className="absolute left-0 top-0 w-full h-full"
        style={{ zIndex: 0 }}
        preserveAspectRatio="none"
      >
        <path
          d="M0 39C0 17.4609 17.4609 0 39 0H227.628C235.899 0 243.816 3.35827 249.564 9.30537V9.30537C261.556 21.7125 281.444 21.7125 293.436 9.30537V9.30537C299.184 3.35827 307.101 0 315.372 0H323C344.539 0 362 17.4609 362 39V39C362 60.5391 344.539 78 323 78H315.19C307.014 78 299.167 74.7817 293.345 69.041V69.041C281.231 57.0957 261.769 57.0957 249.655 69.041V69.041C243.833 74.7817 235.986 78 227.81 78H39C17.4609 78 0 60.5391 0 39V39Z"
          className="transition-colors duration-400 fill-[#352ce8] group-hover:fill-[#000] group-hover:drop-shadow-lg"
        />
      </svg>
      <span className="relative z-10 w-full flex items-center justify-between px-[30px] py-0" style={{ width: '100%' }}>
        <span className="text-white font-medium text-base" style={{ whiteSpace: 'nowrap' }}>{text}</span>
        <span className="text-white flex justify-between" style={{ minWidth: '0px' }}>
          {icon || <FiArrowUpRight className="w-12 h-12" />}
        </span>
      </span>
    </button>
  )
}

export default PillButton
