function* genFunc() {
  // x 변수의 값은 next 메서드가 두번째 호출될 때 결정된다.
  const x = yield 1;
  console.log('x :', x); // 2번째로 next를 호출할 때 넘겨준 12 가 나온다.
  const y = yield (x + 10);
  console.log('y :', y);
  return x + y;
}

const generator = genFunc();

let res = generator.next();
console.log(res); // { value: 1, done: false }

res = generator.next(12);
console.log(res); // { value: 22, done: false }

res = generator.next(20);
console.log(res); // { value: 32, done: true }