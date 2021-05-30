// 피보나치 사열을 구현한 사용자 정의 이터러블
const fibonacci = {
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = 100000;

    return {
      next() {
        [pre, cur] = [cur, pre + cur];

        return { value: cur, done: cur >= max };
      }
    }
  }
}

for (const num of fibonacci) {
  console.log(num);
}

const arr = [...fibonacci];
console.log(arr);