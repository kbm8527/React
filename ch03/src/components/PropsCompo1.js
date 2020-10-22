import React from 'react';

const PropsCompo1 = (props) => {

    // 부모 컴포넌트로 부터 전달된 속성값 대입
    let title = props.title;
    let message = props.message;
   

    return (
        <div className="PropsCompo1">
            <strong>PropsCompo1 속성을 갖는 컴포넌트</strong>
            <p>
                제목 : {title} <br/>
                내용 : {message} <br/>

            </p>
        </div>
    );
};

export default PropsCompo1;