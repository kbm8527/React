import React from "react";
import CtxChildCompo2 from "./CtxChildCompo2";

const CtxChildCompo1 = () => {
  return (
    <div className="CtxChildCompo1">
      <h4>CtxChildCompo1</h4>
      <CtxChildCompo2 />
    </div>
  );
};

export default CtxChildCompo1;
