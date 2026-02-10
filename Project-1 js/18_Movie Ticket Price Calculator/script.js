document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let seatType = document.getElementById("seatType").value;
    let price=0;

    if(seatType === "silver"){
        price = 150;
    }else if(seatType === "gold"){
        price = 250;
    }else if(seatType === "platinum"){
        price = 400;
    }else{
        document.getElementById("result").innerText = "Please select a seat type";
        return;
    }

    document.getElementById("result").innerText="Ticket Price: ₹"+price;
});