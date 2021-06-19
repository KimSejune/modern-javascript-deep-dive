const person = {
  name: 'Kim',
  foo(callback) {
    setTimeout(callback, 100);
  }
};

person.foo(function () {
  console.log(`Hi! my name is ${this.name}.`); //Hi! my name is undefined.
  // 콜백함수가 일반함수 호출이라 this가 전역객체에 바인딩되어서 this.name이 undefined가 나온다.
});

