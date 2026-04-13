//A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

// The Three States of a Promise:

// In an interview, you must clearly state that a promise is always in one of these three states:

// Pending: The initial state; the operation has not yet succeeded or failed

// Fulfilled: The operation completed successfully

// Rejected: The operation failed

// Once a promise is either fulfilled or rejected, it is considered settled

// Essential Methods (The "How-To"):

// To handle these states in your code, you use specific instance methods:

// .then(): Appends a handler for when the promise is fulfilled. It returns a new promise, allowing for promise chaining

// .catch(): Specifically handles rejections. It is functionally equivalent to .then(null, rejectionHandler) but is more readable

// .finally(): Executes a callback once the promise is settled, regardless of whether it succeeded or failed. This is ideal for cleanup tasks like hiding a loading spinner


// promise producing code
const myPromise = new Promise((resolve,reject)=>{
    const success = true;

    setTimeout(()=>{
        if(success){
            resolve("data rececived successfully");
        }else{
            reject("error");
        }
    },2000);
});

// consume code
myPromise.then((data)=>{
    console.log(data);
})
myPromise.catch((error)=>{
    console.log(error);
});