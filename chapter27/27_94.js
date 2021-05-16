const todos = [
  { id: 4, content: 'JavaScript'},
  { id: 1, content: 'HTML'},
  { id: 2, content: 'CSS'}
];

function compare(key) {
  // 프로퍼티 값이 문자열인 경우 - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
  return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
}

todos.sort(compare('id'));
console.log(todos);
// [
//   { id: 1, content: 'HTML' },
//   { id: 2, content: 'CSS' },
//   { id: 4, content: 'JavaScript' }
// ]

todos.sort(compare('content'));
console.log(todos);
// [
//   { id: 2, content: 'CSS' },
//   { id: 1, content: 'HTML' },
//   { id: 4, content: 'JavaScript' }
// ]
