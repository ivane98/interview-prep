// function factorialIterative(num) {
//   let answer = 1;
//   for (let i = num; i >= 1; i--) {
//     answer *= i;
//   }
//   return answer;
// }

// // console.log(factorialIterative(5));

// function factorialRecursive(num) {
//   if (num <= 1) {
//     return 1;
//   }

//   return num * factorialRecursive(num - 1);
// }

// console.log(factorialRecursive(5));

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// function fibonacciIterative(n) {
//   let nums = [0, 1];

//   for (let i = 1; i < n; i++) {
//     let sum = nums[i] + nums[i - 1];
//     nums.push(sum);
//   }
//   return nums[nums.length - 1];
// }
// // console.log(fibonacciIterative(6));

// function fibonacciRecursive(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }

// console.log(fibonacciRecursive(6));

//Implement a function that reverses a string using iteration...and then recursion!
// function reverseString(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }

// function reverseStringRecursiom(str) {
//   if (str === "") {
//     return "";
//   }

//   return reverseStringRecursiom(str.substr(1)) + str.charAt(0);
// }

// console.log(reverseStringRecursiom("yoyo mastery"));
//should return: 'yretsam oyoy'
