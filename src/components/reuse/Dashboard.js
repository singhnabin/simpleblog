import React from "react";
import Sidebar from "./sidebar/Sidebar";
import "./Style.css";

function Dashboard({ options, children }) {
  return (
    <div className="dashboard">
      <div className="dashboard__sidebar">
        <Sidebar options={options} />
      </div>
      <div className="child">{children}</div>
    </div>
  );
}

export default Dashboard;
