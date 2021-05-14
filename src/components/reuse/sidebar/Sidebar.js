import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SideOption from "./SideOption";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import TabIcon from "@material-ui/icons/Tab";
import TableChartIcon from "@material-ui/icons/TableChart";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import PageviewIcon from "@material-ui/icons/Pageview";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

function Sidebar({ options }) {
  const [menuOptions, setMenuOptions] = useState([]);
  useEffect(() => {
    setMenuOptions(options);
  }, [options]);
  return (
    <div className="sidebar">
      {menuOptions &&
        menuOptions.map(option => (
          <SideOption
            key={option.name}
            Icon={option.Icon}
            name={option.name}
            path={option.path}
          />
        ))}
    </div>
  );
}

export default Sidebar;
