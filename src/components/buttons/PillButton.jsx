import { FiArrowUpRight } from "react-icons/fi";

const PillButton = ({ text, onClickHandler, icon, className = "" }) => {
  return (
    <button
      className={`inline-flex items-center`}
      onClick={onClickHandler}
      type="button"
    >
      <span className={`flex items-center bg-[#352ce8] text-white font-medium rounded-full pl-6 pr-6 py-6 hover:bg-blue-700 transition-colors duration-200 h-12 cursor-pointer ${className}`}>{text}</span>
      <span className="ml-3 w-11 h-11 rounded-full bg-[#352ce8] text-white flex items-center justify-center text-lg hover:bg-blue-700 transition-colors duration-200">
        {icon || <FiArrowUpRight className="w-20 h-20" />}
      </span>
    </button>
  )
}

export default PillButton
