// 무한 이터러블

const fibonacciFunc = function() {
  let [pre, cur] = [0, 1];

  // Symbol.iterator 메소드와 next 메소드를 소유한 이터러블이면서 이터레이터인 객체를 반환.
  return {
    [Symbol.iterator]() { return this; },
    // next 메서드는 이터레이터 리절트 객체를 반환.
    next() {
      [pre, cur] = [cur, pre + cur];
      // 무한을 구현해야 하므로 done 프로퍼티 생략한다.
      return {value: cur };
    }
  }
}

// iter는 이터러블이면서 이터레이터이다.
// iter는 이터러블이므로 for...of 문으로 순회가 가능하다.
const iter = fibonacciFunc();
// for (const num of iter) {
//   if (num > 10) break;
//   console.log(num); // 1 2 3 5 8
// }

// iter는 이터레이터이므로 next 호출가능.
console.log(iter.next()) // { value: 1 }
console.log(iter.next()) // { value: 2 }
console.log(iter.next()) // { value: 3 }
console.log(iter.next()) // { value: 5 }


for (const num of fibonacciFunc()) {
  if (num > 10000) break;
  console.log(num); // 1 2 3 ... 6765
}

const [f1, f2, f3] = fibonacciFunc();
console.log(f1, f2, f3); // 1 2 3
