// Question 1 

// function fullName() {
//     let firstName, lastName;
//     firstName = prompt("please enter your first name: ");    //save the value in parameter firstName
//     lastName = prompt("please enter your last name: ");      //save the value in parameter lasttName 
//     console.log("You are welcome " + " " + firstName + " " + lastName);
// }
// fullName();
// fullName();



//-----------------------------------------------------------------
// Question 2
// function sumAvg(num1, num2, num3) {
//     let sum = 0;                  // defining an empty parameter
//     let avg = 0;                  // defining an empty parameter
//     sum = num1 + num2 + num3;
//     avg = sum / 3;
//     console.log("The sum of the numbers is: " + sum + " ," + "the averge is: " + avg);
// }
// sumAvg(5, 8, 8);  //Hard-Coded
// let randNum1 = Math.floor(Math.random() * 20 + 10);
// let randNum2 = Math.floor(Math.random() * 100 + 50);
// let randNum3 = Math.floor(Math.random() * 10 + 1);
// sumAvg(randNum1, randNum2, randNum3);  // send to function a random numbers
// let number1, number2, number3;
// number1 = +prompt("please enter a number");
// number2 = +prompt("please enter a number");
// number3 = +prompt("please enter a number");
// sumAvg(number1, number2, number3); // send numbers from the user



//-----------------------------------------------------------------
// Question 3
// let string = "";     // defining an empty string
// function lengthLine(n) {    // function to print a row of stars 
//     for (let j = 0; j < n; j++) {
//         string += "*" + " ";
//     }
// }
// function sizeStarSquare(n) {
//     for (let i = 0; i < n; i++) {
//         lengthLine(n);
//         string += "\n";    // newline after each row
//     }
//     console.log(string);
// }
// sizeStarSquare(+prompt("please enter the size of star's square"));



//-----------------------------------------------------------------
// Question 4
// function lineNumber(i) {
//     let str = "";  // defining an empty string
//     for (let j = 1; j <= i; j++) {         //  function to print a numbers in row
//         str += j + " ";
//     }
//     console.log(str);
// }
// function drawTriangle(t) {
//     for (let i = 1; i <= t; i++) {
//         lineNumber(i);
//     }
// }
// drawTriangle(+prompt("please enter a number"));



//-----------------------------------------------------------------
//Question 5
// function starLine(n) {   // function to  print stars in each row
//     let str = "";
//     for (let j = 0; j < n; j++) {
//         str += "*" + " ";
//     }
//     console.log(str);
// }
// function drawTriangleStar(t) {    // function to drawv a triangle
//     for (let i = t; i > 0; i--) {
//         starLine(i);
//     }
// }
// drawTriangleStar(+prompt("please enter a number"));



//-----------------------------------------------------------------
// Question 6

// function rows(n) {
//     let str = "";
//     for (let k = 1; k <= n; k++) {   // loop to add numbers
//         str += k;
//     }
//     for (let i = 1; i <= n; i++) {   // loop to add stars
//         str += "*";
//     }
//     console.log(str);
// }
// function numStars(n) {
//     for (let j = n; j >= 1; j--) {
//         rows(j);
//     }
// }
// numStars(+prompt("enter number"));



//-----------------------------------------------------------------
// Question 7

// function rowTriangle(n) {   // function to print a stars in the row of triangle
//     let str = "";           // defining an empty string   
//     for (let i = 1; i <= n; i++) {
//         str += "*";
//     }
//     console.log(str);
// }
// function twoRightTriangles(n) {   // function to draw two right triangls
//     let num = n;     // defining a parameter to store the length of triangle
//     for (var i = num; i >= 0; i--) {      // loop to draw  upper right triangle
//         rowTriangle(i);
//     }
//     for (var i = 1; i <= num; i++) {     // loop draw bottom right triangle
//         rowTriangle(i);
//     }
// }

// twoRightTriangles(+prompt("please enter a number"));