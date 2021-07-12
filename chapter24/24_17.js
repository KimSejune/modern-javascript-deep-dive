function Person(name, age) {
  this.name = name; // public
  let _age = age; // private
}

Person.prototype.sayHi = function () {
  console.log(`Hi! My name is ${this.name}. I am ${_age}`); // ReferenceError: _age is not defined
};

const me = new Person('Kim', 29);
me.sayHi(); // Hi! My name is Kim. I am 29
console.log(me.name); // Kim
console.log(me._age); // undefined

const you = new Person('jo', 28);
you.sayHi(); // Hi! My name is jo. I am 28
console.log(you.name); // jo
console.log(you._age); // undefined