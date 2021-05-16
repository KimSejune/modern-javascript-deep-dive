// 스택을 클래스로 구현

class Stack {
  #array;
  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.#array = array;
  }

  push(value) {
    this.#array.push(value);
  }

  pop() {
    this.#array.pop();
  }

  entries() {
    return [...this.#array];
  }
}

const stack = new Stack([1,2]);
console.log(stack.entries()); // [ 1, 2]

stack.push(3);
console.log(stack.entries()); // [ 1, 2, 3 ]

stack.pop();
console.log(stack.entries()); // [ 1, 2]