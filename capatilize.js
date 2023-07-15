function cap(str){
    let result = ""
 for(let i = 0 ; i<str.length; i++){
    if (i % 2 == 0 ){
        result =  result + (str[i].toUpperCase()) 
     }
     else{
        result =  result + (str[i])
     }
}

 return result
}
console.log (cap("prasanth"));












function captalize(word){
   let result = "";
   for (let i = 0; i < word.length; i++) {
      {
         if(i % 2 == 0){
           result = result + (word[i].toUpperCase())
         }
         else{
            result = result + word[i];
         }
      }
   }
   return result
}
   

console.log(captalize("avinash"));