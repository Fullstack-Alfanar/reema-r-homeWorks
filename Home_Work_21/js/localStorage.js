// // Question 3 

// // saving user's data into local storage
// let arr = [];

// document.getElementById("saveDetails").addEventListener("click", saveData);

// function checkData(d1, d2, d3) {
//     if (!/^[a-zA-Z]+$/.test(d1) || d1.length <= 2 || d1.length >= 30 || d1 == "") {
//         //  alert("please enter valid Name");
//         return false;
//     }




//     else if (!/^[0-9]+$/.test(d2) || d2.length <= 2 || d2.length >= 30 || d2 == "") {
//         //alert("please enter valid phone number");
//         return false;

//     }



//     else if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(d3) || d3.length <= 2 || d3.length >= 30 || d3 == "") {
//         //alert("please enter valid email");
//         return false;


//     }

//     else {
//         return true;
//     }

// }



// function saveData() {
//     var userName = document.getElementById("userName");
//     var userPhone = document.getElementById("userPhone");
//     var userEmail = document.getElementById("userEmail");

//     var flag = checkData(userName.value, userPhone.value, userEmail.value);

//     if (!flag) {
//         alert("please enter a valid details");
//     }

//     else {

//         var obj = {
//             Fname: userName.value,
//             phoneNum: userPhone.value,
//             eMail: userEmail.value
//         }

//         arr.push(obj);

//         localStorage.setItem("data", JSON.stringify(arr));

//     }
// }

//-------------------------------------------------------------------------------------------


//------ Challenge Question  ------------

document.getElementById("saveData").addEventListener("click", addToLocal);
document.getElementById("searchData").addEventListener("click", searchFromLocal);

let arr = [];

function addToLocal() {

    let inputData = document.getElementById("data");

    if (!(inputData.value == ' ' || inputData.value == null)) {

        arr.push(inputData.value);
        localStorage.setItem("data", JSON.stringify(arr));

    } 
    inputData.value="";


}


function searchFromLocal() {
    let inputData = document.getElementById("data");
    let cnt = 0;
    if (!(inputData.value == ' ' || inputData.value == null)) {

        let searchArr = JSON.parse(localStorage.getItem("data"));

        for (let i of searchArr) {
            if (i == inputData.value) {
                alert("The data " + i + " is availble");
            }

            else {
                cnt++;
            }

        }
        if (cnt == searchArr.length) {
            alert("The data is not availble");

        }


    } 

    inputData.value="";

}
