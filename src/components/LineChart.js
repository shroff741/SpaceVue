import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({ data }) {
  //console.log(data);
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Mission count per company",
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
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
