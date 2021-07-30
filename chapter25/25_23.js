class Person {
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }

  // Prototype Method
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const me = new Person('Kim');
me.sayHi(); // Hi! My name is Kim

Object.getPrototypeOf(me) === Person.prototype; // true
me instanceof Person // true

Object.getPrototypeOf(Person.prototype) === Object.prototype; // true
me instanceof Object; // true

me.constructor === Person; // true