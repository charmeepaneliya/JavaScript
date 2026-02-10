document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let f = Number(document.getElementById("f").value);

    let c = (f - 32) * 5 / 9;

    document.getElementById("result").innerText ="Celsius = " + c.toFixed(2);
});