class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const square = new Square(100, 100);
console.log(square.area()); // 10000