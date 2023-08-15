// A variable is a container for storing data
// A variable behaves as if it was the value that it contains
// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)
let firstName ="Bro"; //strings H
let age =21; //number
let student = true; //booleans
console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolld: ", student);
age=(age-99);//Math.floor(for quotient) & Math.ceil also works
document.getElementById("p1").innerHTML = "Hello" + firstName;
document.getElementById("p2").innerHTML ="You are" +age + " years old";
document.getElementById("p3").innerHTML = "Enrolled:" + student;