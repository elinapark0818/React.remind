import React, { useState } from "react";

function Inputs() {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  // 비구조화 할당을 통해 값을 추출한다
  const { id, password } = inputs;

  const onChange = (event) => {
    // 입력될 값(value)과 name을 event.target 에서 추출해 와서
    const { value, name } = event.target;
    // 기존의 객체를 수정하면 안된다.
    // 새로운 객체를 스프레드 문법으로 작성하고,
    // 변화를 준 것을 갱신될 함수에 넣어줘야 한다.
    setInputs({
      // 기존에 있던 input 객체를 복사해서 가져온 뒤
      ...inputs,
      // 새로 작성되는 값을 name 키를 가진 value 로 설정한다
      [name]: value,
    });
    // console.log(event.target.value); // 잘 가져오는 지 확인차 콘솔로그
  };

  const onReset = () => {
    setInputs({
      name: "",
      password: "",
    });
  };
  return (
    <div>
      <input
        name="id"
        placeholder="아이디"
        // input에 value 가 undefined 일 경우 처리를 해주자.
        value={id || ""}
        onChange={onChange}
      />
      <input
        name="password"
        type="password"
        placeholder="비밀번호"
        // input에 value 가 undefined 일 경우 처리를 해주자.
        value={password || ""}
        onChange={onChange}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>아이디 : </b>
        {id}
        <br />
        <b>비밀번호 : </b>
        {password}
      </div>
    </div>
  );
}

export default Inputs;
