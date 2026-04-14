const loadData = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data loaded");
        },3000);
    });
};

async function fecthData() {
    console.log("loadding...");

    const data =  await loadData();

    console.log("data",data);

    console.log("it will wait untill promise result");
}

fecthData();