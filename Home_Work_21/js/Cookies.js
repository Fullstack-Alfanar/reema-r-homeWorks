// Auxiliary functions

function addCookies(data) {

  const d = new Date();
  d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();

  document.cookie = data.id + "=" + data.value + ";" + expires;
}

function getCookie(cname) {
  // Take the cookiename as parameter (cname)
  let name = cname + "=";
  let arrCookie = decodeURIComponent(document.cookie);
  let ca = arrCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      alert(c.substring(name.length, c.length));
    }
  }
  return "";
}


// Question 1 

// saving or loading  an Email  

// document.getElementById("saveBtn").addEventListener("click", addEmailtoCookies);

// document.getElementById("loadBtn").addEventListener("click", loaData);

// function addEmailtoCookies() {
//   var email = document.getElementById("userEmail");
//   var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//   if (!pattern.test(email.value)) {
//     alert("False, your email isn't valid !");
//     email.value = "";
//   }
//   else {
//     addCookies(email);
//     email.value = "";
//   }

// }

// function loaData() {
//   let idEmail = document.getElementById("userEmail").id;
//   getCookie(idEmail);

// } 

//-----------------------------------------------------------------------

// Question 2

// saving or loading  a Phone Number  

document.getElementById("saveBtnPhone").addEventListener("click", addPhonetoCookies);

document.getElementById("loadBtnPhone").addEventListener("click", loadPhone);


function addPhonetoCookies() {
  var phoneNum = document.getElementById("phoneNum");
  var phonePattern = /^[0-9]+$/; 

  // check if phone Number match to pattern on phone number

  if ((!phonePattern.test(phoneNum.value))) {
    alert("InValid phone number");
  } 

  // check if phone Number is null

  else if (phoneNum.value == '' || phoneNum.value == null) {
    alert("please enter a phone number");
  } 

  // check if phone Number's digits are not equal to 10


  else if (Number.parseInt(phoneNum.value.length) != 10) {
    alert("Phone number illegal it should be 10 digits")
  }

  // if phone number is valid , add to cookies
  else {
    addCookies(phoneNum);
    phoneNum.value = "";

  }

} 

function loadPhone(){
  let idPhone = document.getElementById("phoneNum").id;
  getCookie(idPhone);
}











