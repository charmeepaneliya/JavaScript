function orderFood(callBack){
    console.log("ordering food...");

    setTimeout(()=>{
        console.log("food is ready");
        callBack();
    },3000);
}

function eatFood(){
    console.log("eating food...")
}

orderFood(eatFood);