document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const year = Number(document.getElementById("year").value);
   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result.innerText = "Leap Year";
  } else {
    result.innerText = "Not Leap Year";
  }

  document.getElementById("result").innerText=" year "+year+" is "+result.innerText;
    
})