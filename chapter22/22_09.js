
const obj = {
  value: 100,
  foo() {
    console.log(`foo's this: `, this); // { value: 100, foo: [Function: foo] }
    console.log(`foo's this.value: `, this.value); // 100
    // 메서드내 중첩 함수
    function bar() {
      console.log(`bar's this: `, this); // window
      console.log(`bar's this.value: `, this.value); // undefined
    }
    // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출시 함수 내부의 this는 전역 객체다.
    bar();
  }
  
}

obj.foo();