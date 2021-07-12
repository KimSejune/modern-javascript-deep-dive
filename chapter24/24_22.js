var funcs = [];

for (let i = 0; i < 3; i++) {
  // let 키워드로 선언한 변수를 사용하면 for문의 코드 블록이 반복 실행될 때마다 새로운 Lexical Environment가 생성된다.
  funcs[i] = function () { 
    return i; 
  };
}

for (let i = 0; i < funcs.length; i++) {
  console.log(funcs[i]()); // 0 1 2
}