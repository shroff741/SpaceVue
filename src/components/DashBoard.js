import React, { useState, useEffect } from "react";
import MissionTable from "./MissionTable";
import axios from "axios";
import styles from "./Dashboard.module.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function DashBoard() {
  const [missionData, setMissionData] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .then((response) => {
        setMissionData(response.data);
      });
  }, []);

  return (
    <div className={styles.dashBoardContainer}>
      <div className={styles.left}>
        <LeftSection missionData={missionData} />
      </div>
      <div className={styles.table}>
        <MissionTable missionData={missionData} />
      </div>
      <div className={styles.right}>
        <RightSection missionData={missionData} />
      </div>
    </div>
  );
}

export default DashBoard;
