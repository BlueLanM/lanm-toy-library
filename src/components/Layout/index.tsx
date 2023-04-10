import React, { useState, useRef } from "react";
import "./index.css";
import SideBar from "../SideBar";
import Content from "../Content";

export default function index() {
  const [type, setType] = useState("Button");

  return (
    <div className="layout">
      <div className="sidebar">
        <SideBar setType={setType} />
      </div>
      <div className="content">
        <Content type={type} />
      </div>
    </div>
  );
}
