// write a program to repeat a string by given number 

function repeatstr(n,str) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += " " + str 
    }
    return result
}
console.log(repeatstr(9,"ha"))

