document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let age = Number(document.getElementById("ageInput").value);
    let result = document.getElementById("result");

    if (age >= 18 && age < 60) {
        result.textContent = "You are eligible to vote.";
    } 
    else if (age >= 16 && age < 18) {
        result.textContent = "You are eligible to drive.";
    } 
    else if (age >= 60) {
        result.textContent = "You are a senior citizen.";
    } 
    else {
        result.textContent = "You are not eligible for any of the categories.";
    }
});
