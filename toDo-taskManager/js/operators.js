// Task 1: Addition & Subtraction
// console.log(5+5);
// console.log("5"+5);
// console.log(5+"5");
// console.log(Number("5"+"5"));
// console.log(Number("5")+Number("5"));
// console.log(+"5" + +"10");
// console.log(+"5" + -"10");


document.getElementById("one").innerHTML="Ans: = " + (7 + 8);
document.getElementById("two").innerHTML="Ans: = "+ 7+ "8";
document.getElementById("three").innerHTML="Ans: = " + (Number("7")+ Number("8"));
document.getElementById("three").innerHTML="Ans: = " +(+"7" + +"8");
document.getElementById("four").innerHTML="Ans: = "+ (true + 5);
document.getElementById("five").innerHTML="Ans: = " + (2 + 3 + 4);
document.getElementById("five").innerHTML="Ans: = " + (Number("2")+Number("3")+Number("4"));

const one = 7;
const two = 8 ;
const result = one + two;
document.getElementById("one").innerHTML = "Ans: = "+ result;

const primary = 7;
const secondary = "8";
const final = primary+secondary;
document.getElementById("two").innerHTML="Ans: = " + final;

const Number1 = "7";
const Number2 = "8";
const output = (Number(Number1)+Number(Number2))
document.getElementById("three").innerHTML = "Ans: =" + output;

const value1 = true;
const value2 = 5;
const merged = value1+value2;
document.getElementById("four").innerHTML= "Ans: = " + merged;

const op1 = "2";
const op2 = "3";
const op3 = "4";
const value = (Number(op1)+Number(op2)+Number(op3));
document.getElementById("five").innerHTML="Ans: = " + value;


document.getElementById("six").innerHTML="Ans: = " + (10 - 3);
document.getElementById("seven").innerHTML="Ans: = "+ ("10" - "3");
document.getElementById("eight").innerHTML="Ans: = "+ (5 - true);
document.getElementById("nine").innerHTML="Ans: = " + "hello" - 2;
document.getElementById("ten").innerHTML="Ans: = " + ((20 -5) - 3);


document.getElementById("multi1").innerHTML="Ans: =" + (5*4);
document.getElementById("multi2").innerHTML="Ans: =" + ("5" * "4");
document.getElementById("multi3").innerHTML="Ans: =" + (10*0);
document.getElementById("multi4").innerHTML="Ans: =" + (-3*6);
document.getElementById("multi5").innerHTML="Ans: =" + (2+3)*4;


// document.getElementById("exp1").innerHTML = "Ans: = " + (2 ** 3);
// document.getElementById("exp2").innerHTML="Ans: ="+ ;
// document.getElementById("exp3").innerHTML="Ans: ="+ ;
// document.getElementById("exp4").innerHTML="Ans: ="+ ;
// document.getElementById("exp5").innerHTML="Ans: ="+ ;


// Task 1: Temperature Conversion

// You are given a temperature in Celsius. Convert it to Fahrenheit using the formula:

// 𝐹=(𝐶×95)+32F=(C×59)+32

// Your tasks:

// Store a temperature in Celsius in a variable.

// Convert it into Fahrenheit using the formula.

// Print both Celsius and Fahrenheit values.

const Celsius = 25;
const Fahrenheit = (Celsius * 9/5) + 32;
console.log("Temprature in Celsius is ="+Celsius +" , " +"Temprature in fahrenheit is"+Fahrenheit);


// Task 2: Rectangle Area and Perimeter

// You are given the length and width of a rectangle.

// Your tasks:

// Store length and width in variables.

// Calculate the area = length × width.

// Calculate the perimeter = 2 × (length + width).

// Print area and perimeter.

const length = 25;
const width = 35;
const area = length * width;
const perimeter = 2 * (length + width);
console.log("Area is =" + area + " , "+  "Perimeters are = " + perimeter );



// Task 3: Average Marks

// A student scored 85 in Math, 90 in Science, and 78 in English.

// Your tasks:

// Store the marks in variables.

// Calculate the total marks.

// Find the average marks.

// Print total and average.

