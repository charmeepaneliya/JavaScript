//Async/await is the modern standard for handling asynchronous operations in JavaScript, acting as "syntactic sugar" built on top of Promises.
//simple example

let myPromise = new Promise((resolve,reject)=>{
    resolve("data received");
});

async function handleData(){
    try{
        const data = await myPromise;
        console.log(data);
    }catch(error){
        console.error(error);
    }
}

handleData();
