function validDetails() {
    var x1 = document.getElementById("fname").value;
    var x2 = document.getElementById("age").value;
    var x3 = document.getElementById("i_d").value;
    var x4 = document.getElementById("email").value;
    validName(x1);
    validAge(x2);
    validId(x3);
    valid_Email(x4);

}


function validName(name) {
    if (String(name).length >= 2 && String(name).length < 8) {
        alert("The name valid");
    }
    else {
        alert("The name isn't valid");
    }

}

function validAge(age) {
    if (age > 0 && age <= 100) {
        alert("valid age");
    }
    else {
        alert("Invalid age!!");
    }
}

function validId(id) {  // function to check the validation of id number

    while (id.length < 9) {  // loop check if id's length valid 
        if (id.length == 0) {    // condition check if user doesn't insert id number 
            var digit = prompt("please insert your id number");
            id += digit;

        }
        else {  // If the length of id is less than 9, user is asked to complete
            var digit = prompt("you had already enter the number " + id + " please enter a full id numbers with 9 digits");
            id += digit;

        }
    }

    const arr = [1, 2, 1, 2, 1, 2, 1, 2, 1];  // An array of weights for the digits of id 
    var arr1 = [];   // Define an empty array for keeping values
    for (let i = 0; i < id.length; i++) {  // A loop calculates a multiplication between digits od id and weights in arr accordingly
        arr1[i] = Number(id[i]) * Number(arr[i]);

    }

    var arr2 = [];  // Define an empty array for keeping values
    for (let j = 0; j < arr1.length; j++) { //A loop checks if the value from one digit puts it in the arr2, if not it calculates the sum of the digits and then stores it in the arr2
        if (arr1[j] <= 9) {
            arr2[j] = arr1[j];
        }
        else {
            arr2[j] = parseInt((arr1[j] / 10)) + (arr1[j] % 10);
        }


    }

    var sum = 0;
    for (let m = 0; m < arr2.length - 1; m++) {  //A loop calculates the sum of the first 8 values
        sum += arr2[m];
    }
    var checkDigit = sum + arr2[arr2.length - 1]; // A variable contains the sum of 8 digits with a check digit
    if (checkDigit % 10 == 0) {
        alert(id + " True, Valid ID number");
    }

    else {
        alert(id + " False, InValid ID !!");
    }

}

function valid_Email(email) {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // pattern of valid email
    if (pattern.test(String(email).toLowerCase())) {  // condition to check the validation of email
        alert("True , your email is Valid");
    }
    else {
        alert("False, your email isn't valid !");
    }

}
