import React from "react";
import "./SideOption.css";
import { Link } from "react-router-dom";

function SideOption({ Icon, name, path }) {
  return (
    <div className="sideoption">
      <Icon />
      <Link to={path} className="link-item">
        {name}
      </Link>
    </div>
  );
}

export default SideOption;
