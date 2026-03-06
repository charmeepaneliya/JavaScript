document.getElementById("btn").addEventListener("click",()=>{
    let para =  document.getElementsByTagName("p");

    para[0].textContent = "changed paragraph";
});