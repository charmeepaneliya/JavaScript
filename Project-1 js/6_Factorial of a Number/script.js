document.getElementById("form").addEventListener("submit", (e) =>{
    e.preventDefault();

    let num=Number(document.getElementById("num").value);
    let factorial=1;
    for(let i=1; i<=num; i++){
        factorial=factorial*i;

    }
    document.getElementById("result").innerText=`Factorial of ${num} is ${factorial}`;
});