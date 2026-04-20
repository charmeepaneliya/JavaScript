
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

//reduce() method

    function reduce(){
        let input = document.getElementById("reduce").value;

        let arr = input.split(",").map(Number);

        let sum = arr.reduce((acc,curr)=>{
            return acc + curr;
        },0);

        document.getElementById("reduceResult").innerText = "sum: " + sum;
    }

    //indexof() method

    function findIndex(){
        let c = document.getElementById("indexof").value.split(",");
        let d = document.getElementById("indexof2").value;

        let indexofResult = c.indexOf(d);

        document.getElementById("indexofResult").innerText = "index: " + indexofResult;
        
    }

    //includes() method

    function includes(){
        let e = document.getElementById("includes").value.split(",");
        let f = document.getElementById("includes2").value;

        let includesResult = e.includes(f);

        document.getElementById("includesResult").innerText = "index: " + includesResult;
        
    }

    //sort() method

    function sort(){
        let g = document.getElementById("sort").value.split(",");

        let shortResult = g.sort();

        document.getElementById("shortResult").innerText = "Result: " + shortResult;
    }

    //descending order method

    function des(){
        let h = document.getElementById("des").value.split(",").map(Number);

        let desResult = h.sort((a,b)=>{
            return b-a;
        });

        document.getElementById("desResult").innerText = "descending order: " + desResult;
    }

    //join() method

    function join(){
        let i = document.getElementById("join").value.split(",");

        let joinResult = i.join(" ");

        document.getElementById("joinResult").innerText = "Result: " + joinResult;
    }

    //slice() method

    function slice(){
        let j = document.getElementById("slice").value.split(",");

        let k = document.getElementById("slice2").value;

        let sliceResult = j.slice(k);

        document.getElementById("sliceResult").innerText = "Result: " + sliceResult;

    }
    //find() method

