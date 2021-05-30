// 최대값을 외부에서 전달받는 피보나치 구현.

const fibonacciFunc = function (max) {
  let [pre, cur] = [0, 1];

  return {
    [Symbol.iterator]() {
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return { value: cur, done: cur >= max};
        }
      }
    }
  }
}

for (const num of fibonacciFunc(10)) {
  console.log(num); // 1 2 3 5 8
}

// fibonacciFunc 함수는 이터러블을 반환한다.
const iterable = fibonacciFunc(5);
// 이터러블의 Symbol.iterator 메서드는 이터레이터를 반환한다.
const iterator = iterable[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 5, done: true }

// iterable은 next를 호출할 수 없다.
console.log(iterable.next()); // TypeError: iterable.next is not a function