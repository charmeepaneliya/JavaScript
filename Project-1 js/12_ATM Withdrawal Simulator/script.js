document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let amount = Number(document.getElementById("amount").value);
    let balance = Number(document.getElementById("balance").value);

    if (amount > balance) {
    result.innerText = "Insufficient Balance";
  } else {
    result.innerText = "Withdraw Successful";
  }
});