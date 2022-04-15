 function CheckValidEmail(email) { 
    var checkEmail= document.getElementById("email");
    var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;;
    if(!pattern.test(checkEmail.value)) { 
        alert("False, your email isn't valid !"); 
        return false;

    } 
    else{ 
        alert("True , your email is Valid"); 
        return true;

    } 
    
}  