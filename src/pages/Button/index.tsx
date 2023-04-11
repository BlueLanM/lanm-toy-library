import React from "react";
import Button_1 from "./Button_1";
import Button_2 from "./Button_2";
import Button_3 from "./Button_3";
import Button_4 from "./Button_4";
import Button_5 from "./Button_5";
import "./index.css";

function index() {
  const component = [
    { model: <Button_1 />, color: "#fff" },
    { model: <Button_2 /> },
    { model: <Button_3 />, color: "#fff" },
    { model: <Button_4 />, color: "#fff" },
    { model: <Button_5 />, color: "#fff" },
  ];
  return (
    <div className="btnBg">
      {component.map((item: any, index: any) => {
        return (
          <div
            key={index}
            className="btnBlock"
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
