import React from "react";
import Button from "../../pages/Button";
import CheckBox from "../../pages/CheckBox";
import Card from "../../pages/Card";
import Input from "../../pages/Input";
import Loader from "../../pages/Loader";
import Toggle from "../../pages/Toggle";

function index(props: any) {
  const { type } = props;
  const componentMap = [
    { component: <Button></Button>, type: "Button" },
    { component: <CheckBox></CheckBox>, type: "CheckBox" },
    { component: <Card></Card>, type: "Card" },
    { component: <Input></Input>, type: "Input" },
    { component: <Loader></Loader>, type: "Loader" },
    { component: <Toggle></Toggle>, type: "Toggle" },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {componentMap.map((item: any) => {
        if (item.type == type)
          return <div key={item.type}>{item.component}</div>;
      })}
    </div>
  );
}

export default index;
