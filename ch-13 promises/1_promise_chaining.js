// Promise chaining is a technique in JavaScript used to execute multiple asynchronous operations in a specific sequence, where each subsequent task starts only after the previous one succeeds

//It works because every call to a .then() method returns a new promise, allowing you to "chain" another .then() to it.

const FoodOrder = new Promise((resolve,reject)=>{
    let order = ["Brownie","Donuts"];

    setTimeout(()=>{
        if(order.length > 0){
            resolve(order);
            console.log("order please");
        }else{
            reject("please add some food dish to proceed order");
        }
    },3000);
});

FoodOrder.then((order)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(order);
            console.log("order resceived");
        },2000);
    });
})
.then((order)=>{
    return new Promise((resolve,reject)=>{
        const material = true;

        setTimeout(()=>{
            if(material){
                resolve(order);
                console.log("ordered prepared");
            }else{
                reject("order rejected");
                console.log("order rejected");
            }
        },3000);
    });
})
.then((order)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            if(order){
                resolve(order);
                console.log("order delivered",order);
            }
        },5000);
    });
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("do you want to explore more");
});