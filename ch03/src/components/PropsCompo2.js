import React from 'react';

// 속성값을 비구조화 할당방식으로 전달
const PropsCompo2 = ({name,age,addr}) => {
    

    return (
        <div className="PropsCompo2">
            <strong>PropsCompo2 속성을 갖는 컴포넌트</strong>
            <p>
                이름 : {name} <br/>
                나이 : {age} <br/>
                주소 : {addr} <br/>

            </p>
        </div>
    );
};

export default PropsCompo2;