import React from "react";
import "./style.css";
function Navbar(props) {
  return (
    <div className="navbar-menu">
      <div className="group-dropdown">
        <ul>
          {" "}
          Dashboards
          <div className="list-dropdown">
            <li>Analytics</li>
            <li>CRM</li>
            <li>Ecommerce</li>
            <li>Projects</li>
          </div>
        </ul>
      </div>
      <div className="group-dropdown">
        <ul>
          {" "}
          Apps
          <div className="list-dropdown">
            <li>Calendar</li>
            <li>Chat</li>
            <li>Ecommerce</li>
            <li>Email</li>
            <li>Projects</li>
            <li>Social Feed</li>
            <li>Tasks</li>
          </div>
        </ul>
      </div>
      <div className="group-dropdown">
        <ul>
          {" "}
          Pages
          <div className="list-dropdown">
            <li>Authenitication</li>
            <li>Error</li>
            <li>Starter Page</li>
            <li>With Preloader</li>
            <li>Profile</li>
          </div>
        </ul>
      </div>
      <div className="group-dropdown">
        <ul>
          {" "}
          Components
          <div className="list-dropdown">
            <li>Widgets</li>
            <li>UI 1</li>
            <li>UI 2</li>
            <li>Extended UI</li>
            <li>Chart</li>
            <li>Form</li>
          </div>
        </ul>
      </div>
      <div className="group-dropdown">
        <ul>
          {" "}
          Layouts
          <div className="list-dropdown">
            <li>Vertical</li>
            <li>Detached</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
