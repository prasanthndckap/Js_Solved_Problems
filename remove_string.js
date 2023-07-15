
// write a function which takes input array and returns the output array with string being removed

// [1,2,3,"hello",2,"whatever"] => [1,2,3,2]

// function removeStrinArray(inputArr) {
//   let resultArray = [];
//   for (let i = 0; i < inputArr.length; i++) {
//     if (typeof inputArr[i] !== "string") {
//       resultArray.push(inputArr[i]);
//     }
//   }
//   return resultArray;
// }

// console.log(removeStrinArray([1,2,3,"hello",2,"whatever"]))





function remove_string(input) {
  let result = [];
for (let i = 0; i < input.length; i++) {
if (typeof input[i] !== "number") {
  result.push(input[i])
}
}
return result
}
console.log(remove_string([1,2,3,"hello",2,"whatever"]))