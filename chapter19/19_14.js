function Person(name) {
  this.name = name;
}

const me = new Person('Kim');

console.log(me.constructor === Person); // true