const Person = '';

{
  // 호이스팅인 발생하지 않는다면 ''이 출력되어야 한다.
  console.log(Person);
  // ReferenceError

  class Person {}
}