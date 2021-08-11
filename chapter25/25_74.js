class Rectangle {
  constructor(width, height) {
    // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this) // ColorRectangle {}
    // new 연산자와 함께 호출된 함수는 ColorRectangle 이다.
    console.log(new.target) // [class ColorRectangle extends Rectangle]

    // 생성된 인스턴스의 프로토타입으로 ColorRectangle.prototype이 설정된다.
    console.log(Object.getPrototypeOf(this) == ColorRectangle.prototype) // true
    console.log(this instanceof ColorRectangle); // true
    console.log(this instanceof Rectangle); // true

    // 인스턴스 초기화
    this.width = width;
    this.height = height;
    console.log(this) // ColorRectangle { width: 2, height: 4 }
  }

  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `width = ${this.width}, height = ${this.height}`;
  }
}

class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height);
    // super가 반환한 인스턴스가 this에 바인딩된다.
    // 서브클래스는 별도의 인스턴스를 생성하지 않는다.
    console.log(this); // ColorRectangle { width: 2, height: 4 }
    // 인스턴스 초기화
    this.color = color;
    
    // 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
    console.log(this); // ColorRectangle { width: 2, height: 4, color: 'red' }
  } 

  // 메서드 오버라이딩
  toString() {
    return `${super.toString()}, color = ${this.color}`;
  }
}

const colorRectangle = new ColorRectangle(2, 4, 'red');

console.log(colorRectangle) // ColorRectangle { width: 2, height: 4, color: 'red' }
// 상속을 통해 getArea 메서드 호출
console.log(colorRectangle.getArea()); // 8
// 오버라이딩 된 toString 메서드 호출
console.log(colorRectangle.toString()); // width = 2, height = 4, color = red