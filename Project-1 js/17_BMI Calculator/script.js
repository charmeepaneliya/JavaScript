document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let weight = Number(document.getElementById("weight").value);
    let height=Number(document.getElementById("height").value);

     height = height / 100; 
      let bmi = weight / (height * height);

  document.getElementById("result").innerText ="Your BMI is: " + bmi.toFixed(2);
});