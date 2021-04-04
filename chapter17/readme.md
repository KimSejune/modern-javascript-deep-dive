# 생성자 함수에 의한 객체 생성

생성자 함수란? `new 연산자와 함께 호출하여 인스턴스를 생성하는 함수.`

ex) Object, String, Number, Boolean, Function, Array, Date, RegExp, Promise … 

new Function을 제외한 나머지 생성자 함수들은 typeof값이 object로 나온다.

```js
const func = new Function(‘x’, ‘return x*x’);
console.log(typeof func); // function
```


## 생성자 함수의 장점.
* 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.


new 연산자로 생성자 함수 호출시
1. 자바스크립트 엔진은 `암묵적으로 빈 객체(인스턴스) 생성하고 this를 바인딩`한다.
2. `인스턴스를 초기화` 한다.
3. 암묵적으로 `인스턴스를 반환`한다.

```js
function Circle(radius) {
	// 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
	console.log(this); // Circle {}

	// 2. 인스턴스 초기화
	this.radius = radius;
	this.getDiameter = function () {
		return 2 * this.radius;
	};

	// 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
}

const circle = new Circle(1);
console.log(circle); // Cicle {radius: 1, getDiameter: f}

```

<b>callable</b>: 호출할 수 있는 객체  
<b>constructor</b>: 생성자 함수로서 호출할 수 있는 함수
* 함수 선언문, 함수 표현식, 클래스

<b>non-constructor</b>: 객체를 생성자 함수로서 호출할 수 없는 함수
* 메서드(ES6 메서드 축약 표현), 화살표 함수.

```js
function foo() {}

foo(); // [Call] 함수로서 호출

new foo(); // [Construct] 생성자 함수로서 호출
```

```js
const obj = {
  name: 'Kim',
  // ES6 메서드 축약 표현이 아니다.
  sayHi: function() {
    console.log('Hi '+ this.name);
  },
 // ES6 메서드 축약 표현이기 때문에 non-constructor로써 new 호출하면 에러가 난다.
  sayBy() {
    console.log('Bye '+ this.name);
  }
}

obj.sayHi(); // Hi Kim
obj.sayBy(); // Bye Kim

new obj.sayHi(); // Hi undefined
new obj.sayBy(); // TypeError: obj.sayBy is not a constructor

```

> 생성자 함수를 `new 없이 호출`할 경우 일반 함수 `내부의 this는 전역 객체 window`를 가리킨다.

```js
const circle = Circle(5); // 일반 함수 호출로써 [[call]] 호출.
console.log(circle); // undefined

// 일반 함수 내부의 this는 전역 객체 window를 가리킨다.
console.log(radius); // 5
console.log(getDiameter()); // 10

circle.getDiameter(); // TypeError
```

만약 생성자 함수에 new 연산자를 실수로 빼먹을 경우를 대비하여 2가지 방어방법이 있다.

방법1. new.target
* new 연산자와 함께 생성자 함수로서 호출하면 함수 내부의 new.target은 함수 자신을 가리키고 new 연산자가 없이 호출되면 undefind다.
* IE에서 지원하지 않는다.
```js

function Circle(radius) {
	if (!new.target) {
		return new Circle(radius);
	}
}

```

방법2. 스코프 세이프 생성자 패턴
* IE 대응으로 사용된다.

```js
function Circle(radius) {
	// new 가 없이 호출시 this가 window를 가리키는 성질을 이용한 방법이다.
	if (!(this instanceof Circle)) {
		return new Circle(radius);
	}
}
```

대부분의 빌트인 생성자 함수는 new 연산자 없이 호출해도 new 연산자와 함께 호출했을 때와 동일하게 동작한다.

* String, Number, Boolean 생성자 함수는 new 연산자 없이 호출하면 문자열, 숫자, 불리언 값을 반환한다.




