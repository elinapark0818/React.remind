import React from "react";

// 1. props 로 가져와서 상위 컴포넌트 내부의 값을 조회하고, 대상 props를 불러온다
// 2. 구조분해할당으로 간결하게 상위 컴포넌트의 내부의 값을 불러와 대상 데이터를 가져온다
// 유의사항 : 대상의 이름이 같으면 하나로 쓸 수 있다.
// style={{ color = color }} ==> style={{ color }}

function Hello({ name, color, isSpecial }) {
  return (
    // jsx 에서 {}는 prop 을 불러온다는 것
    // jsx 에서 {{}} 객체 리터럴을 불러온다는 것
    <div style={{ color }}>
      {/* {isSpecial ? <b> 특별한 </b> : null} */}
      {/* &&연산자는 첫 번째 값을 false로 반환하고, 없으면 두 번째 값을 반환한다 */}
      {isSpecial && <b> 특별한 </b>}
      나의 이름은 : {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "undefined",
  color: "red",
};

export default Hello;
