## Excution Context

* 소스코드의 타입에 따라 Excution Context를 생성하는 과정과 관리 내용이 다르다.

|소스 코드의 타입|설명|
|:---:|:---:|
|전역 코드| 전역에 존재하는 소스코드.|
|함수 코드| 함수 내부에 존재하는 소스코드.|
|eval 코드| eval 함수에 인자로 전달되어 실행하는 소스코드.|
|모듈 코드| 모듈 내부에 존재하는 소스코드.|

### 전역 코드

* `최상위 스코프인 전역 스코프`를 생성.
  * `var로 선언`한 전역 변수
  * `함수 선언식`으로 선언한 전역 함수
* `전역 변수, 함수를 전역 객체의 프로퍼티와 메서드로 바인딩`한다.
* `전역 코드가 평가되면 Global Execution Context 생성`.

### 함수 코드

* 지역 스코프를 생성.
  * 지역 변수, 매개변수, arguments 관리.
* 생성한 지역 스코프를 전역 스코프의 `스코프 체인의 일원으로 연결`.
* `함수 코드가 평가되면 Function Excution Context 생성`.

### eval 코드

* 독자적인 스코프 생성.
* eval 코드가 평가되면 eval Excution Context 생성.

### 모듈 코드

* `모듈별로 독립적인 스코프` 생성.
* `모듈 코드가 평가되면 module Excution Context 생성`.


## 소스코드의 평가와 실행

### 소스코드 평가 (런타임 이전)

* `Excution Context 생성`한다.
* Lexical Environment의 Environment Record에 `생성된 변수나 함수 식별자를 키로 등록`한다.
  * BindingObject에 등록된다.

### 소스코드 실행 (런타임)

* `평가 후 선언문을 제외한 소스코드가 순차적으로 실행`.
* 필요한 값을 Excution Context가 관리하는 스코프에서 검색해서 취득한다.
* 소스코드의 실행결과는 다시 Excution Context가 관리하는 스코프에 등록된다.

## 실행 컨텐스트의 역할

전역 코드 평가 -> 전역 코드 실행 -> 함수호출에 의한 함수코드 평가 -> 함수코드 실행 -> 다시 전역 코드 실행

Excution Context는 `식별자(변수, 함수, 클래스 등의 이름)를 등록하고 관리하는 스코프`와 `코드 실행 순서 관리`를 구현한 내부 메커니즘으로, `모든 코드는 Excution Context를 통해 실행되고 관리`된다.
* `Lexical Environment`가 `식별자와 스코프를 관리`한다.
  * Environment Record: 식별자 관리.
  * Outer Lexical Environment: 스코프 체인 구현.
* `Excution Context Stack`이 `코드 실행 순서를 관리`한다.

## 실행 컨텍스트의 생성과 식별자 검색 과정

### 전역 객체 생성

* 전역 코드가 평가되기 이전에 전역 객체를 생성한다.
* Object.prototype을 상속받는다.

### 전역 코드 평가

1. Global Execution Context 생성 => Push Execution Context Stack.
2. Global Rexical Environment 생성  => Binding Global Execution Context  
    2.1 Global Environment Record 생성  
    * 2.1.1 Object Environment Record 생성 => var 키워드 선언한 전역 변수, 함수 선언문으로 정의한 전역 함수, 빌트인 전역 프로퍼티와 전역 함수 표준 빌트인 객체. BindingObject 연결  
    * 2.1.2 Declarative Environment Record 생성  => let, const 키워드로 선언한 전역 변수.  

    2.2 this binding  
    2.3 Outer Lexical Environment 참조 결정.

> 전역 변수와 전역 함수는 `BindingObject를 통해 전역 객체의 프로퍼티와 메서드`가 된다.

> var 키워드는 `'선언' '초기화' 동시에 진행`된다. 암묵적으로 undefined를 바인딩한다. 그래서 `선언 이전에 호출시 undefined`이다.

> 함수 선언문은 BindingObject를 통해 전역 객체에 키로 등록하고 `생성된 함수 객체를 즉시 할당`한다. `함수 선언문 이전에 호출할 수 있다`.

> let, const 키워드로 선언한 변수도 `호이스팅은 발생하나 초기화가 발생하지 않고 선언문 도달전까지 TDZ에 빠진다`.


### 함수 코드 평가

1. Function Execution Context 생성
2. Function Lexical Environment 생성  
  2.1 Function Environment Record 생성 => 매개변수, arguments, 지역 변수, 중첩 함수 등록 및 관리.    
  2.2 this binding   
  2.3 Outer Lexical Environment 참조 결정.  


### `상위스코프 결정`
* 자바스크립트 엔진은 함수 정의를 평가하여 `함수 객체를 생성할 때 현재 실행 중인 Execution Context를 [[Environment]]에 저장`한다.
* `어디에 정의`했는지에 따라 `함수객체의 내부 슬롯 [[environment]]에 저장`된다.
* `[[Environment]]가 Lexical Scope를 구현하는 메커니즘`이다.

## Execution Context와 블록 레벨 스코프

* let, const 키워드로 선언한 변수는 모든 코드 블록(함수, if, for, while, try/catch..)을 지역 스코프로 인정한다.
* `코드 블록을 만나면 Execution Context를 생성하지 않고 Lexical Environment만 생성하여 기존것과 교체`한다.
  * 코드 블록이 종료되면 이전의 Lexcical Environment로 되돌린다.



