import React from "react";

const ToggleSwitchButton = ({ checked, onChange }) => (
  <button
    className={`w-14 h-8 rounded-full flex items-center px-1 transition-colors duration-300 ${checked ? "bg-[#352ce8]" : "bg-[#e0e0e0]"}`}
    onClick={onChange}
    style={{ outline: "none", border: "none" }}
    aria-checked={checked}
    role="switch"
  >
    <span
      className={`w-6 h-6 rounded-full bg-white shadow transition-transform duration-300`}
      style={{
        transform: checked ? "translateX(24px)" : "translateX(0px)",
        transition: "transform 0.3s",
      }}
    />
  </button>
);

export default ToggleSwitchButton;