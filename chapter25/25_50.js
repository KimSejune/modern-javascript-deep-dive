class Person {
  // private field
  #name = '';

  // private field는 반드시 클래스 몸체에 정의해야한다.
  constructor(name) {
    // private field 참조
    this.#name = name;
  }
}

const me = new Person('Kim');
console.log(me.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class
