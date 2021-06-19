// this는 어디서든 참조 가능하다.
// 전역에서는 window를 가리킨다.
// strict 모드에서는 undefined 이다.
console.log(this); // window

function square(number) {
  // 일반 함수 내부에서 this는 window를 가리킨다.
  console.log(this); // window
  return number * number;
}
square(2);

const person = {
  name: 'Kim',
  getName() {
    // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
    console.log(this); // { name: 'Kim', getName: [Function: getName] }
    return this.name;
  }
};
console.log(person.getName()); // Kim

function Person(name) {
  console.log(this); // Person {} 아직 할당하기 전이다.
  this.name = name;
  console.log(this); // Person { name: 'Kim' }
}


const ne = new Person('Kim');
