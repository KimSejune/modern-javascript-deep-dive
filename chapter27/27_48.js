// push 메서드는 성능도 좋지않고 원본 배열을 직접 변경하기에 아래의 방법을 사용하는 것이 좋다.

const arr = [1, 2];

const newArr = [...arr, 3];
console.log(newArr); // [ 1, 2, 3 ]