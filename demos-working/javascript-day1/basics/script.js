/* 
Javascript Basics
*/

// This is a single-line Javascript comment

/* 
Data types
*/

// Numeric data type
// let academicYear; // initializing the variable
// academicYear = 2024; // assignment value to the variable
let academicYear = 2024; // initialize and assign all on one line

// String
let student = 'Sophia';

// Boolean
let graduating = false;

// Undefined/null
let major; // undefined
let address = null; 

// Array (lists)
let groceries;
groceries = ["bread", "eggs", "apples", "lettuce"]; // array
console.log(groceries);
// arrays in JS are 0-indexed
let fruit = groceries[2]; // fruit is assigned to "apples" // string
let groceryList = groceries.length; // 4 // integer


/*
JavaScript Operators
*/

// Assignment operator
// =

// Arithmetic operators
// +, -, /, *, ++, --, %

// String operators
// +
console.log("hello" + "there"); // creates a new string 'hellothere'

// Comparison operators compare values and return true or false
// ==, ===, !=, !==, >, <, >=, <=

// Logical operators combine expressions and return true or false
// &&, ||, ! 

// JS expression that uses 2 or more values to return a single value
let percentage = 44 / 48;

/*
Accessing elements on the page with DOM queries
*/

// Methods that return a single element node:
// getElementById('id');
// querySelector('css-selector');

// Methods that return one or more elements as a NodeList:
// getElementsByClassName('class');
// getElementsByTagName('tag');
// querySelectorAll('css-selector');

