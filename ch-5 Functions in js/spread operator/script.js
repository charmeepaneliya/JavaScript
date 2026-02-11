
document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();

    const num = [1, 2, 3, 4, 5];

    const result = document.getElementById("result");

    const num2 = [...num, 6, 7, 8, 9, 10];

    console.log(...num);
    console.log("num2", num2);

    result.innerHTML = `
        num: ${num} <br>
        spread num: ${[...num]} <br>
        num2: ${num2}
   `;
});



