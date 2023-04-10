import React from "react";
import "./index.css";
import Toggle_1 from "./Toggle_1";
import Toggle_2 from "./Toggle_2";

function index() {
  const component = [{ model: <Toggle_1 /> }, { model: <Toggle_2 /> }];
  return (
    <div className="toggleBg">
      {component.map((item: any) => {
        return <div className="toggleBlock">{item.model}</div>;
      })}
    </div>
  );
}

export default index;
