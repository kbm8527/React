import React, { Component } from 'react';

class StateCompo1 extends Component {
   
    // 상태값 선언
    state = {num: 0};
   
    render() {
       
        let stateNum = this.state.num;


        return (
            <div className="StateCompo1">
                <em>StateCompo1</em>
                <p>
                    상태값 num : {stateNum}
                </p>
                <button onClick={()=>{this.setState({num:stateNum+1})}}>증가</button>
                <button onClick={()=>{this.setState({num:stateNum-1})}}>감소</button>
            </div>
        );
    }
}

export default StateCompo1;