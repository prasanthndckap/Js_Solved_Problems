function arr (arr1){
     let result =[]
     
    for( let i=0; i<arr1.length;i++){
       if (typeof arr1[i] != "string"){
        result = result + arr1[i]            
       }
    
    }
    return (result)

}
console.log(arr([1,2,"hello",3,4,5]))