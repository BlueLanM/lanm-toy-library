import React from "react";
import "./index.css";
import Card_1 from "./Card_1";
import Card_2 from "./Card_2";
import Card_3 from "./Card_3";
import Card_4 from "./Card_4";

function index() {
  const component = [
    { model: <Card_1 />, color: "#505050" },
    { model: <Card_2 />, color: "#fff" },
    { model: <Card_3 /> },
    { model: <Card_4 /> },
  ];
  return (
    <div className="cardBg">
      {component.map((item: any, index: any) => {
        return (
          <div
            key={index}
            className="cardBlock"
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
