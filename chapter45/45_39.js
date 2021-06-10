const fetch = require('node-fetch');

async function test() {
  setTimeout(() => console.log(1), 0);

  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log('result :', result)

  Promise.resolve()
    .then(() => console.log(2))
    .then(() => console.log(3));
}

test();