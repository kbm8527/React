import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RefCompo1 from "./Component/RefCompo1";
import RefCompo2 from "./Component/RefCompo2";
/**
 *  날짜 : 2020/10/21
 *  이름 : 김보미
 *  내용 : 컴포넌트 ref 속성 실습하기
 *
 *  ref - 리액트 JSX 문법에서 사용하는 식별 ID 값
 *      - HTML의 ID속성과 같은 개념이지만 JSX ID 속성을 권장하지 않음
 */
//함수컴포넌트를 클래스 컴포넌트로 바꿈
class App extends Component {
  ref1 = React.createRef();
  ref2 = React.createRef();

  onClick1 = () => {
    this.ref1.current.onClickHandlerByParent();
  };
  onClick2 = () => {
    this.ref2.current.onClickHandlerByParent();
  };

  render() {
    return (
      <div>
        <h3>ch06. 리액트 컴포넌트 ref 속성</h3>
        <RefCompo1 />
        <RefCompo1 />

        <RefCompo2 ref={this.ref1} />
        <RefCompo2 ref={this.ref2} />
        <button onClick={this.onClick1}>선택</button>
        <button onClick={this.onClick2}>선택</button>
      </div>
    );
  }
}
export default App;
