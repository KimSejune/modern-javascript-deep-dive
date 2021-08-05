class Person {
  // private field
  #name = '';

  constructor(name) {
    // private field 참조
    this.#name = name;
    console.log(this)
  }

  // 접근자 필드로는 private값을 간접적으로 접근할 수 있다.
  get name() {
    return this.#name.trim();
  }
}

const me = new Person(' Kim');
console.log(me.name); // Kim
