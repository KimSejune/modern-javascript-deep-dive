const person = {
  name: 'Jo',
  getName() {
    // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
    console.log('this:', this)
    return this.name;
  }
};

// this: { name: 'Jo', getName: [Function: getName] }
console.log(person.getName()); // Jo

const anotherPerson = {
  name: 'Kim',
  isAnotherPerson: true
};


// getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = person.getName;

//this: { name: 'Kim', isAnotherPerson: true, getName: [Function: getName] }
console.log(anotherPerson.getName()); // Kim

// getName 메서드를 변수에 할당.
const callGetName = person.getName;

// getName메서드를 일반 함수로 호출
// this: window
console.log(callGetName()); // undefined
