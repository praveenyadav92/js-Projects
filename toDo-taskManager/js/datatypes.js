// Tasks on Type Conversion

// Create a variable numStr = "123".

// Convert it into a number using Number().

// Add 10 to it and print the result.

const numStr = "123";
console.log(Number(numStr)+10);


// Create a variable num = 50.

// Convert it into a string using String().

// Print "The number is: " followed by the string.

const num = 50;
console.log('"The number is: " followed by the string' +" "+ String(num));



// Create a variable boolVal = true.

// Convert it to a number.

// Convert it to a string.

// Print both results.

const boolVal = true;
const toNum = Number(boolVal);
const toStr = String(boolVal);
console.log(toNum,toStr);




// Take a variable str = "Hello123".

// Convert it to a number using Number().

// Print the result and explain why it becomes NaN.

const str = "Hello123";
console.log(Number(str));