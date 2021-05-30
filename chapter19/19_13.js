function Person(name) {
  this.name = name;
}

const me = new Person('Kim');

// 둘은 같은 값을 가진다.
console.log(me.__proto__ === Person.prototype); // true