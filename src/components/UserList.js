import React from "react";

function User({ user, onRemove, onToggle, onModify }) {
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
