import React from "react";

const ChildCompo2 = (props) => {
  const name = props.name;
  return (
    <div className="ChildCompo2">
      <h4>ChildCompo2</h4>
      <p>App 컴포넌트로 부터 전달된 name : {name}</p> <br />
    </div>
  );
};

export default ChildCompo2;
