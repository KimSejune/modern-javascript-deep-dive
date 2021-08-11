const base = {
  name: 'Kim',
  sayHi() {
    return `Hi! ${this.name}`;
  }
}

const derived = {
  __proto__: base,
  // ES6 메서드 축약 표현으로 정의한 메서드다. 따라서 [[HomeObject]]를 갖는다.
  sayHi() {
    return `${super.sayHi()} ~~`
  }
}

console.log(derived.sayHi())