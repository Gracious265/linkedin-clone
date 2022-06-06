import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1624115829388-2a1b556c9797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxyYWluYm93JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60 " alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Gracious Nguwo</h2>
        <h4>graciouscodes@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,453</p>
        </div>

        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="siderbar__statNumber">2,789</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
};

export default Sidebar;
