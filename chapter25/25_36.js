class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // setter
  set fullName(name) {
    [ this.firstName, this.lastName ] = name.split(' ');
  }
}

const me = new Person('Sejune', 'Kim');

console.log(`${me.firstName} ${me.lastName}`); // Sejune Kim

me.fullName = 'Suhyun Jo';

console.log(me); // Person { firstName: 'Suhyun', lastName: 'Jo' }

console.log(me.fullName); // Suhyun Jo

// 갹채 라터럴과 달리 enumerable이 false다.
console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'fullName')) 
// { get: [Function: get fullName],
//   set: [Function: set fullName],
//   enumerable: false,
//   configurable: true }

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(me))); // [ 'constructor', 'fullName' ]
// 접근자 프로퍼티 fullName도 class에서는 프로토타입의 프로퍼티가 된다.