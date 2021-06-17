const sym = Symbol();

const person = {
  name: 'Kim',
  address: 'Seoul',
  __proto__: { age: 20 },
  [sym]: 10 // symbol은 열거하지 않는다.
};

console.log(Object.keys(person)); // [ 'name', 'address' ]
console.log(Object.values(person)); // [ 'Kim', 'Seoul' ]
console.log(Object.entries(person)); // [ [ 'name', 'Kim' ], [ 'address', 'Seoul' ] ]

Object.entries(person).forEach(([key, value]) => console.log(key, value));
// name Kim
// address Seoul