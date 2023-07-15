function number(inputstr) {
  for (let i = 0; i < inputstr.length;i++){
     if (inputstr.slice(-1) ==  "1"  && inputstr.slice(-2) !== "11" ){
     return inputstr +"st"
  }
  else if( inputstr.slice(-1) == "2"  && inputstr.slice(-2)!== "12"){
    return inputstr+"nd"
  }
  else if (inputstr.slice(-1) == "3" && inputstr.slice(-2) !="13"){
    return inputstr+ "rd"
  }
  else {
      return inputstr +"th"
    }
  } 
}
console.log(number("93"));


// function positivesum (arr){
//   let sum = 0
//   for(i =0;i<arr.length;i++){
//       if(arr[i]>-1){
//           sum = sum + arr[i];
//       }
//    } return sum
// }
// console.log(positivesum([4,-5,6,-8,2]))