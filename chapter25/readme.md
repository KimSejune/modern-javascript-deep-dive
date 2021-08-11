# Class

Javascript에서 Class란? Class는 함수이며 생성자 함수와 매우 유사하게 동작하지만 차이가 있다.

Class와 생성자 함수의 차이
1. class는 `new 연산자 없이 호출하면 에러가 발생`하지만 생성자 함수는 일반 함수로서 호출.
2. class는 `상속을 지원하는 extends, super 키워드` 제공.
3. class는 `호이스팅이 발생하지 않는 것 처럼 동작`한다.
4. 암묵적으로 strict mode가 강제된다.
5. class의 constructor, prototype method, static method는 [[Enumerable]]값이 false여서 열거되지 않는다.

### Class는 일급 객체이다.

Class 몸체에서 정의할 수 있는 3가지의 method이다. 
* constructor
    * 인스턴스 생성 및 초기화
* prototype method
* static method

Class 선언문은 정의 이전에 호출이될까?  
안된다. 왜냐하면 `let,const 키워드로 선언한 변수처럼 호이스팅이 발생하지 않는 것처럼 동작`한다.

## Constructor

Constructor란?  
`Class의 인스턴스를 생성하고 초기화`하기 위한 특수한 메서드이다.
* 내부에 추가한 프로퍼티는 인스턴스를 생성하면 인스턴스 프로퍼티가 된다.
* 클래스 정의가 평가되면 constructor의 기술된 동작을 하는 함수 객체가 생성된다.

```js
class Person {
	constructor(name) {
		this.name = name;
	}
}

function Person(name) {
	this.name = name;
}

```


## Prototype Method

생성자 함수에 의한 객체 방식과는 다르게 prototype 프로퍼티에 메서드를 추가하지 않아도 기본적으로 Prototype Method가 된다.  
Class는 생성자 함수와 마찬가지로 프로토타입 기반의 객체 생성 메커니즘이다.

```js
class Person {
	constructor(name) {
		this.name = name;
	}
	sayHi() {
		console.log(`Hi! ${this.name}`);
	}
}

function Person(name) {
	this.name = name;
}

Person.prototype.sayHi = function () {	console.log(`Hi! ${this.name}`);}

```

### Static Method

인스턴스를 생성하지 않아도 호출할 수 있는 메서드이다.
* 인스턴스에서 호출할 수 없다.  
* class에 바인딩된 메서드이다.


```js
class Person {	
  constructor(name) {
		this.name = name;
	}
	static sayHi() {		
    console.log('Hi');	
  }
}

Person.sayHi(); // Hi

```

Class Instance 생성 과정.
1. Instance 생성과 this binding
    * constructor의 내부 코드가 실행되기 앞서 빈 객체가 생성된다. => 이것이 인스턴스이다.
    * Instance는 this에 바인딩된다. 따라서 constructor 내부의 this는 class가 생성한 instance를 가리킨다.
2. Instance 초기화
    * Instance에 프로퍼티를 추가하고 값을 초기화한다.
3. Instance 반환
    * this가 암묵적으로 반환된다.


```js
class Person {
	constructor(name) {
		// 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
		console.log(this); // Person {}

		// 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
		this.name = name;

		// 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
	}

}

```



### 클래스 상속과 생성자 함수 상속

프로토타입 기반 상속은 프로토타입 체인을 통해 다른 객체의 자산을 상속받는 개념이지만,
상속에 의한 클래스 확장은 `기존 클래스를 상속받아 새로운 클래스를 확장하여 정의`하는 것이다.


extends 키워드는 `수퍼클래스와 서브클래스 간의 상속 관계를 설정`한다.  
extends 키워드 다음에는 클래스뿐만이 아니라 [[Constructor]] 내부 메서드를 갖는 값들은 다 가능하다.
* 함수 선언문, 함수 표현식, 클래스

```js

function Base1() {}
class Base2 {}

class Derived extends (true ? Base1 : Base2) {}

const derived = new Derived();

console.log(derived instanceof Base1); // true;
console.log(derived instanceof Base2); // false;

```

