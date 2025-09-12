const name = "Bijeta"
const age = 20;
const canDrive = age >= 18;

if (canDrive) {
    console.log(name+" can apply for Driving license");
}
else {
    const remaingYears = 18-age;
    console.log(`${name} you have to wait for another ${remaingYears} years to apply for a new Driving license`);
}


// const birthYear = 1992;
// let century;

// if (birthYear <= 2000) {
//     century = "you are born in " + 20 +"th Century";
// }
// else {
//    century = "you are born in " + 21 +"st Century";
// }
// console.log(century);



// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.

// const marksWeight = 78;
// const marksHeight = 1.69;
// const johnsWeight = 92;
// const johnssHeight = 1.95;
const marksWeight = 95;
const marksHeight = 1.88;
const johnsWeight = 85;
const johnssHeight = 1.76;
const marksBMI = marksWeight / (marksHeight * marksHeight);
const johnsBMI = johnsWeight / (johnssHeight * johnssHeight);
const markHigherBmi = marksBMI > johnsBMI;

console.log("Makrs BMI = " + marksBMI);
console.log("Johns BMI = " + johnsBMI);

if(marksBMI >= johnsBMI) {
    console.log(`Mark's BMI (${marksBMI}) is then john's!`);
}
else {
        console.log(`Johns's BMI (${johnsBMI}) is then Marks's!`);
}


// 🌟 If–Else Practice Tasks 🌟

// Task 1: Voting Eligibility
// You are given an age = 17.
// 👉 If age is 18 or above, print "You can vote".
// 👉 Else, print "You are too young to vote".

const voterAge = 17;
const voterEligiblity = voterAge >= 18;
 if (voterEligiblity) {
    console.log("You are Eligible for vote");
 }
 else {
     console.log("You are too young to vote");
 }


// Task 2: Even or Odd
// You are given a number = 42.
// 👉 Check if the number is even or odd.
// 👉 Print "Even" or "Odd".

const digit = 42;
if (digit % 2 === 0 ) {
console.log ("This is Even No");
}
else {
    console.log("This is Odd No");
}

// Task 3: Positive, Negative, or Zero
// You are given a number = -5.
// 👉 Use if–else if–else to check:
//    - Print "Positive" if greater than 0
//    - Print "Negative" if less than 0
//    - Print "Zero" if equal to 0.

const digit2 = -5;
if (digit2 > 0) {
    console.log("Positive");
}
else if (digit < 0) {
    console.log("Negative")
}
else {
    console.log("Zero")
}


// Task 4: Grade Checker
// You are given marks = 72.
// 👉 Use if–else if–else to assign grades:
//    - 90 and above → "A"
//    - 75 to 89 → "B"
//    - 50 to 74 → "C"
//    - Below 50 → "F"
// 👉 Print the grade.

const marks = 72;
 if (marks >= 90) {
    console.log("You have scored grade A");
 }
else if (marks >= 75 && marks <=89) {
    console.log("You have scored grade B");
 }
else if (marks >= 50 && marks <=74) {
    console.log("You have scored grade C");
 }

else {
   console.log("You have scored grade F");
}

// Task 5: Largest of Two Numbers
// You are given num1 = 10, num2 = 25.
// 👉 Use if–else to print which number is larger.

const num1 = 10;
const num2 = 25;
if (num1 >= num2) {
    console.log(num1+"This is the larger no");
}
else {
    console.log(num2+"This is the larger no");
}

// Task 6: Century Checker
// You are given birthYear = 1998.
// 👉 If year <= 2000, print "20th Century".
// 👉 Else, print "21st Century".

const birthYear = 1998;
let century;

if (birthYear <= 2000) {
    century = "you are born in " + 20 +"th Century";
}
else {
   century = "you are born in " + 21 +"st Century";
}
console.log(century);

// Task 7: Password Check
// You are given password = "admin123".
// 👉 If password equals "admin123", print "Access granted".
// 👉 Else, print "Access denied".

const password = "admin123";

if (password === "admin123") {
    console.log("Access granted");
}
else {
    console.log("Access denied");
}