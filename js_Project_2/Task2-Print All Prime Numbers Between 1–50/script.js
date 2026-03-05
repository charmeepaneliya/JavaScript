
document.getElementById("form").addEventListener("submit",function (e) {
    e.preventDefault();

    let result= "";
    
    

    for(let i=2;i<=50;i++){
        let count = 0;
        for(let j=1;j<=i;j++){
            if(i % j === 0){
                count++;
            }
        }
        if (count === 2){
            result += i + ",";
        }
    }

    document.getElementById("result").innerHTML="Prime Numbers: " + result;
    
})