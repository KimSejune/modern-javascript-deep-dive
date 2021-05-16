// 필터를 사용한 중복요소 전부 삭제


const arr = [1, 2, 3, 1, 2];

function removeAll(array, item) {
  return array.filter(v => v !== item);
}

console.log(removeAll(arr, 2)); // [ 1, 3, 1 ]