
document.getElementById("interestForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let principleAmount = Number(document.getElementById("principal").value);
    let time = Number(document.getElementById("time").value);
    let interestRate = Number(document.getElementById("rate").value);

    let finalAmount = (principleAmount * time * interestRate) / 100;

    console.log("final amount", finalAmount);

    document.getElementById("result").textContent ="Final Amount (Simple Interest): ₹" + finalAmount;
});