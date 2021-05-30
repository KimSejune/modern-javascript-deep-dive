function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  }
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

// getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유하는 문제점 발생.
console.log(circle1.getArea === circle2.getArea); // false;
console.log(circle1.getArea());
console.log(circle2.getArea());