import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import style from "./PieChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ data }) {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Total Successful and failed missions",
      },
    },
    aspectRatio: 1,
  };

  return (
    <div className={style.chartContainer}>
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
