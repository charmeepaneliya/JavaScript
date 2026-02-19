
function total() {
    let sum = 0;

    for(let i=0;i<arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum);
}

total(10,20,30,40,50,60,70);