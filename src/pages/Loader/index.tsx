import React from "react";
import "./index.css";
import Loader_1 from "./Loader_1";
import Loader_2 from "./Loader_2";
import Loader_3 from "./Loader_3";

function index() {
  const component = [
    { model: <Loader_1 />, color: "#fff" },
    { model: <Loader_2 />, color: "#fff" },
    { model: <Loader_3 /> },
    // { model: <Toggle_4 /> },
  ];
  return (
    <div className="LoadBg">
      {component.map((item: any, index: any) => {
        return (
          <div
            key={index}
            className="LoadBlock"
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
