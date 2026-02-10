document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let num1 = Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    let num3=Number(document.getElementById("num3").value);

    let largest;

    if(num1 >=num2 && num1 >=num3){
        largest=num1;
    }else if(num2 >= num1 && num2 >= num3){
        largest=num2;
    }else if(num3 >= num1 && num3 >= num2){
        largest=num3;
    }

    document.getElementById("result").innerText = "largest number=" + largest;


})