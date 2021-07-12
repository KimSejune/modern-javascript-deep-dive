const Person = (function () {
  let _age = 0; // private

  function Person(name, age) {
    this.name = name; // public
    _age = age;
  }
  
  Person.prototype.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}`); // ReferenceError: _age is not defined
  };

  // 생성자 함수 반환
  return Person;
})();

const me = new Person('Kim', 29);
me.sayHi(); // Hi! My name is Kim. I am 29
console.log(me.name); // Kim
console.log(me._age); // undefined

const you = new Person('jo', 28);
you.sayHi(); // Hi! My name is jo. I am 28
console.log(you.name); // jo
console.log(you._age); // undefined

// _age의 변수 값이 변경된다.
me.sayHi(); // Hi! My name is Kim. I am 28