import React from "react";
import Button_1 from "./Button_1";
import Button_2 from "./Button_2";
import Button_3 from "./Button_3";
import "./index.css";

function index() {
  return (
    <div className="btnBg">
      <div className="btnBlock">
        <Button_1 />
      </div>
      <div className="btnBlock">
        <Button_2 />
      </div>
      <div className="btnBlock">
        <Button_3 />
      </div>
    </div>
  );
}

export default index;
