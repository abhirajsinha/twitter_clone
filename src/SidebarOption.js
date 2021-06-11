import { Icon } from "@material-ui/core";
import React from "react";
import "./SidebarOption.css";
function SidebarOption({ text, Icon }) {
  return (
    <div className="sidebarOption">
      <Icon />
      <strong>
        <h2>{text}</h2>
      </strong>
    </div>
  );
}

export default SidebarOption;
