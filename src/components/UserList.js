import React, { useEffect } from "react";

function User({ user, onRemove, onToggle, onModify }) {
  // useEffect
  // 첫번째 파라미터에는 함수(cleanup 함수로써, useEffect에 대한 뒷정리를 해준다)
  // 두번째 파라미터에는 의존값이 들어있는 배열(deps)
  // 두번째 파라미터가 비어있다면, 컴포넌트가 처음 나타낼때만 useEffect에 등록한 함수가 호출된다
  // useEffect(() => {
  //   console.log("user 값 설정");
  //   console.log(user);

  // useEffect 에서 사용하는 상태 또는 props 가 있다면 deps 안에 넣어줘야 한다. (규칙)
  // deps 안에 넣지 않으면 useEffect에 등록한 함수가 실행될 때 최신 상태가 들어가지 않는다.
  //   return () => {
  //     console.log("user 값이 바뀌기 전");
  //     console.log(user);
  //   };
  // });

  // deps 파라미터를 생략할 경우, 컴포넌트가 리렌더링될 때마다 호출된다.
  // ! 리액트 컴포넌트는 기본적으로 부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링된다.

  useEffect(() => {
    console.log(user);
  });
  return (
    <div>
      <span>{user.username}</span>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "red" : "black",
          fontSize: user.active ? "2em" : "1em",
        }}
        // onToggle 클릭시 발생할 이벤트로 등록
        onClick={() => onToggle(user.id)}
      >
        {user.christianName}
      </b>
      {/* onRemove = id 가 user.id 인 객체를 삭제해라 */}
      <button onClick={() => onRemove(user.id)}>삭제</button>
      <button onClick={() => onModify(user)}>수정</button>
    </div>
  );
}

// onRemove 함수를 User에 전달받게 해서, User 컴포넌트에 전달한다
function UserList({ users, onRemove, onToggle, onModify }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onModify={onModify}
        />
      ))}
    </div>
  );
}

export default UserList;
