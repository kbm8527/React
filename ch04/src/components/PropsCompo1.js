import React, { Component } from 'react';

class PropsCompo1 extends Component {
    render() {
        //부모 컴포넌트로 전달된 속성값
        const title = this.props.title;
        const content = this.props.content;


        return (
            <div className="PropsCompo1">
                <em>PropsCompo1</em>
                <p>
                    제목 : {title}<br/>
                    내용 : {content}<br/>
                </p>
            </div>
        );
    }
}

export default PropsCompo1;