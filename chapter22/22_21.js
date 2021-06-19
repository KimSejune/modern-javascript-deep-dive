function convertArgsToArray() {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

  const callArr = Array.prototype.slice.call(arguments);
  const applyArr = Array.prototype.slice.apply(arguments);
  console.log(callArr); // [ 1, 2, 3, 4 ]
  console.log(applyArr); // [ 1, 2, 3, 4 ]
  return [callArr, applyArr];
}

console.log(convertArgsToArray(1, 2, 3, 4)) // [[ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ]]