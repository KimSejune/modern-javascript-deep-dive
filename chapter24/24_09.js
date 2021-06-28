// 카운트 상태 변수
let num = 0;

const increase = function () {
  return ++num;
}

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3

// 상태값이 전역에서 관리되어 위험하다.