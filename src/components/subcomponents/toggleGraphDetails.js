const toggles = [
  {
    id: 0,
    label: "Best places at low prices",
    graphType: "line",
    graphLabel: "Best Places",
    graphData: {
      labels: ["5.10", "6.10", "7.10", "8.10", "9.10", "10.10", "11.10", "12.10"],
      datasets: [
        {
          label: "Rate, rub",
          data: [300, 200, 250, 230, 200, 180, 190, 200],
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

export default toggles;