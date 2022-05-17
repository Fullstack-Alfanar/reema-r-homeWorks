$(document).ready(() => {
    $("#btn1").on("click", () => {
        var options = ""; 
        // var num1=$("#n1");
        var num1 = document.getElementById("n1").value;
        var num2 = document.getElementById("n2").value;
        console.log(num1 + " " + num2);

        var isNumber =/^[0-9]+$/;

        if(num1!=null && num1.match(isNumber) && num2!=null && num2.match(isNumber) && num1<num2 ){


        var dropDown = document.getElementById("list");
        for (let i = num1; i <= num2; i++) {

            options += `<option value = ${i}> ${i} <option>`;

        }

        $(dropDown).append(options);
    }
    else{
        alert("please enter a numbers. In addttion the first number should be smaller than the second number ");
    }

    }); 
    
   
});
