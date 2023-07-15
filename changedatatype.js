function removedatatype(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]){
            result.push(arr[i]) 
        }
    }
    return result

}
  
console.log(removedatatype([NaN, 0,15, false, -22, '', undefined, 47, null]))