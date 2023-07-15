function mail(str){
    let result = ""
    for(let i = 0;i<str.length;i++){
        if (i>str.indexOf("@") && i<str.indexOf(".")){
            result = result +"*"
        }
        else{
            result =result+ str[i]
        }
       
} 
return result

}
console.log (mail("prasanth@gmail.com"))



















// function gmail(array){
//     let result ='';
//     for (let index = 0; index < array.length; index++) {
//         if (index>array.indexOf("@") && index<array.indexOf(".")) {
//             result = result + "*";            
//         }
//         else {
//             result = result + array[index];            
//         }
//     }

//     return result;  
// }
// console.log(gmail("gokul@gmail.com"));




function gmail(mailid) {
    let result = ""
for (let i = 0; i < mailid.length; i++) {
if (i>mailid.indexOf("@") && i<mailid.indexOf(".")) {
    result+= "*"
}
    else{
        result+=mailid[i]
    }
}
return result

}
console.log(gmail("gokul123@gmail.com"))



