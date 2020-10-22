import React, { Component } from 'react';

class EventClassCompo extends Component {
  // 상태값 선언
  state = {
    color1: '#000',
    color2: '#000',
    msg: '내용을 입력하세요.',
  };

  // 이벤트 핸들러 정의
  // 기본 자바스크립트 함수
  onClickHandler1 = function () {
    alert('핸들러 버튼1 클릭');
  };
  // 자바스크립트 익명함수
  onClickHandler2 = function () {
    alert('핸들러 버튼2 클릭');
  };
  // 타입스크립트 화살표함수
  onClickHandler3 = () => {
    alert('핸들러 버튼3 클릭');
  };

  render() {
    return (
      <div className="EventClassCompo">
        <em>EventClassCompo</em>
        {/* onClick 이벤트 */}
        <h1 style={{ color: this.state.color1 }}>React Click Event</h1>
        <button
          onClick={() => {
            alert('기본클릭');
          }}
        >
          기본클릭
        </button>
        <button onClick={this.onClickHandler1}>핸들러 버튼1</button>
        <button onClick={this.onClickHandler2}>핸들러 버튼2</button>
        <button onClick={this.onClickHandler3}>핸들러 버튼3</button>
        <button
          onClick={(e) => {
            console.log(e);
          }}
        >
          이벤트 객체
        </button>
        <button
          onClick={() => {
            this.setState({ color1: '#f00' });
          }}
        >
          색상 변경
        </button>
        <button onClick={this.onToggleColor}>색상 토글</button>
        {/* onMouseOver, onMouseOut 이벤트 */}
        <h1
          style={{ color: this.state.color2 }}
          onMouseOver={() => {
            this.setState({ color2: 'orange' });
          }}
          onMouseOut={() => {
            this.setState({ color2: 'green' });
          }}
        >
          마우스오버, 마우스아웃
        </h1>
        {/* onChange 이벤트 */}
        <input
          type="text"
          onChange={(e) => {
            //console.log(e.target.value);
            this.setState({ msg: e.target.value });
          }}
        />
        <h1>{this.state.msg}</h1>
      </div>
    );
  }
}

export default EventClassCompo;
