import React from "react";
import "./index.css";
import CheckBox_1 from "./CheckBox_1";
import CheckBox_2 from "./CheckBox_2";

function index() {
  const component = [
    { model: <CheckBox_1 />, color: "#fff" },
    { model: <CheckBox_2 /> },
  ];
  return (
    <div className="box">
      {component.map((item: any, index: any) => {
        return (
          <div
            key={index}
            className="boxBlock"
            style={{ backgroundColor: item.color }}
          >
            {item.model}
          </div>
        );
      })}
    </div>
  );
}

export default index;
