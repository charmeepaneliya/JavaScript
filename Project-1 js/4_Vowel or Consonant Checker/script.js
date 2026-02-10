document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const letter = document.getElementById("letter").value.toLowerCase();
  const result = document.getElementById("result");

  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    result.innerText = `${letter} is a vowel.`;
  } else {
    result.innerText = `${letter} is a consonant.`;
  }

  document.getElementById("result").innerText = result.innerText;

});