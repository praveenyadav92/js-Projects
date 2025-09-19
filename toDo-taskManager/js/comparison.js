// Tasks

// Compare Numbers and Strings

// // Task 1
// // Create two variables:
// let a = 5;
// let b = "5";

// // Use == and === to compare them.
// // Print the results.

// 👉 Expected output should show that a == b is true, but a === b is false.

let a = 5;
let b = "5";
const singleCopmare = a == b;
const doubleCompare = a === b ;
console.log(singleCopmare);
console.log(doubleCompare);


// Boolean Comparison

// // Task 2
// // Create a variable:
// let isTrue = true;

// // Compare isTrue with 1 using == and ===.
// // Print the results.


// 👉 You’ll see isTrue == 1 is true, but isTrue === 1 is false.

const isTrue = true ;
const trueCompare = isTrue == 1;
const falseCompare = isTrue === 1;
console.log(trueCompare);
console.log(falseCompare);
// if (isTrue == 1) {
//     console.log("1 is True");
// }
// else if (isTrue === 1) {
// console.log ("1 is false");
// }
// else {
//     console.log("wrong Input");
// }


// Null and Undefined

// // Task 3
// // Compare null and undefined using == and ===.
// // Print the results.


// 👉 This will show you that null == undefined is true, but null === undefined is false.

const value1 = null;
const value2 = undefined;
console.log(value1 == value2);
console.log(value1 === value2);