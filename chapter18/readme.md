# 함수와 일급 객체

일급객체 란?
* 무명의 리터럴로 생성할 수 있다. 즉. `런타임에 생성이 가능`하다.
* `변수나 자료구조(객체, 배열 등)에 저장`할 수 있다.
* `함수의 매개변수에 전달`할 수 있다.
* `함수의 반환값으로 사용`할 수 있다.

```js
// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 2. 함수는 객체에 저장할 수 있다.
const predicates = { increase, decrease };

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(predicate) {
  let num = 0;
  return function () {
    num = predicate(num);
    return num;
  };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2
```

함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미다.


## 함수 객체 프로퍼티

arguments, caller, length, name, prototype 프로퍼티는 `일반 객체에는 없는 함수 객체 고유의 프로퍼티`다.


### arguments 프로퍼티
* 함수 호출 시 전달된 argument들의 정보를 담고 있다.
* iterable한 유사 배열 객체이다.
* 함수 내부에서 지역 변수처럼 사용된다.
* argument가 부족시 undefined로 초기화 상태를 유지한다.
* argumenr가 많으면 무시하지만 값을 버리진 않고 arguments 객체의 프로퍼티로 보관한다.

> 함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 선언되고 undefined로 초기화된 이후 argument가 할당된다.

### caller 프로퍼티
* 함수 자신을 호출한 함수를 가리킨다.

### length 프로퍼티
* 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.

### name 프로퍼티
* 함수 이름을 나타낸다.
* 익명 함수 표현식에서 name 프로퍼티는 다르게 동작한다.
    * ES5: 빈 문자열을 값으로 갖는다.
    * ES6: 함수 객체를 가리키는 식별자를 값으로 갖는다.

### __ proto __  접근자 프로퍼티

* [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티다.


### prototype 프로퍼티
* `constructor만이 소유`하는 프로퍼티이다.
* 생성자 함수로 호출될 때 생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가리킨다.






