var funcs = [];

// var 키워드로 선언한 i가 함수 레벨 스코프를 가져서 전역 변수이다.


for (var i = 0; i < 3; i++) {
  funcs[i] = (function(id) { // 전역 변수 i에 할당되어 있는 값을 인수로 전달받아 id에 할당한 후 중첩 함수를 반환하고 종료된다.
    return function () {
      return id;
    };
  }(i));
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]()); // 0 1 2
}