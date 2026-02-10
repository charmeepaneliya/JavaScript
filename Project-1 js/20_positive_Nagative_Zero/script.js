document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let n = Number(document.getElementById("num").value);

    if(n>0){
        document.getElementById("result").innerText = "Number is Positive";
    } else if (n < 0) {
        document.getElementById("result").innerText = "Number is Negative";
    } else {
        document.getElementById("result").innerText = "Number is Zero";
    }

    
});