function makeCounter() {
  return {
    value: 0,
    increase: function () {
      this.value++; // 메소드 호출을 할 경우, this는 makeCounter 함수가 리턴하는 익명의 객체입니다
    },
    decrease: function () {
      this.value--;
    },
    getValue: function () {
      return this.value;
    },
  };
}

let counter1 = makeCounter();
counter1.increase();
counter1.getValue(); // 1

let counter2 = makeCounter();
counter2.decrease();
counter2.decrease();
counter2.getValue(); // -2
