import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicCompo1 from './components/BasicCompo1';
import BasicCompo2 from './components/BasicCompo2';
import PropsCompo1 from './components/PropsCompo1';
import PropsCompo2 from './components/PropsCompo2';
import ChildrenCompo1 from './components/ChildrenCompo1';
import ChildrenCompo2 from './components/ChildrenCompo2';
import StateCompo1 from './components/StateCompo1';

/*
  날짜 : 2020/10/19
  이름 : 김보미
  내용 : 리액트 함수형 컴포넌트 실습하기
  
  컴포넌트(Component)
    - UI 또는 기능을 독립적이고 재사용 가능하도록 나눈 모듈
    - 컴포넌트는 클래스형 함수형 두개로 나눈다.
*/



function App() {
  return (
    <>
      <h3>ch03.리액트 함수형 컴포넌트</h3>
      <h4>1.기본 컴포넌트</h4>
      <BasicCompo1/>
      <BasicCompo2/>
      <h4>2.속성(Property)을 갖는 컴포넌트</h4>
      <PropsCompo1 title="속성 컴포넌트" message="속성을 갖는 컴포넌트 실습"/>
      <PropsCompo2 name="홍길동" age="17" addr="부산"/>
      <h4>3.태그내용(Children)을 갖는 컴포넌트</h4>
      <ChildrenCompo1>1.태그 내용을 갖는 컴포넌트입니다.</ChildrenCompo1>
      <ChildrenCompo2>2.태그 내용을 갖는 컴포넌트입니다.</ChildrenCompo2>

      <h4>4.상태값(State)을 갖는 컴포넌트</h4>
      <StateCompo1/>
    </>
  );
}

export default App;
