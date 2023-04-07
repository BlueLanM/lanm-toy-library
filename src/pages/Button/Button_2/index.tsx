import React from "react";
import "./index.css";

function index() {
  return (
    <button data-text="Awesome" className="button">
      <span className="actual-text">&nbsp;uiverse&nbsp;</span>
      <span className="hover-text" aria-hidden="true">
        &nbsp;uiverse&nbsp;
      </span>
    </button>
  );
}

export default index;
