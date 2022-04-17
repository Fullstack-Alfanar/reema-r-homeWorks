let sum = 0;
let counter = 0;
let arr = [];

function fillData() {

   

    let validData = true;
    // get a data from the user and save into a varibles
    let fname = document.getElementById("Fname");
    let grade = document.getElementById("grade");


    // before fill the table , the algorithem should check if the data which the user enter, is valid or not 

    // check if the name is valid and not null 

    if (!/^[a-zA-Z]+$/.test(fname.value)) {
        validData = false;
        alert("please enter a valid name");

    }
    else if (fname.value.length < 2) {
        validData = false;
        alert("the name is shorter than 2 letters");
    }


    // check if the grade is valid and not null   

    else if (grade.value > 100 || grade.value < 0) {
        validData = false;
        alert(" The grade should be between 0-100");
    }

    else if (fname.value != "" && grade.value != "" && validData) {
        {
            // After the data has passed a validation test, the function fill the table    
            FillingATable(fname.value, Number.parseInt(grade.value));

            var obj = {
                S_name: fname.value,
                S_grade: Number.parseInt(grade.value)
            };


            arr.push(obj);
            localStorage.setItem("table", JSON.stringify(arr));

        }
        // Empty the variables

        fname.value = "";
        grade.value = "";
    }

}


function FillingATable(SName, SGrade) {
    let numOfStudents = document.getElementById("p1");
    let avgOfStudents = document.getElementById("p2");
    let TableBody = document.getElementById("myTable");

    // building the infrastructure from the outside to the inside
    let tableRow = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdGrade = document.createElement("td");
    let labelName = document.createElement("label");
    let labelGrade = document.createElement("label");

    // add the value of grade which the user enter to  sum variable
    sum += SGrade;

    // Each time the algorithem enter to this block, add 1 to  variable counnter 
    counter++;

    // filling the table with valid data from inside to the outside   

    labelName.textContent = SName;
    tdName.appendChild(labelName);
    tableRow.appendChild(tdName);
    TableBody.appendChild(tableRow);

    labelGrade.textContent = SGrade;
    tdGrade.appendChild(labelGrade);
    tableRow.appendChild(tdGrade);
    TableBody.appendChild(tableRow);

    numOfStudents.textContent = counter;
    avgOfStudents.textContent = Number.parseInt(sum / counter);

    // check if the averge less than 80 the grad's color is red

    if ((Math.floor(sum / counter)) < 80) {
        avgOfStudents.className = "fail";
    }

    // check if the averge bigger or equal to 80 the grad's color is green

    else {
        avgOfStudents.className = "success";
    }

    numOfStudents.className = "styleCnt";
    // specific style to data cells
    tdName.className = "tdData";
    tdGrade.className = "tdData";


}

    if (localStorage.getItem("table")) {
        arr = JASON.parse(localStorage.getItem("table"));
        let data1, data2 = null;
        for (let k of arr) {
            data1 = arr[k].S_name;
            data2 = arr[k].S_grade;
            FillingATable(data1, data2);
    
        }

} 


