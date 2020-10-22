import React, { Component } from 'react';

class ChildrenCompo1 extends Component {
    render() {
        // 컴포넌트 내용
        const content = this.props.children;

        return (
            <div className="ChildrenCompo1">
                <em>ChildrenCompo1</em>
                <p>
                    내용 : {content}
                </p>
            </div>
        );
    }
}

export default ChildrenCompo1;