### super 키워드
* super를 호출하면 수퍼클래스의 constructor를 호출한다.
* 메서드 내에서 super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.

주의사항
* `서브클래스에서 constructor를 생략하지 않은 경우 반드시 super를 호출`해야한다.
    * why? `서브클래스는 인스턴스를 생성하지 않고 수퍼클래스가 생성한 인스턴스를 반환받아서 사용`하기 때문이다.
* 서브클래스의 constructor에서 super를 호출하기 전에는 this를 참조할 수 없다.
* super는 반드시 서브클래스의 constructor에서만 호출가능하다.

### [[HomeObject]]
* `ES6 메서드 축약 표현으로 정의된 함수만이 [[HomeObject]]를 갖는다`.
* [[HomeObject]]]를 가지는 함수만이 `super를 참조`할 수 있다.
* 메서드 자신을 바인딩하고 있는 객체를 가리킨다.
* 자신을 바인딩하고 있는 객체의 프로토타입을 찾을 수 있다.  

ex) Derived Class의 sayHi 메서드는 Derived.prototype에 바인딩되어 있다면, Derived class의 sayHi 메서드의 [[HomeObject]]는 Derived.prototype이다.


### 서브 클래스에서 인스턴스 생성 과정

`서브클래스는 자신이 직접 인스턴스를 생성하지 않고 수퍼클래스에게 인스턴스 생성을 위임`한다. (이래서 서브클래스의 constructor에서 반드시 super를 호출해야한다.)

1. 서브클래스의 super 호출
    * 서브클래스가 new 연산자와 함께 호출된다.
    * 서브클래스 constructor내부의 super 키워드가 함수처럼 호출된다.
    * super가 호출되면 수퍼클래스의 constructor가 호출된다.
2. 수퍼클래스의 인스턴스 생성과 this바인딩
    * 수퍼클래스의 constructor내부의 코드가 실행되기 전에 암묵적으로 빈 객체를 생성한다.
    * 수퍼클래스의 constructor내부의 this는 생성된 인스턴스를 가리킨다. (서브클래스의 인스턴스)
    * 빈 객체 즉 인스턴스는 this에 바인딩된다. 
    * 인스턴스는 new.target이 가리키는 서브클래스가 생성한 것으로 처리된다.
3. 수퍼클래스의 인스턴스 초기화
4. 서브클래스 constructor로의 복귀와 this 바인딩.
    * 수퍼에서 반환한 인스턴스가 this에 바인딩된다.
    * 서브클래스는 별도의 인스턴스를 생성하지 않고 super가 반환한 인스턴스를 this에 바인딩하여 그대로 사용한다.
5. 서브클래스 인스턴스 초기화
6. 인스턴스 반환.



```js
class Rectangle {
  constructor(width, height) {
    // 2. 인스턴스 생성 및 this 바인딩
    console.log(this) // ColorRectangle {} 서브클래스의 인스턴스이다.
    console.log(new.target); // [Function: ColorRectangle]
    console.log(this instanceof ColorRectangle); // true
    console.log(this instanceof Rectangle); // true
    // 3. 수퍼클래스 인스턴스 초기화
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
    // 4. super에서 반환한 인스턴스가 this에 바인딩.
    console.log(this); // ColorRectangle { width: 2, height: 4 }
    // 5. 서브클래스 인스턴스 초기화
    this.color = color;
    console.log(this); // ColorRectangle { width: 2, height: 4, color: 'red' }
    // 6. 인스턴스 반환.
  }

  toString() {
    return super.toString() + `, color: ${this.color}`;
  }
  
}

const colorRectangle = new ColorRectangle(2, 4, 'red');
console.log(colorRectangle); // ColorRectangle { width: 2, height: 4, color: 'red' }

console.log(colorRectangle.getArea()); // 8
console.log(colorRectangle.toString()); // width = 2, height = 4, color: red


```

















