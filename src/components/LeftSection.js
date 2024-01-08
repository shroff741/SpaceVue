import React from "react";
import PieChart from "./PieChart";
import style from "./LeftSection.module.css";

function LeftSection({ missionData }) {
  let success = 0;
  let fail = 0;
  if (missionData.length !== 0) {
    missionData.forEach((element) => {
      if (element.successful) {
        success += 1;
      }
    });
    fail = missionData.length - success;
    //console.log(success);
    //console.log(fail);

    const missionStatusData = {
      labels: ["successful", "failed"],
      datasets: [
        {
          label: "Mission Count",
          data: [success, fail],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    };

    return (
      <div className={style.container}>
        <PieChart data={missionStatusData} />
        <PieChart data={missionStatusData} />
      </div>
    );
  }
}
export default LeftSection;
