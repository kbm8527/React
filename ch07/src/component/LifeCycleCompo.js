import React, { Component } from "react";

class LifeCycleCompo extends Component {
  // 초기화 단계에 실행되는 함수
  constructor() {
    super();
    console.log("constructor...");
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps...");
  }
  componentDidMount() {
    console.log("componentDidMount...");
  }

  // 업데이트 단계에 실행되는 함수
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate...");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("componentDidMount...");
  }

  componentDidUpdate() {
    console.log("componentDidMount...");
  }

  //소멸단계에서 실행되는 함수
  componentWillUnmount() {
    console.log(" componentWillUnmount...");
  }

  render() {
    const tit = this.props.tit;
    console.log("render...");

    return (
      <div className="LifeCycleCompo">
        <h4>LifeCycleCompo</h4>
        <p>{tit}</p>
      </div>
    );
  }
}

export default LifeCycleCompo;
