function ArrList2() {
  const arr = [
    {
      id: 4,
      num: "1",
      text: "하나",
    },
    {
      id: 5,
      num: "2",
      text: "둘",
    },
    {
      id: 6,
      num: "3",
      text: "셋",
    },
    {
      id: 7,
      num: "4",
      text: "넷",
    },
  ];
  return (
    <div>
      {arr.map((i, index) => (
        // key 가 없으면 에러메시지가 뜬다.
        // key를 인덱스로 설정했더니, 1부터 인덱스가 매겨졌다.
        // key 값을 설정해야 기존 값을 그대로 두고 원하는 곳에 내용을 삽입하거나, 삭제할 수 있다
        <Num i={i} key={index} />
      ))}
    </div>
  );
}

function Num({ i }) {
  return (
    <div>
      <b>{i.num}</b>
      <br />
      <span>{i.text}</span>
    </div>
  );
}

export default ArrList2;
