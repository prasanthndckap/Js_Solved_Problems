function datas(arr){
    let result = []
    for(let i=0;i<arr.length;i++){
        if ( arr[i]){
             result++
        }
        else{
            result+=0
       }
    }
    return result
}
console.log(datas([2,3334,33,NaN,false,"gokul","",]))