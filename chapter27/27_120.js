// 중복 요소 제거

const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

const result = values.reduce((acc, cur, i, arr) => {
  if (arr.indexOf(cur) === i) acc.push(cur);
  return acc;
}, []);

console.log(result) // [ 1, 2, 3, 5, 4 ]

// filter를 통한 제거 방법
const result2 = values.filter((v, i, arr) => arr.indexOf(v) === i);
console.log(result2); // [ 1, 2, 3, 5, 4 ]

// set을 이용한 방법.
const result3 = [...new Set(values)];
console.log(result3); // [ 1, 2, 3, 5, 4 ]