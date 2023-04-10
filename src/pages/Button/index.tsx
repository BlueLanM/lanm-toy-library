import React from "react";
import Button_1 from "./Button_1";
import Button_2 from "./Button_2";
import Button_3 from "./Button_3";
import "./index.css";

function index() {
  const component = [
    { model: <Button_1 /> },
    { model: <Button_2 /> },
    { model: <Button_3 /> },
  ];
  return (
    <div className="btnBg">
      {component.map((item: any) => {
        return <div className="btnBlock">{item.model}</div>;
      })}
    </div>
  );
}

export default index;
