import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import Hello from "./components/Hello";
import Input from "./components/Input";
import Inputs from "./components/Inputs";
import InputsUseRef from "./components/Inputs_useRef";
import ArrayList from "./components/ArrayList";
import Wrapper from "./components/Wrapper";
import ArrList2 from "./개념/배열 렌더링";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import UseEffect from "./개념/useEffect";
import Props from "./개념/props";

function App() {
  // CreateUser 컴포넌트에 필요한 props를 설정하기
  const [inputs, setInputs] = useState({
    username: "",
    christianName: "",
    id: "",
  });

  // 비구조화 할당?
  const { username, christianName, id } = inputs;

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "윤정",
      christianName: "Elina",
      // 클릭하면 폰트색상이 변경되게 만들어보자
      active: true,
    },
    {
      id: 2,
      username: "후민",
      christianName: "Stephen",
      active: false,
    },
    {
      id: 3,
      username: "규리",
      christianName: "Matilda",
      active: false,
    },
  ]);

  // const user = [
  //   {
  //     id: 1,
  //     username: "윤정",
  //     christianName: "Elina",
  //   },
  //   {
  //     id: 2,
  //     username: "후민",
  //     christianName: "Stephen",
  //   },
  //   {
  //     id: 3,
  //     username: "규리",
  //     christianName: "Matilda",
  //   },
  // ];

  // useRef() 은 리렌더링 없이 변수 값의 변화를 줄 수 있다!
  // useRef 로 만들어진 객체는 전역에 저장되서 함수가 재호출 되어도 마지막으로 업데이트한 current 값이 유지된다
  const nextId = useRef(4);

  const onCreate = () => {
    const newUser = {
      id: nextId.current,
      username,
      christianName,
    };

    setUsers([newUser, ...users]);
    // concat으로도 할 수 있다.
    // setUsers(user.concat(newUser))

    //
    setInputs({
      username: "",
      christianName: "",
    });
    // 나중에 배열에 추가되는 항목에 대한 로직
    // id 값이 4부터 시작하게 만들었다.
    // (기존 배열에 아이디가 1,2,3 까지 잇어서)
    // nextId 는 ref 객체라서 속성 값이 바뀔 수 있다!!
    nextId.current += 1;
    // 오잉? 하나만 추가된다.
    // !아하 내가 useState 에 있는 값을 불러왔어야 했는데, user 배열을 따로 햇어서 그런거였다. 해결!
    // ? 하지만, 아직 새로고침하면 사라진다.
    // ? 당연하다. 초기값이 정해져 있으니
  };

  // onRemove
  // 외부에서 정의된 이벤트핸들러 또는 콜백함수로 파라미터를 넘길때는 화살표함수를 쓴다
  const onRemove = (id) => {
    // user.id 인 값을 빼고 나머지 값을 불러오게 하면 삭제기능 완성
    setUsers(users.filter((user) => user.id !== id));
  };

  // onToggle
  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  // onModify 수정
  const onModify = (user) => {
    setInputs({
      username: user.username,
      christianName: user.christianName,
      id: user.id,
    });
  };

  // onUpdate 업데이트
  const onUpdate = () => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, username: username, christianName: christianName }
          : user
      )
    );

    setInputs({
      username: "",
      christianName: "",
      id: "",
    });
  };

  return (
    <div>
      <Wrapper>
        {/* props 이름만 설정하고 값 설정을 생략하면 true 로 간주한다 */}
        {/* isSpecial={true} === isSpecial */}
        <Hello name="Elina" color="blue" isSpecial />
        {/* Hello.defaultProps 정해지지 않은 props를 할당한다 */}
        <Hello />
      </Wrapper>
      <Counter />
      <Input />
      <Inputs />
      <InputsUseRef />
      <ArrayList />
      <ArrList2 />
      <CreateUser
        username={username || ""}
        christianName={christianName || ""}
        onChange={onChange}
        onCreate={onCreate}
        onUpdate={onUpdate}
      />
      {/* onRemove 전달 */}
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
        onModify={onModify}
      />

      <UseEffect />
      <Props />
    </div>
  );
}

export default App;
