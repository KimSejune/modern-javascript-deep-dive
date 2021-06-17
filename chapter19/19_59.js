const person = {
  name: 'Lee',
  address: 'Seoul'
};

console.log('name' in person); // true
console.log('address' in person); // true
console.log('age' in person); // false

// Prototype Chain안에 존재하기 때문이다.
console.log('toString' in person); // true