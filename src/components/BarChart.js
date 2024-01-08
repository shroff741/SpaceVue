import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ data }) {
  console.log(data);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Mission Success Comparison",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div
      style={{
        width: "100%",
        height: "250px",
        border: "1px solid #dddddd",
        borderRadius: "5px",
        marginLeft: "2.5px",
        marginRight: "2.5px",
        marginBottom: "5px",
        padding: "5px",
        boxSizing: "border-box",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
