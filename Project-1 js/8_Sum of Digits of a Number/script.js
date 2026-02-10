document.getElementById("form").addEventListener("submit",(e) =>{
    e.preventDefault();

    let number = document.getElementById("number").value; 
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    sum = sum + Number(number[i]);
  }

  document.getElementById("result").innerText ="The sum of the digits is: " + sum;
})