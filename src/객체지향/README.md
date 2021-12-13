## 객체 지향 프로그래밍(OOP)

1. OOP는 프로그램 설계 철학 중 하나이다.
2. OOP는 객체로 그룹화된다.
3. OOP는 한번 만들어지면 메모리 상에서 반환되기 전까지 객체 내 모든 것이 유지된다.
4. OOP는 4가지 주요개념을 통해 "재사용성"을 얻을 수 있다.

- OOP의 4가지 주요 개념
  - Encapsulation (캡슐화)
  - Inheritance (상속)
  - Abstraction (추상화)
  - Polymorphism (다형성)

객체 지향 프로그래밍은 하나의 모델이 되는 청사진(blueprint)을 만들고, 그 청사진을 바탕으로 한 객체를 만드는 프로그래밍 패턴입니다.

단순히 변수와 함수를 순차적으로 작동시키는 것을 넘어서
데이터의 접근과 데이터 처리 과정(기능)에 대한 모형(원형 모델?)을 만들어내는 방식을 통해

<b>데이터의 접근과 기능을 별개로 취급하지 않고 묶어서 처리할 수 있게 되었다.</b>

자바스크립트는 객체지향언어는 아니지만 객체지향패턴으로 작성할 수 있다!

---

```
function Car(brand, name, color) {}

let a = new Car('GM', 'blooming', 'blue')
let b = new Car('BMW', 'mini','red')
let c = new Car('KIA','spo','black')
```

### Class

원형 객체(original form)으로, 객체를 생성하기 위한 아이디어나 청사진
세부 사항(속성)을 넣으면 객체가 된다.

- 클래스를 만드는 암묵적 규칙으로 대문자,명사 로 정의한다.

- 일반 함수는 소문자, 동사로 시작하는 카멜표기법을 적용

### Instance object

청사진으로 만든 하나의 객체로 클래스의 세부사항(속성)이다.

새로운 인스터스를 만드는 방법은 new 로 호출하는 방법이 있다

### ES6

class 를 통해 클래스를 생성할 수 있고,
constructor 함수에 실행될 코드를 담아 선언한다.

<!-- ! constructor 는 return 값을 만들지 않는다 -->

```
class Car {
  constructor(brand, name, color) {
    // 인스턴스가 만들어질 때 실행되는 코드
  }
}
```

### new

인스턴스를 만들 때에는 new 를 사용한다
각각의 인스턴스는 클래스의 고유한 속성과 메소드를 갖는다.

```
let a = new Car('GM', 'blooming', 'blue')
let b = new Car('BMW', 'mini','red')
let c = new Car('KIA','spo','black')
```

### 속성

속성은 brand, name, color 등의 속성이름을 말하고
메소드는 객체에 딸린 함수로 운전, 연료주입, 속력 설정 등이 해당된다.

### this

this 는 인스턴스 객체를 의미한다.
this에 할당한다는 것은 인스턴스에 해당 값을 부여하겠다는 의미이다.

```
class Car {
  constructor(brand, name, color) {
    this.brand = brand;
    this.name = name;
    this.color = color;
  }
}
```

### 메소드

일반 함수로 클래스를 생성했다면 prototype으로 접근해서
메소드를 생성할 수 있다.

```
function Car(brand, name, color) {

}

Car.prototype.refuel = function() {
  console.log(this.name + '에 연료를 주입합니다.')
}
Car.prototype.drive = function() {
  console.log(this.name '가 운전을 시작합니다.')
}
```

### ES6

class 안쪽에 묶어서 메소드를 생성할 수 있다.

```
class Car {
  constructor(brand, name, color) {

  }
  refuel() {
    console.log(this.name + '에 연료를 주입합니다.')
  }
  drive() {
    console.log(this.name '가 운전을 시작합니다.')
  }
}
```

### prototype, constructor, this

- prototype : 모델의 <b>청사진</b>을 만들 때 쓰는 원형 객체(original form)

- constructor : 인스턴스가 초기화될 때 실행되는 <b>생성자 함수</b>

- this : 함수가 실행될 때, 해당 스코프마다 생성되는 고유한 <b>실행 context(execution context)</b>
  new 키워드로 인스턴스를 생성했을 때에는 해당 인스턴스가 this의 값이 된다.

