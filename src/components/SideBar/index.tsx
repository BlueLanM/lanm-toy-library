import React, { useEffect, useState } from "react";
import "./index.css";

function index(param: any) {
  const [id, setIds] = useState();
  const { setType } = param;

  const menu = [
    { label: "Buttons", type: "Button", id: "1" },
    { label: "CheckBoxes", type: "CheckBox", id: "2" },
    { label: "Toggle Switches", type: "Toggle", id: "3" },
    { label: "Cards", type: "Card", id: "4" },
    { label: "Loaders", type: "Loader", id: "5" },
    { label: "Inputs", type: "Input", id: "6" },
  ];
  const handleClick = (e: any) => {
    setIds(e.id);
    setType(e.type);
  };

  return (
    <div className="sidebar_side">
      {menu.map((item: any) => {
        return (
          <div
            className="menu"
            key={item.id}
            onClick={() => {
              handleClick(item);
            }}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
}

export default index;
