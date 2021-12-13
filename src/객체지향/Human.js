class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log(`${this.name}은 잠에 들었습니다`);
  }
}

let kimcoding = new Human("김코딩", 30);

console.log(Human.prototype.constructor === Human);
console.log(Human.prototype === kimcoding.__proto__);
console.log(Human.prototype.sleep === kimcoding.sleep);

// .prototype
// Human -> Human.constructor.sleep

// new Human(); instantiation
// Human.constructor.sleep -> kimcoding.sleep

// .__proto__
// kimcoding.sleep -> Human.constructor.sleep

// .constructor
// Human.constructor.sleep -> Human