### 예제(배열)

```
let arr = new Array('brand', 'name', 'color')
arr.push('price')
arr.length  // 4
```

push 는 원형객체에 정의되어 있다.
Array.prototype.push()

---

### OOP의 4가지 주요 개념

- Encapsulation (캡슐화)
- Inheritance (상속)
- Abstraction (추상화)
- Polymorphism (다형성)

### 1. Encapsulation (캡슐화)

1. 데이터와 기능을 하나의 단위로 묶는 것(느슨하게 결합)
2. 은닉화 : 내부 데이터나 구현이 외부로 노출되지 않도록 숨기는 것
3. 언제든 구현을 수정할 수 있다

\*\* 느슨한 결합 : 코드가 상징하는 실제 모습과 비슷하게 코드를 몽아 결합하는 것을 의미한다. (!== 코드 실행 순서에 따라 절차적으로 코드 작성)

\*\* 은닉화 : 디테일한 구현이나 데이터는 숨기고 객체 외부에서 필요한 동작(메소드)만 노출시켜야 한다.

은닉화의 특징을 살려서 코드를 작성하면 객체 내 메소드의 구현만 수정하고, 노출된 메소드를 사용하는 코드 흐름은 바뀌지 않도록 만들 수 있다.

속성의 직접적인 접근을 막고, 설정하는 함수(setter) 와 불러오는 함수(getter)를 철저하게 나누기도 한다.

<b>코드가 복잡하지 않게 만들고, 재사용성을 높힌다.</b>

### 2. Abstraction (추상화)

내부 구현은 복잡하지만, 실제로 노출되는 부분은 단순하게 만든다는 개념이다.

예를들어 전화라는 객체가 있는데 이 객체 안에는 통화기능을 구현하기 위해 복잡한 구조가 설정되어 있지만
우리는 복잡한 구조를 생각하지 않고 단순하게 통화기능을 실행할 수 있다.

1. 추상화를 통해 인터페이스가 단순해진다
2. 너무 많은 기능들이 노출되지 않았기에, 예기치 못한 사용성의 변화가 발생하지 않도록 만들 수 있다.

\*\* 단순한 이름을 정의하는 것에 포커스를 맞춰져 있다

<b>코드가 복잡하지 않게 만들고, 단순화된 사용으로 변화에 대한 영향을 최소화시킨다.</b>

### 3. Inheritance (상속)

부모 클래스에 있는 속성 및 메소드를 자식 클래스가 이어받는다.

<b>효율적으로 속성/메소드가 추가된 클래스를 사용할 수 있다.</b>

### 4. Polymorphism (다형성)

다양한 형태를 가질 수 있다

예를 들어 '울음소리'는 '입에서 나오는 소리'를 뜻하는데
각기 다른 동물들의 울음소리를 메소드는 같지만, 구현되는 방식(울음소리)이 여러가지 형태가 각각 구현된다.

만약 언어에서 다형성을 제공하지 않는다면, 부모 클래스에 종류별로 분기를 시켜서 각각 다르게 만들어야 한다.

ex 불필요한 분기처리...

```
if (type === 'select') {
  renderSelect()
}
else if (type === 'text') {
  renderTextBox()
}
else if (type === 'checkbox') {
  renderCheckBox()
}
```

```
<html>
  <body>
    <textArea></textArea>
    <select></select>
    <checkbox></checkbox>
  </body>
</html>
```

<b>불필요한 분기를 최소화한다.</b>

### toString()

문자열을 반환하는 Object의 대표적인 방법

모든 객체에는 toString() 메소드가 존재한다.
(객체가 텍스트 값으로 표시되거나 문자열이 예상되는 방식으로 참조될 때 자동으로 호출되는 메소드)

기본적으로 toString() 메소드는 Object에서 비롯된 모든 객체에 상속된다.

toString()이 객체 내에서 재정의되지 않으면 [Object type]을 반환한다.

```
const obj = new Object()
obj.toString() // '[Object Object]'
```

### .\_\_proto\_\_ 를 통해 부모 클래스의 프로토타입 또는 부모의 부모 클래스의 프로토타입을 탐색할 수 있다
