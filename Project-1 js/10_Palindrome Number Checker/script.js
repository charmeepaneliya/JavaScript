document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let num = document.getElementById("num").value;
    let rev = "";

    for (let i = num.length - 1; i >= 0; i--) {
        rev = rev + num[i];
    }
    if (num === rev) {
        result.innerText = "Palindrome";
    } else {
        result.innerText = "Not Palindrome";
    }

});