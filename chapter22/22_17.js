function Circle(radius) {
  // 생성자 함수 내부의 this에는 생성자 함수가 생성할 인스턴스가 바인딩된다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20

const circle3 = Circle(15);

console.log(circle3); // undefined
console.log(radius); // 15 일반 함수 호출로 인하여 내부의 this는 전역객체를 가리킨다.
console.log(circle3.getDiameter()); // TypeError: Cannot read property 'getDiameter' of undefined

