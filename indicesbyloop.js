function sentence(word1,word2,word3){
    let result=""
    let arr =[word1,word2,word3]
    for(let i=0;i<arr.length;i++){
        if(i==0){
            i=1
            result = result+arr[i]
            if(i==1){
                i=0
                result= result+arr[i]
            }
        }
        else if(i=2){   
        result= result+arr[i]
        }
    }
return result
}
console.log(sentence("morning","good","prasanth"))