import React from "react";
import "./index.css";

function index() {
  return (
    <div className="checkbox-wrapper-10">
      <input type="checkbox" id="cb5" className="tgl tgl-flip" />
      <label
        htmlFor="cb5"
        data-tg-on="Yeah!"
        data-tg-off="Nope"
        className="tgl-btn"
      ></label>
    </div>
  );
}

export default index;
