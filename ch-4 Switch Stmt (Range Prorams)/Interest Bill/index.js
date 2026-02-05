

let Form = document.getElementById("Form");

Form.addEventListener("submit", function(e) {
  e.preventDefault();

  let units = Number(document.getElementById("units").value);
  let bill;

  if (units <= 10) {
    bill = units + units * units;
  } else if (units <= 20) {
    bill = units + units * units + 50;
  } else {
    bill = units + units * units + 100;
  }

  document.getElementById("Result").innerHTML =
    "Electricity Bill = ₹" + bill;
});