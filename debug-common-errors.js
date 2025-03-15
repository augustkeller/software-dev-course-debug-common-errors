/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp"); // Syntax Error. There was a missing closing quotes, a missing closing parenthesis, and a missing semicolon.

// What’s Wrong? - Syntax Error. There is a missing closing quotes, a missing closing parenthesis, and a missing semicolon.


// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, 8]; // Runtime Error. The number 8 assignment was spelled out as a string "eight", which could not be recognized as a number.
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// What’s Wrong? - Runtime Error. The number 8 assignment was spelled out as a string "eight", which could not be recognized as a number.



// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;  // Supposed to indicate num is NOT prime // return assignment switched to false from true.
    }
  }
  return true; // Supposed to indicate num IS prime // return assignment switched to true from false.
}

console.log(isPrime(7)); // Expected true but gets false

// What’s Wrong? - Logic Error. Return assignments true and false were swapped on lines 54 and 57.
