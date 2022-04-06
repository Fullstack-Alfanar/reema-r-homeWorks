 function validEmail() { 
    var checkemail= (document.getElementById("email")).value;
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(pattern.test(String(checkemail).toLowerCase())) {
        alert("True , your email is Valid");
    } 
    else{
        alert("False, your email isn't valid !");
    } 
    
}  