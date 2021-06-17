function Person(name) {
  this.name = name;
}

const me = new Person('Kim');

// Person.prototype이 me 객체의 프로토타입 체인 상에 존재.
console.log(me instanceof Person) // true

// Object.prototype이 me 객체의 프로토타입 체인 상에 존재.
console.log(me instanceof Object) // true
