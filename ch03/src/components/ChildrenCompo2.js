import React from 'react';

const ChildrenCompo2 = ({children}) => {

    return (
        <div className="ChildrenCompo2">
            <strong>ChildrenCompo2 태그내용을 갖는 컴포넌트</strong>
            <p>
                {children}
            </p>
        
        </div>
    );
};

export default ChildrenCompo2;