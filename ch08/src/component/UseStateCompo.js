import React, { useState } from "react";

const UseStateCompo = () => {
  //상태값 생성
  const [state, setState] = useState({ name: "", age: 0 });

  return (
    <div className="UseStateCompo">
      <h4>UseStateCompo</h4>
      <p>
        이름 : {state.name} <br />
        나이 : {state.age} <br />
        {/* 전재연산자(...)를 상태값에 붙여서 기존의 상태값을 유지한다. */}
        <input
          type="text"
          value={state.name}
          onChange={(e) => {
            setState({ ...state, name: e.target.value });
          }}
        />
        <input
          type="text"
          value={state.age}
          onChange={(e) => {
            setState({ ...state, age: e.target.value });
          }}
        />
      </p>
    </div>
  );
};

export default UseStateCompo;
