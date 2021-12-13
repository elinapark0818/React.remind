class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  }
  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  }
}

// Person 의 속성과 메소드를 상속받아 새로운 클래스 Teacher를 생성한다
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    // 속성을 그대로 상속하기 위해 super 사용한다 (Person에 있는 속성)
    super(first, last, age, gender, interests);
    // 추가 되는 속성을 this 로 값을 설정한다
    this.subject = subject;
    this.grade = grade;
  }
}

let snape = new Teacher(
  "Severus",
  "Snape",
  58,
  "male",
  ["Potions"],
  "Dark arts",
  5
);

console.log(snape.greeting()); // Hi! I'm Severus.
console.log(snape.farewell()); // Severus has left the building. Bye for now.
console.log(snape.age); // 58
console.log(snape.subject); // Dark arts

// .__proto__ 를 통해 부모 클래스의 프로토타입 또는 부모의 부모 클래스의 프로토타입을 탐색할 수 있다

console.log(snape.__proto__);
console.log(Teacher.__proto__);
