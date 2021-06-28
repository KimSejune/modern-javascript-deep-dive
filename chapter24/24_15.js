const counter = (function () {
  let num = 0;

  return function (predicate) {

    num = predicate(num);
    return num;
  }
})();

// 보조함수
function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}


console.log(counter(increase)); // 1
console.log(counter(increase)); // 2

console.log(counter(decrease)); // 1
console.log(counter(decrease)); // 0