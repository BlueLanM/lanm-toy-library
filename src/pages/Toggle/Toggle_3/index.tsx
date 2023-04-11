import React from "react";
import "./index.css";

function index() {
  return (
    <label>
      <div className="round_3">
        <input name="onoff" id="onoff" type="checkbox" />
        <div className="back">
          <label htmlFor="onoff" className="but">
            <span className="on">0</span>
            <span className="off">I</span>
          </label>
        </div>
      </div>
    </label>
  );
}

export default index;
