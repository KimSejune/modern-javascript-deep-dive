function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle.prototype으로부터 getArea 메소드를 상속받는다.
console.log(circle1.getArea === circle2.getArea); // true;
console.log(circle1.getArea());
console.log(circle2.getArea());