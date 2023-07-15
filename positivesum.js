
// function positivesum (arr){
//     let sum = 0
//     for(i =0;i<arr.length;i++){
//         if(arr[i]>0){
//             sum = sum + arr[i]
//             console.log(arr[i])
//         }
//      } return sum
// }
// console.log(positivesum([4,-5,6,-8,2]))





function sumofpositive(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>0) {
            result = result + arr[i]
        }        
    }
    return result
}
console.log(sumofpositive([4,-5,6,-8,2,10,10]))







