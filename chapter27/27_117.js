// 요소의 중복 횟수 구하기

const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];

const count = fruits.reduce((acc, cur) => {
  // 첫번째 순회시 acc 초기값인 {}이다.
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

console.log(count); // { banana: 1, apple: 2, orange: 2 }