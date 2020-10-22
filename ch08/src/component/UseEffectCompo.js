import React, { useEffect, useState } from "react";

const UseEffectCompo = () => {
  //상태값 생성
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  // 함수형 컴포넌트의 생명주기 함수
  useEffect(() => {
    console.log("최초 Mount 될 때...");
  }, []);

  useEffect(() => {
    console.log("최초 Mount 될 때, 렌더링 될 때...");
  });
  useEffect(() => {
    console.log("상태값 name이 업데이트 될 때...");
  }, [name]);

  return (
    <div className="UseEffectCompo">
      <h4>UseEffectCompo</h4>
      <p>
        이름 : {name} <br />
        나이 : {age} <br />
        {/* 전재연산자(...)를 상태값에 붙여서 기존의 상태값을 유지한다. */}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </p>
    </div>
  );
};

export default UseEffectCompo;
