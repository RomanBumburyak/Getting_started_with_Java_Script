// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
let givenName;
// A: undefined


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A: Tim


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A: Tim


// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
// A: "Hello, how are you? Tim"


// 5.
// What is `math` set to?
let high = 50;
let low  = 10;
let math = high - low;
// A: 40


// 6.
// What is `math` set to?
math = high - "5";
// A: Math (50);

   Math(50);
  console.log(Math)

// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
// A:
let age = today - born

// 8.
// Adjust this code. Store some information in the following variables.
// A:
let yourName="Roman Bumburyak"
let instructorName="Isaac Hardy"

// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:

// This statement should read correctly
let statement = "Roman Bumburyak" + " is taking a class at The Iron Yard, my instructor's name is " + "Isaac Hardy";
// Answer: Roman Bumburyak is taking a class at the Iron Yard, my instructor's name is Isaac Hardy.

// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber= 6789998212;
let myString= "6789998212"
let myBoolean= true;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined= telephone;
// A: answers above.


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
let x = (false == 0);
// A. true


// 12.
let y = (false == "");
// A. true


// 13.
let z = (0 == "");
// A. true


// 14.
let a = (null == null);
// A. true


// 25.
let b = (undefined == undefined);
// A. true


// 16.
let c = (undefined == null);
// A. true


// 17.
let d = (null == false);
// A. true


// 18.
let e = (NaN == null);
// A. true


// 19.
let f = (NaN == NaN);
// A. true


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
let thirsty = true;


  if (thirsty){
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
let x;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false, x is null because it does not equal anything.There is nothing attributed to this variable.


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false. The string is empty.


// 23.
// this expression will set x to NaN
let x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False.  1 * undefined equals undefined, and undefined is falsey.


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False. false is a simple boolean, don't be confused by this.

// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True. All numbers are considered true/ truly except for zero.


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A: true. nothing here is false, it's entirely correct.


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false. Nothing in the curly braces.


// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: true, nothing here is false.


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false. The Date is undefined.


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.
