import React from "react";

// 컴포넌트 태그 사이에 넣은 값을 조회하려면 props.children
function Wrapper({ children }) {
  const style = {
    border: "10px solid yellow",
    padding: "1em",
    fontSize: "2em",
  };
  return (
    <div style={style}>
      {/* children 을 props로 불러와서 컴포넌트 태그 사이에 보여지게 설정 */}
      {children}
    </div>
  );
}

export default Wrapper;
