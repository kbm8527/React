import React, { Component } from "react";

class RefCompo1 extends Component {
  //ref속성값 생성
  uidRef = React.createRef();

  onclickHandler1 = () => {
    document.getElementById("uid").focus();
  };
  onclickHandler2 = () => {
    this.uidRef.current.focus();
  };

  render() {
    return (
      <div className="RefCompo1">
        <strong>RefCompo1</strong>
        <br />

        {/* Dom 식별값을 id로 지정 */}
        <input type="text" neme="uid" id="uid" />
        <button onClick={this.onclickHandler1}>선택</button>

        {/* Dom 식별값을 ref로 지정 */}
        <strong>RefCompo1</strong>
        <input type="text" neme="uid" ref={this.uidRef} />
        <button onClick={this.onclickHandler2}>선택</button>
      </div>
    );
  }
}

export default RefCompo1;
