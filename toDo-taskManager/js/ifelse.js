// const name = "Bijeta"
// const age = 20;
// const canDrive = age >= 18;

// if (canDrive) {
//     console.log(name+" can apply for Driving license");
// }
// else {
//     const remaingYears = 18-age;
//     console.log(`${name} you have to wait for another ${remaingYears} years to apply for a new Driving license`);
// }


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




// Intermediate If–Else Practice 🌟

// Task 1: Movie Ticket Pricing 🎟️

// A cinema charges:

// ₹120 per ticket for adults (age 18–59)

// ₹80 for children (under 18)

// ₹100 for seniors (60 and above)

// 👉 Write a program that takes age as input and prints the ticket price.

// const age = Number(prompt("Enter age form 0-100"));

// if (age >= 18 && age <=59) {
//     console.log("Ticket price is ₹120 for adults");
// }
// else if (age>= 0 && age <18) {
//     console.log("Ticket price is ₹80 for children");
// }
// else if (age >= 60 && age<=100) {
//     console.log("Ticket price is ₹100 for seniors");
// }
// else {
//     console.log("Wrong Input please Enter age from 0-100");
// }



// Task 2: Leap Year Checker 📅

// A year is a leap year if:

// divisible by 4, but

// not divisible by 100, unless also divisible by 400.

// 👉 Input year = 2024, and print whether it’s a leap year or not.






// Task 3: Student Result Calculator 📊

// A student has scores in Math, Science, English.

// Rules:

// Average ≥ 90 → Grade A

// 75–89 → Grade B

// 50–74 → Grade C

// Below 50 → Fail

// 👉 Print Total Marks, Average, and Grade using if–else if–else.






// Task 4: ATM Withdrawal 💰

// Balance = 5000.

// A user wants to withdraw some amount.

// 👉 If amount ≤ balance, print "Transaction Successful" and new balance.

// 👉 Else print "Insufficient Balance".







// Task 5: Traffic Light 🚦

// A variable signal can have values: "red", "yellow", "green".

// 👉 Print:

// "Stop" if red

// "Get Ready" if yellow

// "Go" if green

// "Invalid signal" otherwise.






// Task 6: Simple Login System 🔑

// Username = "admin", Password = "1234".

// 👉 If both match → "Login Successful"

// 👉 Else if username correct but password wrong → "Incorrect Password"

// 👉 Else if password correct but username wrong → "Incorrect Username"

// 👉 Else → "Login Failed".

// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

const bill = 280;
const tip = (bill >= 50 && bill <=300) ? bill * 0.15 : bill * 0.20;
const total = bill + tip;
console.log (`The actual bill is ${bill}, the tip is ${tip}, and the total value is ${total}`);


// Task 1: Basic Condition (Very Easy)

// Goal: Check if a number is positive or negative.

// Requirement

// Create a variable num

// Use a ternary operator

// Print:

// "Positive" if number ≥ 0

// "Negative" otherwise

const num = -1;
const result = (num >= 0) ? "positive Number" : "Negative number";
console.log (result);



// Task 2: Even or Odd

// Goal: Check if a number is even or odd.

// Requirement

// Variable: number

// Use % operator

// Use ternary only (no if)

const numtest = 11;
const resultOddEven = (numtest % 2 === 0) ? "Even number" : "Odd number";
console.log (resultOddEven);


// Task 3: Age Check

// Goal: Check if a person is eligible to vote.

// Condition

// Age 18 or more → "Eligible"

// Otherwise → "Not Eligible"


const age = 18;
const resulVote = (age >= 18 && age <= 100) ? "you are eligible vote" : "you are not eligible for vote";
console.log (resulVote);



// Task 4: Password Length Check (Medium)

// Goal: Validate password length.

// Rules

// Length ≥ 8 → "Strong Password"

// Otherwise → "Weak Password"

const passLength = "abgfgfgfgf78";
const resultPass = (passLength.length >= 8 ) ? "Strong Password" : "Weak Password" ;
console.log(resultPass);



