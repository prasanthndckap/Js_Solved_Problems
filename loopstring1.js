
// Write a function which takes string as input, loop through the string upto 3 letters

/* hello =>  h
             e
             l
*/


function loopStr(name){
    for(let i=0; i<name.length; i++){
        console.log(name[i])
        if(i === 1){ // we are in third letter
            break;
        }
    }
}
loopStr("hello")
