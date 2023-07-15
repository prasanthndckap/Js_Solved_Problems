// Write a function which takes input as array and return the array with each value divided by 2
// [16,8,2]=> [8,4,1]

// function dividByTwo(num) {
//   for (let i = 0; i < num.length; i++) {
//     num[i] = num[i] / 2;
//   }
//   return num;
// }

// console.log(dividByTwo([2, 4, 6]));


function diviibebytwo(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i]/2)
  }
  return result
}
console.log(diviibebytwo([10,20,30]))