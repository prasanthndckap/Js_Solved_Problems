// write a function which takes two parameter one being the age
//  and other being the name of the person

// (7,"Adam") => "Adam is not eligible"
// (20, "Prakash") => "Prakash is eligible"

function eligible(age, name) {
  if (age < 18) {
    return name + "is not eligible";
  } else {
    return name + "is elgible";
  }
}

console.log(eligible(7, "ram"));
