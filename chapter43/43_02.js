const obj = {
  name: 'Kim',
  age: 29,
  alive: true,
  hobby: ['basketball']
};

const json = JSON.stringify(obj);
console.log(typeof json, json);
// string {"name":"Kim","age":29,"alive":true,"hobby":["basketball"]}

const prrettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prrettyJson, prrettyJson);
// string {
//   "name": "Kim",
//   "age": 29,
//   "alive": true,
//   "hobby": [
//     "basketball"
//   ]
// }

function filter(key, value) {
  return typeof value === 'number' ? undefined : value;
}

const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);
// string {
//   "name": "Kim",
//   "alive": true,
//   "hobby": [
//     "basketball"
//   ]
// }
