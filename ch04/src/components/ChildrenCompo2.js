import React, { Component } from 'react';

class ChildrenCompo2 extends Component {
    render() {

       
        return (
            <div className="ChildrenCompo2">
                내용 : {this.props.children}
            </div>
        );
    }
}

export default ChildrenCompo2;