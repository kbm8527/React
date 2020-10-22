import React, { Component } from 'react';

class PropsCompo2 extends Component {
    render() {
        // 비구조화 할당방식
        const {name, age, addr} = this.props



        //const name = this.props.name;
        //const age = this.props.age;
        //const addr = this.props.addr;

        return (
            <div className="PropsCompo2">
                <em>PropsCompo2</em>
                <p>
                    이름 : {name}<br/>
                    나이 : {age}<br/>
                    주소 : {addr}<br/>

                </p>

            </div>
        );
    }
}

export default PropsCompo2;