const mathMarks = 85;
const scienceMarks = 90;
const englishMarks = 78;
const totalMarks = mathMarks + scienceMarks + englishMarks;
const averageMarks = totalMarks / 3 ;

console.log("Total marks are ="+ totalMarks + " , "+ "Average of marks =" + averageMarks);


// Task 4: Remainder Operator

// You want to divide 29 apples equally among 5 friends.

// Your tasks:

// Store the number of apples and number of friends in variables.

// Use the division operator (/) to find how many apples each friend gets.

// Use the modulus operator (%) to find how many apples remain.

// Print the result.


const totalApples = 29;
const totalFriends = 5;
const eachApples = Math.floor(totalApples/totalFriends);
const remainApples = totalApples % totalFriends;

console.log("Apple for each Friends =" + eachApples + " , "+ "No of Remaining Apples =" + remainApples);



// Task 5: Compare Numbers

// You are given two numbers: a = 15 and b = 20.

// Your tasks:

// Use comparison operators (>, <, >=, <=, ===, !==) to compare a and b.

// Store results in Boolean variables.

// Print all results.

const a = 15;
const b = 20;
const greaterThen = a>b;
const lessThen = a<b;
const greaterThenOrEquilesto = a>=b;
const lessThenOrEquilesto = a<=b;
const checkEverthing = a ===b;
const notEqualsTo = a !==b;

console.log (greaterThen,lessThen,greaterThenOrEquilesto,lessThenOrEquilesto,checkEverthing,notEqualsTo);


// New Practice Tasks
// Task 1: Simple Calculator

// You are given two numbers: num1 = 12, num2 = 5.

// Your tasks:

// Store numbers in variables.

// Calculate sum, difference, product, quotient, and remainder.

// Print all results.

const num1 = 12;
const num2 = 5;
const sum = num1+num2;
const difference = num1 == num2;
const product = num1 * num2;
const quotient = num1/num2;
const remainder = num1%num2;
console.log(sum,difference,product,quotient,remainder);



// Task 2: Compound Assignment

// You start with let x = 10.

// Your tasks:

// Add 5 to x using +=.

// Multiply x by 3 using *=.

// Subtract 4 from x using -=.

// Divide x by 2 using /=.

// Print x after each operation.


let x = 10;
console.log(x);
x+= 5;
console.log(x);
x*= 3;
console.log(x);
x-=4;
console.log(x);
x/=2;
console.log(x);


// Task 4: Logical Operators

// You want to check if a number is between 10 and 50.

// Your tasks:

// Store a number in a variable.

// Use the AND (&&) operator to check if it is greater than 10 and less than 50.

// Use the OR (||) operator to check if it is less than 10 or greater than 50.

// Use the NOT (!) operator to flip a condition.

// Print all results.

const num = 15;
const andResult = num > 10 && num<60;
const orResult = num <=20 || num>=60;
const notResult = !(num ===15);
console.log(andResult,orResult,notResult);

// Task 6: Increment and Decrement

// Start with let count = 10.

// Your tasks:

// Increase count by 1 using ++.

// Decrease count by 1 using --.

// Print results after each operation.


let count = 10;
let increase = count++;
let decrease = count--;
console.log(increase,decrease);



const firstName = "Praveen";
const lastName = "Yadav";
const birthYear = 1992;
const currentYear = 2050;
const myDetails = `My Self ${firstName},${lastName} I am ${currentYear-birthYear} year's old`;
console.log(myDetails);


// const marksWeight = 78;
// const marksHeight = 1.69;
// const johnsWeight = 92;
// const johnssHeight = 1.95;
const marksWeight = 95;
const marksHeight = 1.88;
const johnsWeight = 85;
const johnssHeight = 1.76;
const marksBMI = marksWeight / marksHeight ** 2;
const johnsBMI = johnsWeight / johnssHeight ** 2;
const markHigherBmi = marksBMI > johnsBMI;

console.log("Makrs BMI = " + marksBMI);
console.log("Johns BMI = " + johnsBMI);
console.log("Is Mark's BMI higher than John's?" + markHigherBmi);