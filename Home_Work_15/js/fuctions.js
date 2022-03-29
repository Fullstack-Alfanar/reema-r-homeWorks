// Questin 1  

// let sum =0 , avg =0 , arr1=[5,6,3,2,7,8] , arr2=[15,16,22,4,10] , arr3=[11,5,9] ,result1=0,result2=0,result3=0   ;
// function avgArray(arr=[]){
//     for(let i=0 ; i<arr.length;i++) 
//         sum+=arr[i];

    
//     avg = sum/arr.length; 
//     return  avg ;
// }   

// result1=avgArray(arr1);
// result2= avgArray(arr2);
// result3= avgArray(arr3); 
// alert( "The averge of arr1 is : "+result1+"\n" +" The averge of arr2 is : " + result2+"\n" +" The averge of arr3 is : "+ result3);


//------------------------------------------------------------

// Question 2 

// let min , arr1=[5,6,3,2,7,8] , arr2=[15,16,22,4,10] , arr3=[11,5,9] ,result1=0,result2=0,result3=0 ; 
//  function minimumValue (arr=[]) {
//      min=arr[0]; 
//      for(var i =1 ; i<arr.length ;i++){  // loop to check the minimum value in array
//          if (arr[i]<min) { 
//              min=arr[i];  

//          }
//      } 
//      return min ;
//  } 
//  result1 = minimumValue(arr1);
//  result2 = minimumValue(arr2);
//  result3 = minimumValue(arr3); 
// alert( "The minimum value of arr1 is : "+result1+"\n" +" The minimum value of arr2 is : " + result2+"\n" +" The minimum value of arr3 is : "+ result3);


//------------------------------------------------------------
// Question 3

// let max , words1=["vfgxdhb","dgsGrgRF","hrshrzbrhfdsa"], words2=["vfgjhxdhb","dgsGrgRF","dsa"] ,words3=["cvfgxdhb","dgsGrhjvgRF","hrhfdsa"], result1=0 ,result2=0,result3=0; 
// function maxLength(arr=[]){  
//      max=arr[0].length       // initialize the paramter max with the length of the first word in array
//     for(let i =1 ; i<arr.length ;i++){  // loop to check the longest word in array
//         if(arr[i].length >max) {
//             max= arr[i].length;
//         } 
//     }
//     return max;
// }  
// result1=maxLength(words1); 
// result2=maxLength(words2); 
// result3=maxLength(words3); 
// alert("The maximun length of string in array's words1 is: "+ result1 + "\n"+ "The maximun length of string in array's word2 is: "+ result2 + "\n"+"The maximun length of string in array's words3 is: "+ result3 + ".");


//------------------------------------------------------------
// Question 4 

// let max, maxLengthString , words1=["vfgxdhb","dgsGrgRF","hrshrzbrhfdsa"], words2=["vfg452jhxdhb","dgsGrgRF","dsa"] ,words3=["cvfgxdhb","dgsGrhjvgRF000","hrhfdsa"], result1=0 ,result2=0,result3=0; 
// function maxSrting(arr=[]){  
//      max=arr[0].length ;  // store the length of the first word
//      maxLengthString=arr[0];   // initialize with the first word in array
//     for(let i =1 ; i<arr.length ;i++){ 
//         if(arr[i].length >max) {
//             max= arr[i].length; 
//             maxLengthString = arr[i];
//         } 
//     } 
//  return maxLengthString;
// }  
// result1=maxSrting(words1); 
// result2=maxSrting(words2); 
// result3=maxSrting(words3); 
// alert("The maximun length of string in array's words1 is: "+ result1 + "\n"+ "The maximun length of string in array's word2 is: "+ result2 + "\n"+"The maximun length of string in array's words3 is: "+ result3 + "."); 


//------------------------------------------------------------
// Question 5  

// let sum = 0, avg = 0, count = 0, arr1=[3, 2, 7, 8,5,5,2,6,10,11] , arr2=[15, 22, 4, 10, 15, 15,13.5] , arr3=[14, 20, 14] , result1 = 0, result2 = 0, result3 = 0;
// function greaterThanavg(arr = []) {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];

//     }
//     avg = sum / arr.length;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] >= avg) {
//             count++;
//         }
//     } 
//     return count;
// }

// result1=greaterThanavg(arr1);
// result2 = greaterThanavg(arr2);
// result3= greaterThanavg(arr3); 
// alert("The number of values that greater or equal to averge of arr1 is : " + result1 + "\n" + " The number of values that greater or equal to averge of arr2 is : " + result2 + "\n" + " The number of values that greater or equal to averge of arr3 is : " + result3); 


//------------------------------------------------------------
// Question 6 
// let num , count=0 , result; 
// num= + prompt("please enter a number");

// function primeNum (num){ 
//     for(let i=2;i<num/2;i++){ // loop to check how many numbers the number divides without a remainder
//         if(num%i==0){
//             count++;
//         }
//     } 
//     if (count>0){  // if amount of the numbers that number divides without a remainder greater than 0 , it is not a prime number
//         return false;
//     } 
//     else {
//         return true;
//     }

// }
// result= primeNum(num); 
// alert(result); 


//------------------------------------------------------------
// Question 7
// let cnt=0 , arr1=[5,13,3,10,7,17] , answer;
// function primeArray(arr=[]){  
//     for(let k =0; k<arr.length; k++){ 
//        if(primeNum(arr[k])) {  // using a function in question 6 to check if the number is prime
//             cnt++;
//        }

//   } 
//   if (cnt==arr.length){
//       return true;
//   } 
//   else {
//       return false;
//   }

// } 
// answer=primeArray(arr1); 
// if(answer){ 
//     alert("Yes! all the numbers in array are Prime numbers");
// } 
// else{
//     alert("No! not all the numbers in array are Prime numbers");
// }

//------------------------------------------------------------
