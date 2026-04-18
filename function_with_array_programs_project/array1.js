
// splice()method

function add(){
    let a = document.getElementById("arr").value.split(",");
    let input = document.getElementById("input").value;
    let value = document.getElementById("value").value;

    a.splice(input,0,value);
    document.getElementById("result").innerText = a;
}

function remove(){
    let a = document.getElementById("arr").value.split(",");
    let input = document.getElementById("input").value;

    a.splice(input,1);
    document.getElementById("result").innerText = a;
}

function replace(){
    let a = document.getElementById("arr").value.split(",");
    let input = document.getElementById("input").value;
    let value = document.getElementById("value").value;

    a.splice(input,1,value);
    document.getElementById("result").innerText = a;
}

//some() method

function some(){
    let b = document.getElementById("someArr").value.split(",");
    let value = Number(document.getElementById("value").value);

    let someResult=b.some(function(num){
       return num > value;
    });
    document.getElementById("someResult").innerText ="Result: "+ someResult;
}
//reverse() method

function reverse(){
    let rev = document.getElementById("Rev").value;
    let revResult = rev.split(",").reverse().join(",");

    document.getElementById("revResult").innerText="Result: " + revResult;
}