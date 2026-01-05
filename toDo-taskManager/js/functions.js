"use strict";

function praveen() {
const name = "My Name is Praveen";
const age = "I am" + " " + 23 + " " + "years old";
console.log(name + "," + age);
}
praveen();



function mixJuice (orange, mango) {
const finalJuice = `i am drinking juice contains ${orange} including ${mango} mangoes`;
return finalJuice;
}
const myResult = mixJuice(4,5)
console.log(myResult);



// Task 1: Simple Function

// Create a function called sayHello that prints:

function sayHello() {
console.log("Hello, Welcome to JavaScript!");
}
sayHello();

// Task 2: Function with Parameters

// Create a function greetUser(name)
// It should print:Hello Praveen

function greetUser(name) {
console.log("Hello " + name);
}
greetUser("Praveen");


// Task 3: Add Two Numbers

// Create a function addNumbers(a, b)
// It should print the sum of two numbers.

function addNumbers(a,b) {
console.log(a + b);
}
addNumbers(50, 20);



// Task 4: Return a Value

// Create a function multiply(a, b)
// Return the multiplication result and print it outside the function.

function multiply(a,b) {
const result = a * b;
return result;
}
console.log(multiply(10, 5));



// ? Task 5: Even or Odd

// Create a function checkEvenOdd(number)
// It should return:

// "Even" if number is even

// "Odd" if number is odd

// ?? Call and print the result.

function checkEvenOdd(number) {
const checkResult = (number % 2 === 0) ? "Even Number" : "Odd Number";
return checkResult;
}
console.log(checkEvenOdd(21));



// ? Task 6: Age Checker

// Create a function canVote(age)
// Return:

// "Eligible to vote" if age = 18

// "Not eligible to vote" otherwise

function canVote(age) {
const eligiblity = (age >= 18 && age <= 100) ? "Eligible to vote" : "Not eligible to vote";
return eligiblity;
}
console.log(canVote(20));



// ? Task 7: Calculate Total Marks

// Create a function calculateTotal(marks1, marks2, marks3)
// Return the total marks.

// ?? Example:

// calculateTotal(70, 80, 90); // Output: 240


// ? Task 8: Function Expression

// Create a function expression to subtract two numbers.

// const subtract = function(a, b) { ... }

const subTract = (a,b) => {
 return (a - b);
}
console.log(subTract(80,50));



// ? Task 9: Arrow Function

// Create an arrow function square(num)
// Return the square of a number.

// ?? Example:

// square(5); // 25


const square = (num) => {
const squareOutput = num * num;
return squareOutput;
}
console.log(square(25));



// ?? LEVEL 5: Mini Challenges (Think!)
// ? Task 10: Find Largest Number

// Create a function findLargest(a, b, c)
// Return the largest number.


function findLargest(a,b,c) {
if(a >= b && a >=c) {
return a;}
else if (b >= a && b >= c) {
return b;}
else {
return c;}
}
console.log(findLargest(10,50,12));




// ? Task 11: String Length Checker

// Create a function checkLength(str)
// Return:

// "Long string" if length > 10

// "Short string" otherwise

function checkLength(str) {
if (str.length > 10) {
return "Long String"}
else {
return "Short string"
};
}
console.log(checkLength(String(200000000000)));


// ? Task 12: Calculator Function

// Create a function calculator(a, b, operator)

// ?? Operators:

// + ? add

// - ? subtract

// * ? multiply

// / ? divide


function calculator(a, b, operator) {
if (operator === "+") {
return a + b;
}
else if (operator === "-") {
return a - b ;}
else if (operator === "*") {
return a*b;}
else if (operator === "/") {
return a /b}
else {
return "Invalid Operator selected"};
}
console.log(calculator(20,50,"+"));



