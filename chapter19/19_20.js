// 함수 정의(constructor)가 평가되어 함수 객체를 생성하는 시점에 Prototype도 생성.
console.log(Person.prototype); // Person {}

function Person(name) {
  this.name = name;
}