import { useState } from "react";
import { Line, Bar, Doughnut, Radar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, RadialLinearScale, Tooltip, Legend } from "chart.js";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, RadialLinearScale, ArcElement, Tooltip, Legend);

const toggles = [
  {
    id: 0,
    label: "Best places at low prices",
    graphType: "line",
    graphLabel: "Best places",
    graphData: {
      labels: ["5.10", "6.10", "7.10", "8.10", "9.10", "10.10", "11.10", "12.10"],
      datasets: [
        {
          label: "Rate, rub",
          data: [300, 220, 250, 230, 200, 180, 190, 210],
          borderColor: "#352ce8",
          backgroundColor: "rgba(53,44,232,0.08)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: "#352ce8",
        },
      ],
    },
  },
  {
    id: 1,
    label: "Positions, bets and boost in dynamics",
    graphType: "bar",
    graphLabel: "Positions & Bets",
    graphData: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Bets",
          data: [120, 180, 140, 200, 170, 220, 160],
          backgroundColor: "#352ce8",
          borderRadius: 12,
        },
      ],
    },
  },
  {
    id: 2,
    label: "Full control over display locations",
    graphType: "doughnut",
    graphLabel: "Display Control",
    graphData: {
      labels: ["Top", "Middle", "Bottom"],
      datasets: [
        {
          label: "Locations",
          data: [40, 35, 25],
          backgroundColor: [
            "#352ce8",
            "#a6a3f7",
            "#e0deff"
          ],
          borderWidth: 2,
        },
      ],
    },
  },
  {
    id: 3,
    label: "Relevant Presets",
    graphType: "radar",
    graphLabel: "Presets",
    graphData: {
      labels: ["Preset A", "Preset B", "Preset C", "Preset D", "Preset E"],
      datasets: [
        {
          label: "Relevance",
          data: [65, 59, 80, 81, 56],
          backgroundColor: "rgba(53,44,232,0.2)",
          borderColor: "#352ce8",
          pointBackgroundColor: "#352ce8",
        },
      ],
    },
  },
];

const ToggleSwitch = ({ checked, onChange }) => (
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
          cutout: "70%",
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
    <div className="flex gap-[60px] py-[32px]">
      {/* Left: Toggles */}
      <div className="flex flex-col gap-[22px] justify-center">
        {toggles.map((toggle, idx) => (
          <div
            key={toggle.id}
            className={`flex items-center justify-between w-[45vw] h-[64px] rounded-full px-[32px] transition-all duration-300 ${active === idx ? "bg-[#f3f3f3] shadow-[0_2px_16px_rgba(53,44,232,0.07)]" : "bg-[#f8f8f8]"}`}
            style={{ fontFamily: "Inter, Arial, sans-serif" }}
          >
            <div className="flex items-center gap-6">
              <span className="text-[#bdbdbd] text-xl font-medium w-12">{`00${idx + 1}`}</span>
              <span className={`text-black text-xl font-medium whitespace-pre-line leading-tight ${active === idx ? "" : "opacity-70"}`}>
                {toggle.label}
              </span>
            </div>
            <ToggleSwitch checked={active === idx} onChange={() => setActive(idx)} />
          </div>
        ))}
      </div>
      {/* Right: Graph */}
      <div className="bg-white rounded-[32px] shadow-[0_2px_24px_rgba(53,44,232,0.07)] flex flex-col p-[32px] min-w-[42vw] min-h-[400px] relative border border-[#f3f3f3]">
        <span className="absolute top-[24px] left-[32px] text-[#bdbdbd] text-[16px] font-medium">
          Rate, rub
        </span>
        <div className="absolute top-[28px] right-[32px] flex items-center gap-2 bg-[#f3f3f3] rounded-full px-5 py-2 text-black font-medium text-lg shadow">
          {toggles[active].graphLabel}
          <svg width="20" height="20" fill="none" stroke="#352ce8" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="9" cy="9" r="1.5" />
            <path d="M21 21L15 15" />
          </svg>
        </div>
        <div className="flex-1 flex items-center justify-center pt-[18px] pb-[12px]">
          <div className="w-[40vw] h-[45vh] flex items-center justify-center">
            {renderGraph()}
          </div>
        </div>
        <span className="absolute top-[70px] right-[40px] text-sm text-[#bdbdbd] font-medium">
          {active === 0 ? "the most profitable sites" : ""}
        </span>
      </div>
    </div>
  );
};

export default ToggleBox;