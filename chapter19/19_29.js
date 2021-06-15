function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
}

const me = new Person('Kim');

console.log(me.hasOwnProperty('name')); // true