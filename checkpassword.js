
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

console.log(Check_password("prsanth@gamil.com"))

function checking_password(password) {
  if (password.length<=8){
    for (let i = 0; i < password.length; i++) {
      // console.log(i);
      if (password[i] == password[i].toUpperCase()) {
        return "stong password";
    }
    else{
      console.log("Weak Password"); 
    }
  }

  }
}
checking_password("prasa th");