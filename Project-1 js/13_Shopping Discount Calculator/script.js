document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault();

    let price = document.getElementById("price").value;
    let discount = document.getElementById("discount").value;

     let discountAmount = price * discount / 100;
     let finalPrice = price - discountAmount;

    document.getElementById("result").innerText ="Final price after discount: " + finalPrice;
})


