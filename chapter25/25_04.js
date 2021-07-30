// 클래스 선언문
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name; // name property는 public하다.
  }

  // Prototype Method
  sayHi() {
    console.log(`Hi My name is ${this.name}`)
  }

  // Static Method
  static sayHello() {
    console.log('Hello');
  }
}

console.log(typeof Person)
// 인스턴스 생성
const me = new Person('Kim');
// Call Prototype Method
console.log(me.name);// Kim

me.sayHi(); // Hi My name is Kim
// Call Static Method
Person.sayHello(); // Hello