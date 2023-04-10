import React from "react";
import "./index.css";
import CheckBox_1 from "./CheckBox_1";
import CheckBox_2 from "./CheckBox_2";

function index() {
  const component = [{ model: <CheckBox_1 /> }, { model: <CheckBox_2 /> }];
  return (
    <div className="box">
      {component.map((item: any) => {
        return <div className="boxBlock">{item.model}</div>;
      })}
    </div>
  );
}

export default index;
