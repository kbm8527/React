import React from "react";
import ChildCompo2 from "./ChildCompo2";

const ChildCompo1 = (props) => {
  const name = props.name;
  return (
    <div className="ChildCompo1">
      <h4>ChildCompo1</h4>

      <ChildCompo2 name={name} />
    </div>
  );
};

export default ChildCompo1;
