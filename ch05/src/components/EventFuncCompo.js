import React from 'react';
import { useState } from 'react';

const EventFuncCompo = () => {
  // 상태값 선언 color1 전역변수
  const [color1, setColor1] = useState('#000');
  const [color2, setColor2] = useState('#000');
  const [msg, setMsg] = useState('내용 입력하세요.');

  // 이벤트 핸들러 정의
  // 기본 자바스트립트 함수
  function onClickHandler1() {
    alert('핸들러 버튼 1 클릭');
  }
  // 기본 자바스트립트 익명함수
  const onClickHandler2 = function () {
    alert('핸들러 버튼 2 클릭');
  };
  // 타입스크립트 화살표함수
  const onClickHandler3 = () => {
    alert('핸들러 버튼 3 클릭');
  };
  const onToggleColor = () => {
    if (color1 == '#f00') {
      setColor1('#00f');
    } else {
      setColor1('#f00');
    }
  };

  return (
    <div className="EventFuncCompo">
      <em>EventFuncCompo</em>
      {/* onClick 이벤트 */}
      <h1 style={{ color: color1 }}>React Click Event</h1>
      <button
        onClick={() => {
          alert('기본클릭');
        }}
      >
        기본클릭
      </button>
      <button onClick={onClickHandler1}>핸들러 버튼1</button>
      <button onClick={onClickHandler2}>핸들러 버튼2</button>
      <button onClick={onClickHandler3}>핸들러 버튼3</button>
      <button
        onClick={(e) => {
          console.log(e);
        }}
      >
        이벤트 객체
      </button>
      <button
        onClick={() => {
          setColor1('red');
        }}
      >
        색상 변경
      </button>
      <button onClick={onToggleColor}>색상 토글</button>

      {/* onMouseOver, onMouseOut 이벤트 */}
      <h1
        style={{ color: color2 }}
        onMouseOver={() => {
          setColor2('orange');
        }}
        onMouseOut={() => {
          setColor2('green');
        }}
      >
        마우스오버, 마우스아웃
      </h1>

      {/* onChange이벤트 */}
      <input
        type="text"
        onChange={(e) => {
          //console.log(e.target.value);
          setMsg(e.target.value);
        }}
      />
      <h1>{msg}</h1>
    </div>
  );
};

export default EventFuncCompo;
