const sym = Symbol();

const person = {
  name: 'Kim',
  address: 'Seoul',
  __proto__: { age: 20 },
  [sym]: 10 // symbol은 열거하지 않는다.
};

for (const key in person) {
  console.log(key + ': ' + person[key]);
}

// name: Kim
// address: Seoul
// age: 20