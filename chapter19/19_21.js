// 함수 표현식은 호이스팅안된다.
// console.log(Person.prototype); // ReferenceError: Person is not defined

// 화살표 함수는 non-constructor이다.
const Person = name => {
  this.name = name;
};

console.log(Person.prototype); // undefined