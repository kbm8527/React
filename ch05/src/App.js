import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventFuncCompo from './components/EventFuncCompo';
import EventClassCompo from './components/EventClassCompo';

/**
 *  날짜 : 2020/10/20
 *  이름 : 김보미
 *  내용 : 리액트 이벤트
 *
 */

function App() {
  return (
    <div>
      <h3>ch05.리액트 이벤트</h3>

      <h4>1.함수형 컴포넌트 이벤트</h4>
      <EventFuncCompo />

      <h4>2.클래스형 컴포넌트 이벤트</h4>
      <EventClassCompo />
    </div>
  );
}

export default App;
