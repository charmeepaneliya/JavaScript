document.getElementById("form").addEventListener("submit",(e) =>{
    e.preventDefault();

    let number =Number(document.getElementById("number").value);

    if(number % 2 === 0){
        document.getElementById("result").innerText = `${number} is an Even number.`;

    }else{
        document.getElementById("result").innerText = `${number} is an Odd number.`;
    }

});