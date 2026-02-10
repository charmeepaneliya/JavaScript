document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let number=Number(document.getElementById("number").value);
    let table="";

    for(let i=1; i<=10; i++){
        
        table = table + number + "x" + i + "=" + (number*i) + "<br>";
    }

    document.getElementById("result").innerHTML=table;
});