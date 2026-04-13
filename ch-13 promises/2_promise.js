
//producing code

const shopping = new Promise((resolve,reject)=>{
    let cart = ["clothes","shose"];

    cart = ["clothes"];

    setTimeout(()=>{
        if(cart.length===0){
            reject("no product found in cart");
        }else{
            resolve("please procceed to check out");
        }
    },2000);
});

//consume code

shopping.then((msg)=>{
    console.log(msg);
});

shopping.catch((error)=>{
    console.log(error);
});

