// write a function which takes string as input and outputs the reversed string

// hello => olleh

// function reversed_string(inputStr) {
//   let result = "";
//   // reversed loop
//   for (let i = inputStr.length - 1; i >= 0; i--) {
//     // console.log(inputStr[i])
//     result = result + inputStr[i];
//   }
//   return result;
// }

// console.log(reversed_string("hello"));

















function reversedstr(word) {
  let result ="";
  for (let i = word.length-1; i>-1;i--) {
    // console.log(word[i]);
    result = result + word[i]
  }
  if (result === word) {
    console.log (result + " True")
  }
  else{
    console.log (result + " False")
  }
  // console.log(result)
}
(reversedstr("malayalam"));



















