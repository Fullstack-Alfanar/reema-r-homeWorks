
let checkPass = document.getElementById("inpassword");
document.getElementById("btn").addEventListener("click", checkValidPassword);


function checkValidPassword() {

    var flag = true;
    var cappitalLettr = 0;
    var smallLettr = 0;
    var numeric = 0;
    var speacialcharcter = 0;
    var x = 0
    var y = 0;
    var isEng = -1;


    // check if the password length more than 8 digits 

    if (String(checkPass.value).length <= 8) {
        flag = false;
        alert("The password should be more tha 8 digits");
    }

    else {

        var str = String(checkPass.value);

        // pattern for special charcter

        var speacialcharcterPattern = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        for (let i = 0; i < str.length; i++) {



            // check the capital letters according to ascii  charcter  code
            if (str.charAt(i).charCodeAt() >= 65 && str.charAt(i).charCodeAt() <= 90) {
                cappitalLettr++;



            }

            // check the small letters according to ascii  charcter

            else if (str.charAt(i).charCodeAt() >= 97 && str.charAt(i).charCodeAt() <= 122) {
                smallLettr++;
            }


            else if (str.charAt(i).charCodeAt() >= 48 && str.charAt(i).charCodeAt() <= 57) {

                // check if there are numbers in sequence

                let difference1 = Number(str.charAt(i + 1)) - Number(str.charAt(i));
                let difference2 = Number(str.charAt(i + 2)) - Number(str.charAt(i));
                if (difference1 == 1 && difference2 == 2) {
                    alert("There must be no 3 numbers in a row");

                    document.getElementById("passNum").style.color = "red";

                }
                else {
                    numeric++;
                }

            }

            // check if there is special charecter at least one , there is another way 
            //to check special character by using ascii code but this way easier and shortet
            else if (speacialcharcterPattern.test(str.charAt(i))) {
                speacialcharcter++;
            }

        }

        // Empty value
        checkPass.value = '';




    }


    // help varible to check if all the letters is in English 

    x = str.length - speacialcharcter - numeric;

    y = cappitalLettr + smallLettr;

    isEng = x - y;





    // send varrible to another function that message the user which condition is  exists and isn't
    styleValidationPassword(flag, cappitalLettr, smallLettr, numeric, speacialcharcter, isEng);




}





function styleValidationPassword(flag, num1, num2, num3, num4, num5) {

    let condition1 = document.getElementById("passLength");
    let condition2 = document.getElementById("passCapital");
    let condition3 = document.getElementById("pasSmall");
    let condition4 = document.getElementById("passNum");
    let condition5 = document.getElementById("pasSpecial");
    let condition6 = document.getElementById("passEng");



    let pic1 = document.getElementById("img1");
    let pic2 = document.getElementById("img2");
    let pic3 = document.getElementById("img3");
    let pic4 = document.getElementById("img4");
    let pic5 = document.getElementById("img5");
    let pic6 = document.getElementById("img6");

    // store the url img of done icon 
    let done = "https://cliply.co/wp-content/uploads/2021/03/372103860_CHECK_MARK_400px.gif";

    // store the url img of error icon 
    let faild = "https://www.arttdinox.com/assets/web/wrong.gif";


    //If the condition exists according to the requirements, 
    //it will be marked in green and an icon will be added next to it accordingly. 

    //If the condition doesn't exist according to the requirements, 
    //it will be marked in red and an icon will be added next to it accordingly.



    if (flag) {
        condition1.className = "sucess";
        pic1.className = "pic";
        pic1.src = done;

    }

    else if (flag == false) {
        condition1.className = "faild";
        pic1.className = "pic";
        pic1.src = faild;

    }

    if (num1 > 0) {

        condition2.className = "sucess";
        pic2.className = "pic";
        pic2.src = done;

    }

    else if (num1 == 0) {
        condition2.className = "faild";
        pic2.className = "pic";
        pic2.src = faild;


    }


    if (num2 > 0) {

        condition3.className = "sucess";
        pic3.className = "pic";
        pic3.src = done;

    }

    else if (num2 == 0) {
        pic3.className = "pic";

        condition3.className = "faild";
    }

    if (num3 > 0) {

        condition4.className = "sucess";
        pic4.className = "pic";
        pic4.src = done;

    }

    else if (num3 == 0) {
        condition4.className = "faild";
        pic4.className = "pic";
        pic4.src = faild;



    }

    if (num4 > 0) {

        condition5.className = "sucess";
        pic5.className = "pic";
        pic5.src = done;

    }

    else if (num4 == 0) {
        condition5.className = "faild";
        pic5.className = "pic";
        pic5.src = faild;
    }

    if (num5 == 0) {
        condition6.className = "sucess";
        pic6.className = "pic";
        pic6.src = done;
    }

    else if (num5 != 0) {
        condition6.className = "faild";
        pic6.className = "pic";
        pic6.src = faild;


    }



}