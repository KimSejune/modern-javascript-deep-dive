// super class
class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// sub Class
class Derived extends Base {
  constructor(a,b,c) {
    // sub class에서는 constructor를 생성하면 반드시 super 키워드를 입력해야한다.
    // super 키워드 호출전에는 this를 참조할 수 없다.
    super(a,b);
    this.c = c;
  }
}

const derive = new Derived(1, 2, 3);

console.log(derive) // Derived { a: 1, b: 2, c: 3 }