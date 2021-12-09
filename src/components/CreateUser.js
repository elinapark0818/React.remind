import React from "react";

function CreateUser({ username, christianName, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="이름"
        // 입력되는 값으로 변화하도록
        onChange={onChange}
        value={username}
      />
      <input
        name="christianName"
        placeholder="세례명"
        // 입력되는 값으로 변화하도록
        onChange={onChange}
        value={christianName}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUser;
