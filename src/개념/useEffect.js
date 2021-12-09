import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  // const handleAlertClick = () => {
  //   setTimeout(() => {
  //     alert(count + "번 클릭됨!");
  //   }, 3000);
  // };

  // 순차적으로 로그가 연속으로 출력출력됨
  useEffect(() => {
    setTimeout(() => {
      console.log(`${count} 번 클릭됨!!!`);
    }, 3000);
  });

  return (
    <div>
      <p>당신은 {count}번 클릭했습니다!</p>
      <button onClick={() => setCount(count + 1)}>클릭!</button>
      {/* <button onClick={handleAlertClick}>알럿!</button> */}
    </div>
  );
}

export default UseEffect;
