import React, { useState } from 'react';

const StateCompo1 = () => {

    // 상태값(state, 컴포넌트 내부에서 바뀔 수 있는 값) 선언
    const [num, setNum] = useState(0);
    return (
        <div className="StateCompo1">
            <h4>상태값 num : {num} </h4>
            <button onClick={()=>{setNum(num+1)}}>증가</button>
            <button onClick={()=>{setNum(num-1)}}>감소</button>
        </div>
    );
};

export default StateCompo1;