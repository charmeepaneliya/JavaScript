document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let number = document.getElementById("number").value; 
  let rev = "";

  for (let i = number.length - 1; i >= 0; i--) {
    rev = rev + number[i];
  }

  document.getElementById("result").innerText ="Reverse = " + rev;
});