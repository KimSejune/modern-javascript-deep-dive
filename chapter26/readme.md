# ES6 함수의 추가 기능

## ES6 함수의 구분

||constructor|prototype|super|arguments
|:---:|:---:|:---:|:---:|:---:|
|일반 함수| O | O | X | O |
|메서드| X | X | O | O |
|화살표 함수| X | X | X | X |

### 일반 함수
* 함수 선언문 
* 함수 표현식

### 메서드
* ES6사양에서 메서드 축약 표현으로 정의된 함수
* `non-constructor라서 인스턴스를 생성할 수 없다`.
* 인스턴스를 생성할 수 없으므로 `prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다`.
* 자신을 바인딩한 객체를 가리키는 내부 슬롯 [[HomeObject]]를 가진다.
    * [[HomeObject]]를 가져서 `super 키워드 사용가능`하다.

```js
const base =  {
	name: ‘Kim’,
	// sayHi는 메서드이다.
	sayHi() { return `Hi ${this.name}`; }
};


const derived = {
	__proto__: base,
	sayHi() {
		return `${super.sayHi()}, how are you doing?`;
	}
}

console.log(derived.sayHi()); // Hi Kim, how are you doing?
```

### 화살표 함수
* `this, arguments, super, new.target 바인딩을 갖지 않는다`.
    * <b>상위 스코프의 값을 참조</b>한다.

콜백 함수 내부의 this 문제

```js
class Prefixer {
  constructor(prefixer) {
    this.prefixer = prefixer;
  }

  add(arr) {
    console.log(this) // Prefixer { prefixer: '-webkit-' }
    return arr.map(function (item) {
      console.log(this) // undefined Array.prototype.map을 일반함수로서 호출하기 때문에 this가 전역이다.
      return this.prefixer + item;
    });
  }

}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select'])); // TypeError: Cannot read property 'prefixer' of undefined

```

화살표 함수로 this를 호출하면 상위스코프의 값을 참조하도록 한다.

> Lexical this란? 화살표 함수는 함수 자체의 this바인딩을 갖지 않는다. 따라서 `화살표 함수 내부에서 this를 참조`하면 `상위 스코프의 this를 그대로 참조`한다.

```js
class Prefixer {
  constructor(prefixer) {
    this.prefixer = prefixer;
  }

  add(arr) {
    console.log(this); // Prefixer { prefixer: '-webkit-' }
    return arr.map((item) => {
      console.log(this);  // Prefixer { prefixer: '-webkit-' }
      return this.prefixer + item;
    })
  }

}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select'])); // [ '-webkit-transition', '-webkit-user-select' ]

```

Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.

```js
function foo(…rest) {
	console.log(rest); // [1,2,3,4,5]
}

foo(1,2,3,4,5);
```