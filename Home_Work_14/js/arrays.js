// Question 1 
// var names = []; 
// for(var i =0 ; i<5;i++){
//     names[i]= prompt("please enter a name");
// } 

// console.log("The first name is : "+ names[0] +". "+"The last name is"+ names[names.length-1]); // this line print the first name and last name were insert in array 
// console.log("The first name is : "+ names[0] +" \n "+"The last name is : "+ names[names.length-1]); // this line prints the first name and last name Prints each one in a row separately 

// //Displays numbers in reverse order
// var str = ""; 
// for( var j =names.length-1 ; j>=0 ;j--){
//     str+= names[j]+",";
// }
// console.log(str); 
//---------------------------------------------------------------------
//Question 2  
// var fruits = [];
// for (var i = 0; i < 4; i++) {
//     fruits[i] = prompt("please enter a name of fruit");
// } 
// // first option to display each fruit name in in a row separately 
// console.log(fruits[0]+"\n"+fruits[1]+"\n"+fruits[2]+"\n"+fruits[3]); 
// // second option to display each fruit name in in a row separately by using loop
// var str="";  
// for (var i = 0; i < 4; i++) {
//      str += fruits[i] ; 
//      str += "\n";
// }  
// console.log(str);
//---------------------------------------------------------------------
//Question 3 
//  var grades=[] , str="" , inValid=0 , i;
//  for(i=0;i<10;i++){
//      grades[i]= +prompt("please enter a grade");
//  }

//  for ( i=0;i<4;i++){
//      if (grades[i]<0 || grades[i]>100){
//          inValid ++; // a flag varrible to check if the array is valid or not
//          str += grades[i]+" "; // this varrible to save all the invalid grades
//      }
//  } 

//  if(inValid>0){
//      console.log("There is an inValid grade/s in this array, and the invalid grades are: " + str) ;
//  } 
//  else{
//      console.log("The grades in array are valid")
//  }
//---------------------------------------------------------------------
//Question 4 

// var grades = [], sum = 0, avg = 0, max = 0, min;
// for (var i = 0; i < 20; i++) {
//     grades[i] = Math.floor(Math.random() * 100) + 1 // The array gets numbers randomly by using Math.random() in JS
// }

// for (var i = 0; i < 20; i++) { // this loop calculate the sum of numbers and return the max number
//     console.log(grades[i]);
//     sum += grades[i];
//     if (grades[i] > max) {
//         max = grades[i];
//     }

// } 
// min = grades[0];
// for (var i = 1; i < 20; i++) {

//     if(grades[i]<min){
//         min=grades[i];
//     }
// }

// avg = sum / 20;

// console.log(" The sum is: " + sum+"." + " The averge of the grades is : " + avg+"." + " The max number is: " + max+"." + " The min grade is: " + min); 
//---------------------------------------------------------------------
//Question 5 
// var n, string = "";
// n = +prompt("please enter a number");
// for (var i = 1; i <= n; i++) {
//     for (let j = 0; j < n - i; j++) {  // printing spaces
//         string += " ";
//     }
//     for (var k = 1; k <= i; k++) {   // printing number
//         string += k;
//     }
//     string += "\n";
// }
// console.log(string); 
//---------------------------------------------------------------------
//Question 6 
// var n, string = "";
// n = +prompt("please enter a number");
// for (var i = 0; i < n; i++) {   // external loop for lines
//     for (var j = n; j >= 1; j--) { //internal loop to fill the row
//         string += j + " ";    // to store the numbers
//     }
//     string += "\n"; // new line after each row
// }
// console.log(string);
//---------------------------------------------------------------------

//*************************Challenge questions***************************  

//Question 1

// var i,j,stars,num; 
// stars="";
// num=+prompt("please enter the length or width of stars square");
// for(i=0;i<num;i++){    // external loop for lines
//     for(j=0;j<num;j++){    //internal loop to fill the row
//         stars+="*" + " ";  // store stars with space 
//     } 
//    stars+= "\n";  // new line after each row
// } 
// alert(stars);

//-----------------------------------------------------------------

//Question 2 

// var i,j,stars,length,width; 
// stars="";
// length=+prompt("please enter the length of stars square"); 
// width=+prompt("please enter the width of stars square");
// for(i=0;i<length;i++){
//     for(j=0;j<width;j++){
//         stars+="*"+" ";    
//     } 
//    stars+= "\n";
// } 
// alert(stars); 

//-----------------------------------------------------------------

//Question 3 

// var n  , stars = "";
// n = +prompt("Please enter a number");
// for (var i = 0; i < n; i++) {
//   for (var k = 0; k < n - i; k++) {
//     stars += "*";
//   }
//   stars += "\n";
// }
// alert(stars);