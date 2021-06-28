const Counter = (function () {
  let num = 0;
  function Counter() {
    // 프로퍼티는 public하므로 은닉되지 않는다.
  }

  Counter.prototype.increase = function () {
    return ++num;
  };

  Counter.prototype.decrease = function () {
    return num > 0 ? --num : 0;
  };

  return Counter;
})();

const counter = new Counter();

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.increase()); // 3

console.log(counter.decrease()); // 2
console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0