# 데이터 타입

<b>자바스크립트 ES6의 데이터 타입</b>

### Primitive Type
* number => 숫자, 정수 실수 구분 없이 하나의 숫자 타입만 존재
* string => 문자열
* boolean => true, false 
* undefined  => var 키워드로 선언된 변수에 암묵적으로 할당되는 값
* null => 값이 없는 것을 의도적으로 명시
* Symbol => ES6에서 추가된 타입


### Object/reference Type
* Object, Function, Array ...

## 숫자 타입

숫자 타입의 값은 배정밀도 64비트 *형식을 따른다. 즉 모든 수를 실수로 처리하며, 정수만 표현하기 위한 데이터 타입이 별도로 존재하지 않는다.

```javascript
var integer = 10; // 정수
var double = 10.12; // 정수
var negative = -10; // 정수
```

숫자 타입은 3가지 특별한 값을 가진다.
* Infinity : 양의 무한대
* -Infinity : 음의 무한대
* NaN : 산술 연산 불가

```javascript
console.log(10/0); // Infinity
console.log(10/-0); // -Infinity
console.log(1 * 'string'); // NaN

```

## 문자열 타입

텍스트 데이터를 나타내는 데 사용한다.  
'', "", ``으로 텍스트를 감싼다.  

```js
var string
string = '문자열';
string = "문자열";
string = `문자열`;

string = '작은따옴표 내부에서 "큰따옴표"는 문자열로 인식된다.'
string = "큰따옴표 내부에서 '작은따옴표'는 문자열로 인식된다."
```

## 템플릿 리터럴

```js
var template = `Template`;
```

### 멀티라인 문자열

일반 문자열 내에서는 줄바꿈이 허용되지 않는다.

escape sequence
* \0 = null
* \b = 백스페이스
* \f => 출력할 경우 다음 페이지의 시작 지점으로 이동.
* \n => 개행: 다음 행으로 이동
* \r => 개행: 커서를 처음으로 이동
* \t => 탭(수평)
* \v => 탭(수직)
* \uXXXX => 유니코드
* \' => 작은따옴표
* \" => 큰따옴표
* \\ => 백슬래시


```js
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';

template = `<ul>
  <li>
    <a href="#">Home</a>
  </li>
</ul>`

// 출력 결과가 같다.
```

### 표현식 삽입

* 표현식을 삽입하려면 ${}로 감싼다.
* 표현식의 평가 결과가 문자열이 아니더라도 <b>문자열로 타입이 강제로 변환</b>되어 삽입된다.

```js
var first = 'Sejune';
var last = 'Kim';

console.log('My name is ' + first + ' ' + last + '.'); 

console.log(`My name is ${first} ${last}.`);
```

## 불리언 타입

논리적 참, 거짓을 나타내는 true, false이다.  
흐름을 제어하기위하여 조건문에서 자주 사용한다.  

## undefined 타입

undefined값은 undefined가 유일하다.  
변수 선언에 의해 확보된 메모리 공간을 처음 할당이 이루어질 때까지 자바스크립트 엔진이 undefined로 초기화 한다.  
변수에 값이 없다는 것을 명시하고 싶을 때는 undefined가 아닌 `null을 할당`한다.  

```js
var foo;
console.log(foo); // undefined;
```

> 초기화 되지 않은 변수는 참조했을 때 `undefined`를 반환한다.


## null 타입

null 타입의 값은 null이 유일하다.
* null, Null, NULL은 다르다.

변수에 null을 할당하는 것은 변수가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미다.  
함수가 유효한 값을 반환할 수 없는 경우 명시적으로 null을 반환하기도 한다.

```js
var foo = 'Lee';
foo = null; // 참조를 제거한다.
```

## 심벌 타입
ES6에서 추가된 7번째 타입이다.  
다른 값과 중복되지 않는 유일무이한 값이다.  

```js
var key = Symbol('key');

var obj = {};
obj[key] = 'value';
console.log(obj[key]);
```

## 객체 타입

자바스크립트 엔진은 데이터 타입에 따라 정해진 크기의 메모리 공간을 확보한다.  
* 숫자 타입은 배정밀도 64비트 부동소수점 형식을 사용한다.  


> ECMAScript 사양은 문자열과 숫자 타입 외의 데이터 타입의 크기를 명시적으로 규정하고 있지는 않다. 따라서 나머지 타입은 자바스크립트 엔진 제조사의 구현에 따라 다를 수 있다.  

```js
var score = 100;
```

[값의 저장]
1. 자바스크립트 엔진은 리터럴 100을 숫자 타입의 값으로 해석 8바이트의 `메모리 공간을 확보`
2. 100을 2진수로 저장.

[값 일기]
1. score변수에 `숫자 타입의 값이 할당`되어 있으므로 8바이트를 읽어온다.
2. 읽어온 2진수의 값을 `데이터 타입을 통해 해석`한다.  
만약 숫자타입을 8바이트 단위로 읽지 않으면 값이 훼손된다.  

> 컴파일러 또는 인터피르터는 `심벌 테이블`이라고 부르는 자료 구조를 통해 식별자를 키로 바인딩된 값의 메모리 주소, 데이터 타입, 스코프 등을 관리한다.  

저장된 변수의 데이터 타입이 필요한 이유
1. 값 저장시 `메모리 공간의 크기` 확보.
2. 값 참조시 읽어야할 `메모리 공간의 크기` 결정.
3. 읽은 `2진수를 어떻게 해석`할지 결정.

## 동적 타이핑
 
`선언이 아닌 할당에 의해 타입이 결정(타입 추론)된다.`  
`재할당에 의해 변수의 타입은 동적으로 변할 수 있다.`

동적 타입 언어 변수의 <b>단점</b>
* 변수 값을 추적하기 어려울 수 있다.  
* 값을 확인하기 전에는 타입을 확신할 수 없다.

변수 사용시 주의점
* 꼭 필요한 경우 제한적으로 사용.
* 스코프는 최대한 좁게 만들어 사용.
* 전역 변수는 최대한 사용하지 않도록 한다.
* 변수보다는 상수 사용으로 값의 변경 억제.
* 변수 이름은 목적이나 의미 파악할 수 있도록 네이밍.

> <b>`가독성이 좋은 코드가 좋은 코드.`</b>
