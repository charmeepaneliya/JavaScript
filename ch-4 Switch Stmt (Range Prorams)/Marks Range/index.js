let form = document.getElementById("gradeForm");

form.addEventListener("submit", function(e){
    e.preventDefault();


  let marks = document.getElementById("marks").value;
  let grade = "";

   if(marks >=90)
        grade = "Grade A";
    else if(marks>=70)
         grade = "Grade B";
    else if(marks>=55)
         grade = "Grade c";
    else if(marks>=45)
         grade = "Grade D";
    else if(marks>=35)
         grade = "Grade E";

    else{
        grade = "Fail";
    }

    document.getElementById("result").innerText = grade;

});
   

   
