
 
 
// Problem 1
// Write a function takes one parameter(inputString) and returns true if the input string is same as reversed string:
// ("hello") => "hello", "olleh" => false
// ("racecar")=> "racecar", "racecar" => true (input string and reversed string is same so return true)


// Dont use inbuilt methods to reverse the string, use only loop to solve this problem

// Solution:

function reveresedstr(str){
   let result = ""
   for(let i= str.length-1;i >= 0;i--){
       result  = result + str[i]  
   }
if(str === result){
  return ` ${result} True`
}
else{
   return ` ${result} False`
}
}
 
console.log (reveresedstr("lol"))


// Problem 2
// Write a function takes one parameter(inputString) and return the alternate cased output of that string:
// ("hello") => "HeLlO" (capitalise first word, capitalize third word, capitalize fifth word & so on )
// ("morning") => "MoRnInG" (capitalise first word, capitalize third word, capitalize fifth word & so on )



// You are allowed to use uppercase method to solve the problem
// Solution:

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
console.log (cap("gokulapriyan"));




// Problem 3
// Write a function takes one parameter(emailid) and hides the domain name of email id:
// ("ram@gmail.com") => "ram@****.com" (hides the gmail with equivalent * )
// ("gokul@yahoo.com") => "gokul@*****.com"  (hides the yahoo with equivalent * )



// Solve using built -in methods & without built-in-methods(using only loop) and see the difference Two solutions for the above problem (one using builtin and one using only loops)
// Solution:

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



// Problem 4
// Write a function takes one parameter(number in string format) and returns readable value for our understanding:
// "1" => 1st 
// "2" => 2nd
// "3" => 3rd
// 4,5,6,7,8,9 => 4th, 5th, 6th.. (all values starting from 4 to 9 end in "th")
// "201" => 201st (last value is 1 so it ends in "st")
// "98" => 98 th



// Solve using loops

// Solution:

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
console.log(number("1234567811"))


// Problem 5
// Write a function takes one two params(first-arrayOfObjects, second- searchStr) and returns the unmatch value of an array:
// ([
//   {product_id:1,product_name:"soap", category: "home"},
//   {product_id:2,product_name:"screwdriver", category: "industry"},
//   {product_id:3,product_name:"jeans", category: "clothers"}
// ],
// "jeans"
// ) => ([
//   {product_id:1,product_name:"soap", category: "home"},
//   {product_id:2,product_name:"screwdriver", category: "industry"}
//   ])
  
//   *Explanation* : Our second parameter above is "jeans" which matches the product_name (2nd index), final output should be array which doesnt match the value of "jeans"


// Solve using loops, dony use builtin methods
// Solution:
function items(arr,searchStr){
   let result = []
   for (let i = 0;i<arr.length;i++){
     if (arr[i].product_name!==searchStr){
       result.push(arr[i])
     }
   }
 return result
 }
 console.log(items([
   {product_id:1,product_name:"soap", category: "home"},
   {product_id:2,product_name:"screwdriver", category: "industry"},
   {product_id:3,product_name:"jeans", category: "clothers"}
 ],"soap"))

// Problem 6
// Write a function which removes null, undefined, true, 2, 5, false, Nan from an array and returns the updated array:
// [NaN, 0, 15, false, -22, '',undefined, 47, null] => [15,-22, 47]
//   *Explanation* : Only numbers should be present in the array


// Solve using loops
// Solution;

function removedatatype(arr) {
   let result = []
   for (let i = 0; i < arr.length; i++) {
       if(Boolean(arr[i]) == true){
           result.push(arr[i])
       }
   }
   return result
 
}
 console.log(removedatatype([NaN, 0,15, false, -22, '', undefined, 47, null]))
// Problem 7
// Write a function takes three params first one being the input string, second is prefix word and third is suffix word:
// ("morning", "good", "alex") => "goodmorningalex"
// ("cat", "in", "egory") => "incategory"



// Solve using loops, dont use built-in methods
 
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
 
 
// Problem 8
// Write a function takes input String password, check if the password is weak or string:
// For a password to be strong it should match the below criteria
// password length should be minimum of 8 or above characters password should contain atleast one upper case character password should contain atleast one number password should have atleast one special char(@,#,_,-)
// Helo2my@pass => strong passwword

// helo => weak passwword

// Explanation: You should return strong or weak string if it matches the above criteria

// Solve using loops
 
// Solution;
 
 
function Check_password(password) {
 let condition = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
for(let i=0;i<password.length;i++){
 if(password.match(condition)){
   return "strong password"
 }
 else{
   return "weak password"
 }
}
}
 
console.log(Check_password("reriihvnsdxc3245@pass"))
 


