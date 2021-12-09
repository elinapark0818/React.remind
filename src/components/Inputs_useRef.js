import React, { useRef, useState } from "react";

function InputsUseRef() {
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });

  // useRef 로 관리하는 변수는 값이 바뀌어도 컴포넌트가 리렌더링되지 않는다.
  // useRef 로 관리하고 있는 변수는 설정 후 바로 조회할 수 있다!
  const nameInput = useRef();
  const nickNameInput = useRef();

  const { name, nickName } = inputs;

  const onChange = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickName: "",
    });
    nameInput.current.focus();
  };
  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickName"
        placeholder="별명"
        onChange={onChange}
        value={nickName}
        ref={nickNameInput}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickName})
      </div>
    </div>
  );
}

export default InputsUseRef;
