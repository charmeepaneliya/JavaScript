document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
     let rupees = Number(document.getElementById("rupees").value);

    let dollars = rupees / 83; 

  document.getElementById("result").innerText ="Amount in Dollars = " + dollars;
})