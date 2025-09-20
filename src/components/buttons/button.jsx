import getButtonStyling from "./getButtonStyling"

const Button = ({ text, onClickHandler, styletype = "primary-blue", type = "button", icon }) =>{
    
    // Special handling for start-free button with circular extension
    if (styletype === "start-free") {
        return (
            <button
                className={`${getButtonStyling(styletype)} cursor-pointer`}
                onClick={onClickHandler}
                type={type}
            >
                <span>{text}</span>
                <span className="ml-3 w-9 h-9 rounded-full bg-[#352ce8] flex items-center justify-center text-lg hover:bg-blue-700 transition-colors duration-200">
                    {icon || "→"}
                </span>
            </button>
        )
    }
    
    return(
        <button
        className={`${getButtonStyling(styletype)} cursor-pointer`}
        onClick={onClickHandler}
        type={type}
        >
            {icon && <span className="text-white">{icon}</span>}
            {text}
        </button>

    )
}

export default Button