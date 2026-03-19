function callBackFunction(name, callBack){
    console.log("hello" + name);
    callBack();
}

function sayMorning(){
    console.log("GoodMorning");
}

callBackFunction(" charmi " , sayMorning);