import React from "react";
import "./index.css";

function index() {
  return (
    <>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="switch">
        <div className="powersign"></div>
      </label>
    </>
  );
}

export default index;
