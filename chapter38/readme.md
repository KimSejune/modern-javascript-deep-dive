# 브라우저의 렌더링 과정

## 파싱
텍스트 문서의 `문자열을 토큰으로 분해`(어휘 분석)하고, 토큰에 문법적 의미와 구조를 반영하여 트리 구조의 자료구조인 `Parse Tree/Syntax tree를 생성`하는 일련의 과정을 말한다.

## 렌더링
HTML, CSS, JavaScript로 작성된 문서를 파싱하여 브라우저에 시각적으로 출력하는 것을 말한다.

## 브라우저 렌더링 과정

1. 브라우저는 HTML, CSS, JavaScript, Image 등 렌더링에 필요한 리소스를 요청하고 서버로부터 응답을 받는다.
2. 브라우저의 Rendring Engine은 서버로부터 응답된 HTML, CSS를 파싱하여 DOM과 CSSOM을 생성하고 이들을 결합하여 Render Tree를 생성한다.
3. 브라우저의 JavsScript Engine은 서버로부터 응답된 JavaScript를 파싱하여 AST(Abstract Syntax Tree)를 생성하고 바이트코드로 변환하여 실행한다.이때 JavaScript는 DOM API를 통해 DOM이나 CSSOM을 변경할 수 있다.
변경된 DOM과 CSSOM은 다시 Rander Tree로 결합된다.
4. Rander Tree를 기반으로 HTML 요소의 레이아웃을 계산하고 브라우저 화면에 HTML 요소를 페인팅한다.

## URL창에 주소를 입력한다면 어떻게 될까?

1. 브라우저에 URL을 입력한다.
2. 입력된 URL이 브라우저 캐시에 있는지 확인한다 없다면 DNS를 통해 URL => IP주소로 변경한다.
3. 해당 IP주소 서버에 요청한다.
4. ARP를 통해 IP주소 => MAC주소로 변경한다.
5. 서버에 TCP 연결을 요청한다.
6. 브라우저의 프로토콜 (HTTP, HTTPS) 확인하여 요청에 대한 응답을 전송한다.
7. 응답을 브라우저에서 해석한다.


## HTML, CSS 파싱과 DOM, CSSOM 생성

바이트 -> 문자 -> 토큰 -> 노드(토큰을 객체로 변환) -> DOM, CSSOM

## JavaScript 파싱과 실행

JavaScript Source Code -> 토큰(토크나이저) -> Abstract Syntax Tree(파서) -> 바이트코드(바이트코드 생성기)