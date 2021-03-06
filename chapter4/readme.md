# 변수

## 변수란 무엇인가? 왜 필요한가?

* 컴퓨터는 CPU를 사용해 연산하고, 메모리를 사용해 데이터를 기억한다.
  * 메모리에 저장되는 모든 값은 2진수이다.
* 변수는 <b>`하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름을 말한다`</b>.
  * `값의 위치를 가리키는 상징적인 이름`
* 개발자의 의도를 나타내는 명확하게 지어야 한다.

#### 변수에 여러 개의 값을 저장하는 방법
* 객체나 배열을 사용한다.

#### 변수명
* 메모리 공간에 저장된 값을 식별할 수 있는 고유한 이름

#### 변수 값
* 변수에 저장된 값.

#### 할당
* 변수에 값을 저장하는 것.

## 식별자
* 식별자는 `어떤 값을 구별해서 식별할 수 있는 고유한 이름을 말한다.`
* `값이 아니라 메모리 주소를 기억하고 있다.`
* 변수, 함수, 클레스 등의 이름은 모두 식별자이다.
* `선언`에 의해 자바스크립트 엔진에 식별자의 존재를 알린다.

## 변수 선언
* 변수를 생성하는 것을 말한다.
* 변수를 사용하려면 반드시 선언이 필요하다.
  * var, let, const 키워드를 사용한다.

#### var
* Function Level Scope를 지원하기에 의도치 않게 전역 변수가 선언된다.
* 선언과 초기화 단계가 동시에 진행된다.

```javascript
var score;
```
변수 이름을 등록하고 값을 저장할 메모리 공간을 확보한다.
* 확보된 메모리 공간은 자바스크립트 엔진에 의해 undefined로 초기화된다.

### 자바스크립트 엔진의 변수 선언 단계
* `선언 단계`: 변수 이름을 등록해서 자바스크립트 엔진에 변수의 존재를 알린다.
* `초기화 단계`: 값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 undefined를 할당해 초기화한다.

> 변수 이름을 비롯한 모든 식별자는 Excution Context에 등록된다. Excution Context는 자바스크립트 엔진이 소스코드를 평가하고 실행하기 위해 필요한 환경을 제공하고 코드의 실행 결과를 실제로 관리하는 영역이다. 자바스크립트 엔진은 Excution Context를 통해 식별자와 스코프를 관리한다.

## 변수 선언의 실행 시점과 변수 호이스팅

```javascript
console.log(score); // undefined

var score; // 변수 선언문
```

위의 코드는 인터프리터에 의해 한 줄 씩 순차적으로 실행되는데 아직 선언되지 않은 score가 undefined로 값이 나오고있다.
그 이유는 `변수 선언이 소스코드가 한 줄씩 순차적으로 실행되는 시점. 즉 런타임이 아니라 그 이전 단계에 먼저 실행된다.`  
자바스크립트 엔진은 소스코드 실행하기에 앞서서 평가 과정을 거칠때 `자바스크립트 엔진은 모든 선언문을 먼저 실행`한 후 코드를 실행한다.


변수 호이스팅이란? `변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징`


## 값의 할당

```javascript
var score; // 변수 선언
score = 80; // 값의 할당
```

```javascript
var score = 80; // 선언과 할당
```

변수 선언과 값의 할당의 실행 시점이 다르다.  
* 변수 선언은` 소스코드가 순차적으로 실행되는 시점인 런타임 이전에 먼저 실행된다`.  
* 값의 할당은 `소스코드가 순차적으로 실행되는 런타임에 실행된다`.

변수에 값을 할당할 때는 이전 값이 저장되어 있던 메모리 공간을 지우고 새로운 메모리 공간을 확보하고 저장한다.

## 값의 재할당
* 값이 할당되어 있는 변수에 새로운 값을 또다시 할당하는 것.
```javascript
var score = 80;
score = 90;
```
* 상수: `값을 재할당할 수 없어서 변수에 저장된 값을 변경할 수 없다.`
  * const 키워드에 해당된다.
* 위에 이야기했듯이 재할당시 기존 메모리 공간을 지우고 새롭게 메모리 공간을 확보하고 저장한다.
  * 이때 기존의 값은 가비지 컬렉션에 의해 메모리에서 자동 해제된다.

## 식별자 네이밍 규칙
* 식별자는 특수문자를 제외한 문자, 숫자, _, $를 포함할 수 있다.
* 특수문자로 제외한 문자, _, $로 시작해야하며 숫자로 시작할 수 없다.
* 예약어는 사용할 수 없다.
* 변수 이름은 변수의 존재 목적을 쉽게 이해할 수 있도록 명확히 표현해야 한다.
