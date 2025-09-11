// Task 1 

let myName = "Praveen";
let myAge = "32 years";
let isStudent = true;

console.log(myName);
console.log(myAge);
console.log("student?"+isStudent);


// Task 2
let city = "New Delhi";

document.getElementById("ans").innerHTML="Ans: "+city+"<br>";

{
    let city = "Mumbai";
    document.getElementById("ans").innerHTML+="Ans: "+city+"<br>";
}


// Task 3
let firstName= "Praveen";
let lastName = "Yadav";
let fullName = firstName +" "+ lastName;
document.getElementById("fullName").innerHTML="Ans: " + fullName;


// Task 4
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
let multiply = num1 * num2;
let minus = num1-num2;
document.getElementById("sum").innerHTML="Sum = "+sum + "<br>";
document.getElementById("sum").innerHTML+="Multiply = "+ multiply + "<br>";
document.getElementById("sum").innerHTML += "Minus = " + minus;


// Task 5
const birthYear = 1992;
// birthYear = 2025;
document.getElementById("birthyear").innerHTML= "Ans with const := " + birthYear + "<br>";

let currentYear = 2025;
document.getElementById("birthyear").innerHTML+= "Ans with let:= " + currentYear+ "<br>";
currentYear = 1992;
document.getElementById("birthyear").innerHTML+= "Ans with let changed Value:= " + currentYear;



