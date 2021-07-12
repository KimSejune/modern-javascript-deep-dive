var funcs = [];

// var 키워드로 선언한 i가 함수 레벨 스코프를 가져서 전역 변수이다.
for (var i = 0; i < 3; i++) {
  console.log(i) // 0 1 2
  funcs[i] = function () { 
    console.log(i) // 3 3 3
    return i; 
  };
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]()); // 3 3 3
}