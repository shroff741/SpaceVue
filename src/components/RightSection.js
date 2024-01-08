import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

function RightSection({ missionData }) {
  let companyCount = {};
  let isroSuccess = 0;
  let isroFail = 0;
  let nasaSuccess = 0;
  let nasaFail = 0;

  const isroData = missionData.filter((mission) => {
    if (mission.company === "ISRO") {
      return mission;
    }
    return null;
  });

  isroSuccess = isroData.reduce((acc, currentMission) => {
    if (currentMission.successful) {
      acc += 1;
    }
    return acc;
  }, 0);
  isroFail = isroData.length - isroSuccess;

  //console.log(isroSuccess);
  //console.log(isroData.length);
  const nasaData = missionData.filter((mission) => {
    if (mission.company === "NASA") {
      return mission;
    }
    return null;
  });

  nasaSuccess = nasaData.reduce((acc, currentMission) => {
    if (currentMission.successful) {
      acc += 1;
    }
    return acc;
  }, 0);
  nasaFail = nasaData.length - isroSuccess;

  missionData.forEach((mission) => {
    if (companyCount.hasOwnProperty(mission.company)) {
      companyCount = {
        ...companyCount,
        [mission.company]: companyCount[mission.company] + 1,
      };
    } else {
      companyCount = {
        ...companyCount,
        [mission.company]: 1,
      };
    }
  });
  //console.log(companyCount);
  const companyCountData = {
    labels: Object.keys(companyCount),
    datasets: [
      {
        label: "Mission Count",
        data: Object.values(companyCount),
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const isroNasaComparisonData = {
    labels: ["ISRO", "NASA"],
    datasets: [
      {
        label: "Successful Missions",
        data: [isroSuccess, nasaSuccess],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        barThickness: 25,
      },
      {
        label: "Failed Missions",
        data: [isroFail, nasaFail],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        barThickness: 25,
      },
    ],
  };

  return (
    <div>
      <BarChart data={isroNasaComparisonData} />
      <LineChart data={companyCountData} />
    </div>
  );
}

export default RightSection;
