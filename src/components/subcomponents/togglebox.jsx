import { useState } from "react";
import { Line, Bar, Doughnut, Radar } from "react-chartjs-2";
import getButtonStyling from "../buttons/getButtonStyling";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, RadialLinearScale, Tooltip, Legend } from "chart.js";
import { FaArrowRight } from "react-icons/fa";
import { ModernFadeIn, ModernSlideIn } from "../animations";
import toggles from "./toggleGraphDetails";
import ToggleSwitchButton from "../buttons/ToggleSwitchButton";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, RadialLinearScale, ArcElement, Tooltip, Legend);

const ToggleBox = () => {
  const [active, setActive] = useState(0);

  const renderGraph = () => {
    const { graphType, graphData } = toggles[active];
    switch (graphType) {
      case "line":
        return <Line data={graphData} options={{
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { color: "#888" } },
            y: { grid: { color: "#eee" }, ticks: { color: "#888" } }
          },
          responsive: true,
        }} />;
      case "bar":
        return <Bar data={graphData} options={{
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { color: "#888" } },
            y: { grid: { color: "#eee" }, ticks: { color: "#888" } }
          },
          responsive: true,
        }} />;
      case "doughnut":
        return <Doughnut data={graphData} options={{
          plugins: { legend: { display: true, position: "right" } },
          cutout: "60%",
          responsive: true,
        }} />;
      case "radar":
        return <Radar data={graphData} options={{
          plugins: { legend: { display: false } },
          scales: {
            r: {
              angleLines: { color: "#e0deff" },
              grid: { color: "#e0deff" },
              pointLabels: { color: "#888" },
              ticks: { color: "#888" }
            }
          },
          responsive: true,
        }} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-[60px] py-[64px]">
      {/* Left: Toggles */}
      <div className="flex flex-col justify-center gap-6">
        {toggles.map((toggle, idx) => (
            <ModernSlideIn direction="up" delay={0.5}>
          <div
            key={toggle.id}
            className={`flex items-center justify-between w-[45vw] h-[64px] rounded-full px-[32px] transition-all duration-300 ${active === idx ? "bg-[#f3f3f3] shadow-[0_2px_16px_rgba(53,44,232,0.07)]" : "bg-[#f8f8f8]"}`}
          >
            <div className="flex items-center gap-6">
              <span className="text-[#bdbdbd] text-xl font-medium w-12">{`00${idx + 1}`}</span>
              <span className={`text-black text-xl font-medium whitespace-pre-line leading-tight ${active === idx ? "" : "opacity-70"}`}>
                {toggle.label}
              </span>
            </div>
            <ToggleSwitchButton checked={active === idx} onChange={() => setActive(idx)} />
          </div>
            </ModernSlideIn>
        ))}
      </div>
      {/* Right: Graph */}
      <ModernFadeIn delay={0.5}>
      <div className="bg-white rounded-[32px] shadow-[0_2px_24px_rgba(53,44,232,0.07)] flex flex-col p-[32px] min-w-[42vw] min-h-[400px] relative border border-[#f3f3f3]">
        <span className="absolute top-[24px] left-[32px] text-[#bdbdbd] text-[16px] font-medium">
          Rate
        </span>
        <div className="absolute top-[28px] right-[32px] flex items-center">
          <div className={getButtonStyling("primary") + " flex items-center gap-2 shadow"}>
            <span>{toggles[active].graphLabel}</span>
            <FaArrowRight className="w-3 h-3 text-white rotate-315" />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center pt-[18px] pb-[12px]">
          <div className="w-[40vw] h-[45vh] flex items-center justify-center">
            {renderGraph()}
          </div>
        </div>
        <span className="absolute top-[70px] right-[40px] text-sm text-[#bdbdbd] font-medium">
          {active === 0 ? "The most profitable sites" : ""}
        </span>
      </div>
        </ModernFadeIn>
    </div>
  );
};

export default ToggleBox;