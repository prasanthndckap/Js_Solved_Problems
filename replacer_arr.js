// Prob Statement => Write a function takes two paramaters first param being the input array
// and second param being the replacerInt which replaces the given number to zero

//([1,23,3,4,4], 23) => [1,0,3,4,4]

// function looparr(inputArr,replacerInt) {
//   for (let i = 0; i < inputArr.length; i++) {
//     if (inputArr[i] == replacerInt) {
//       inputArr[i] = 0;
//     }
//   }
//   return inputArr;
// }

// console.log(looparr([1,23,3,4,4], 4))



function replacearray(array,replacerInt) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] ==  replacerInt) {
      result.push(0);
    }
    else{
      result.push(array[i])
    }
  }
  return result
}
console.log(replacearray([1,23,3,4,4], 23))

