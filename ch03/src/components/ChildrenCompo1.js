import React from 'react';

const ChildrenCompo1 = (props) => {

    let content = props.children;

    return (
        <div className="ChildrenCompo1">
            <strong>ChildrenCompo1 태그내용을 갖는 컴포넌트</strong>
            <p>
                {content}
            </p>
        
        </div>
    );
};

export default ChildrenCompo1;