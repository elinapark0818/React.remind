import React, { useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);

  // 배열의 첫 번째 원소는 현재 상태
  // 배열의 두 번째 원소는 Setter 함수 ()
  // const numState = useState(0);
  // const num = numState[0]
  // const setNum = numState[1]

  const onIncrease = () => {
    console.log("+ 1");
    setNum((preNum) => preNum + 1);
  };

  const onDecrease = () => {
    console.log("- 1");
    setNum((preNum) => (preNum <= 0 ? 0 : preNum - 1));
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={onIncrease}>+ 1</button>
      <button onClick={onDecrease}>- 1</button>
    </div>
  );
}

export default Counter;
