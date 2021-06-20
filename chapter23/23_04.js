var x = 1;
const y = 2;

function foo(a) {
  var x = 2;
  const y = 4;

  function bar (b) {
    const z = 5;
    console.log(a + b + x + y + z); // 20 + 10 + 2 + 4 + 5 = 41
  }
  bar(10);
}

foo(20);