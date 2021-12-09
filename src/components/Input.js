import React, { useState } from "react";

function Input() {
  // 변경되는 값은 useState 로 관리해야한다.
  const [txt, setTxt] = useState("");

  // event에 등록하는 함수는 이벤트 객체 event 를 파라미터로 받아와서 사용할 수 있다
  const onChange = (event) => {
    // console.log(event.target.value);
    // event.target 은 이벤트가 발생한 DOM을 가리킨다
    // input 안의 상태를 관리하기 위해 value 값을 설정한다
    setTxt(event.target.value);
  };
  const onReset = () => {
    setTxt("");
  };

  return (
    <div>
      {/* input DOM */}
      <input onChange={onChange} value={txt} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : {txt}</b>
      </div>
    </div>
  );
}

export default Input;
