document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

   let c = Number(document.getElementById("celsius").value);

  let f = (c * 9 / 5) + 32;

  document.getElementById("result").innerText ="Fahrenheit = " + f;
})