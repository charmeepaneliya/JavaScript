document.getElementById("form").addEventListener("submit",function (e){
    e.preventDefault();

    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    let n4 = Number(document.getElementById("n4").value);
    let n5 = Number(document.getElementById("n5").value);

    let numbers = [n1,n2,n3,n4,n5];

    let largest = numbers[0];

    for(let i=0; i<numbers.length; i++){
        if(numbers[i] > largest){
            largest = numbers[i];
        }
    }
    document.getElementById("result").textContent="Largest Number:"+largest;
})