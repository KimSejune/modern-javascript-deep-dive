const person = {
  // 데이터 프로퍼티
  firstName: 'Sejune',
  lastName: 'Kim',

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};

console.log(`${person.firstName} ${person.lastName}` ); // Sejune Kim

person.fullName = 'Suhyun Jo';
console.log(person); // { firstName: 'Suhyun', lastName: 'Jo', fullName: [Getter/Setter] }

console.log(person.fullName); // Suhyun Jo

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다. 
console.log(Object.getOwnPropertyDescriptor(person, 'fullName')) 
// { 
//  get: [Function: get fullName],
//  set: [Function: set fullName],
//  enumerable: true,
//  configurable: true 
//}

// class와 달리 접근자 프로퍼티는 없다.
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(person))); // [ 'constructor']