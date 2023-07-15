// Write a function which takes three params - inputString, searchWord, replaceWord .
// searchword in the input string will be replaced by replaceword and return the output

// "hello","e","o"
//hello => hollo

// "hello","h","z"
//zello

// function replaceWord(inputString, searchWord, replaceWord) {
//   let result = "";
//   for (let i = 0; i < inputString.length; i++) {
//     if (inputString[i] == searchWord) {
//       // checking if the replaceable value is same as looped value
//       result = result + replaceWord;
//     } else {
//       result = result + inputString[i];
//     }
//   }
//   return result;
// }

// console.log(replaceWord("hello", "e", "o"));



function replaceword(word,searchword,replaceword) {
  let result = ""
  for (let i = 0; i < word.length; i++) {
 if (word[i]==searchword) {
  result += replaceword
 }
 else{
  result+= word[i]
 }
}
return result
    
}
console.log(replaceword("hello", "e", "o"));