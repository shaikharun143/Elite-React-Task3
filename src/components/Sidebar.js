import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item">Overview</li>
        <li className="menu-item">Analytics</li>
        <li className="menu-item">Engagement</li>
        <li className="menu-item">Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
