document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let signal = document.getElementById("signal").value.toLowerCase();

  if (signal === "red") {
    result.innerText = "STOP";
  } else if (signal === "yellow") {
    result.innerText = "READY";
  } else if (signal === "green") {
    result.innerText = "GO";
  } else {
    result.innerText = "Invalid Signal";
  }
});