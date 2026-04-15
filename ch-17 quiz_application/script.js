const quizData = [
  {
    question: "What is JavaScript?",
    options: [
      "Programming Language",
      "Database",
      "Operating System",
      "Browser",
    ],
    correct: 0,
  },
  {
    question: "Which keyword is used to declare variable?",
    options: ["var", "int", "string", "define"],
    correct: 0,
  },
  {
    question: "Which method converts JSON to object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toObject()",
    ],
    correct: 0,
  },
  {
    question: "Which symbol is used for comments in JS?",
    options: ["//", "<!-- -->", "#", "**"],
    correct: 0,
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    correct: 2,
  },
  {
    question: "Which method is used to add element at end of array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0,
  },
  {
    question: "Which method removes last element from array?",
    options: ["pop()", "push()", "shift()", "slice()"],
    correct: 0,
  },
  {
    question: "Which function is used to print in console?",
    options: ["console.log()", "print()", "echo()", "write()"],
    correct: 0,
  },
  {
    question: "Which operator is used for strict equality?",
    options: ["==", "=", "===", "!="],
    correct: 2,
  },
  {
    question: "Which loop runs at least once?",
    options: ["for", "while", "do...while", "foreach"],
    correct: 2,
  },
];
let currentIndex = 0;

let qusNumber = document.getElementById("qusNumber");

let qusTimer = document.getElementById("qusTimer");

let question = document.getElementById("qus");

let options = document.getElementById("options");

let nextBtn = document.getElementById("nextBtn");

let score = 0;

let selectedAnswer = null;

let userAnswer = [];

let timer;

let timeLeft = 30;

function loadQus() {
  let currentQns = quizData[currentIndex];

  qusNumber.innerText = `Qus ${currentIndex + 1}/${quizData.length}`;

  question.innerText = currentQns.question;

  options.innerHTML = "";

  currentQns.options.forEach((opt, index) => {
    let col = document.createElement("div");

    col.classList.add("col-md-6");

    let button = document.createElement("button");

    button.innerText = opt;

    button.classList.add("btn", "btn-outline-light", "option-btn");

    button.onclick = function () {
      selectedAnswer = index;

      userAnswer.push({
        question: currentQns.question,
        selected: index,
        correct: currentQns.correct,
        options: currentQns.options,
      });
      nextQus();
    };

    startTimer();

    options.appendChild(col);

    col.appendChild(button);
  });
}

loadQus();

function startTimer() {
  let timerEl = document.getElementById("timer");

  clearInterval(timer);

  timeLeft = 30;

  timerEl.innerText = `Time Left ${timeLeft}`;

  timer = setInterval(() => {
    timeLeft--;
    timerEl.innerText = `Time Left ${timeLeft}`;

    if(timeLeft <= 0){
      userAnswer.push({
        question: quizData[currentIndex].question,
        selected : null,
        correct: quizData[currentIndex].correct,
        options: quizData[currentIndex].options,

      });
      nextQus();
    }
  },1000);
}

function nextQus() {
  if (selectedAnswer === quizData[currentIndex].correct) {
    score++;
  }
  if (currentIndex < quizData.length - 1) {
    currentIndex++;
    selectedAnswer = null;
    loadQus();
  } else {
    quizResult();
  }
}

function quizResult() {
  const quizResultEl = document.querySelector(".quiz-card");

  quizResultEl.innerHTML = `
  <h3 class="text-center result">Quiz Result🎉</h3>
  <h4 class="text-center result">Result:- ${score}/${quizData.length}</h4>
  <div class="mt-3">
  <h3 class="text-center result">Review Summary </h3>
  <ul class="list-group"> 
    ${userAnswer.map(
      (ans, index) => `

      <li class="list-group-item">

        <h5 class="text-center"> Question No-${index + 1} :- ${ans.question}</h5>
        <br>
        <h6 class="text-center">Your Answer :- ${ans.selected !== null ? ans.options[ans.selected] : "no answered"}</h6>
        <br>
        <h6 class="text-center">Correct Answer :- ${ans.options[ans.correct]}</h6>
      </li>
      
      `,
    )}
  </ul>
  `;
}
