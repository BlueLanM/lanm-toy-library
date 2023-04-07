import React from "react";
import Button from "../../pages/Button";

function index(props: any) {
  const { type } = props;
  const componentMap = [
    { component: <Button></Button>, type: "Button" },
    { component: <div>11</div>, type: "11" },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {componentMap.map((item: any) => {
        if (item.type == type) return <>{item.component}</>;
      })}
    </div>
  );
}

export default index;
