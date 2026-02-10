document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let n = Number(document.getElementById("num").value);
    let result = document.getElementById("result");
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        result.innerText = "Prime";
    } else {
        result.innerText = "Not Prime";
    }
});
