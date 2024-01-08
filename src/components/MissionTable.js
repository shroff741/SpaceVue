//import axios from "axios";
import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

function MissionTable(props) {
  const colDefs = [
    { field: "mission" },
    { field: "company" },
    { field: "location" },
    { field: "date" },
    { field: "price" },
    { field: "successful" },
    { field: "rocket" },
  ];
  const rowData = props.missionData;

  return (
    <div
      className="ag-theme-quartz"
      style={{
        height: "100vh",
        width: "100%",
        marginLeft: "5px",
        marginRight: "2px",
      }}
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
}

export default MissionTable;
