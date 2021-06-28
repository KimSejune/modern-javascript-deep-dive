const increase = (function () {
  // 카운트 상태 변수
  let num = 0;

  // 클로저
  return function() {
    // 카운트 상태 변경.
    // 중첩함수에서 외부함수의 변수를 참조.
    // 중첩함수가 외부함수보다 오래 유지됨.
    return ++num;
  }
})();

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3