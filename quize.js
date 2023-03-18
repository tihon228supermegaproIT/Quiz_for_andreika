const quizData = [
    {
      question: "Самое токсичное комьюнити языка?",
      a: "Java",
      b: "C",
      c: "JavaScript",
      d: "Python",
      correct: "d"
    },
    {
      question: "Что такое Css?",
      a: "Программа для двоичного кода",
      b: "Каскадная таблица стилей",
      c: "Что то",
      d: "Токого понятия не существует",
      correct: "b"
    },
    {
      question: "Если я умею писать на HTML я Senior?",
      a: "Нет конечно",
      b: "Да потому что мне 5 лет",
      c: "Да но только надо уметь создовать нумерованый список",
      d: "Я пишу на  ABC net",
      correct: "a"
    },
    {
      question: "Когда создали JavaScript?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b"
    },
    {
      question: "JavaScript язык програмированния?",
      a: "Да",
      b: "Нет",
      c: "Нет конечно",
      d: "Я не знаю",
      correct: "a"
    },
    {
      question: "Как написать hello world?",
      a: "alertbox('hello world')",
      b: "alert('hello world')",
      c: "myalert('hello world')",
      d: "none of the above",
      correct: "b"
    },
    {
      question: "что пишется на HTML?",
      a: "Макет Website/App",
      b: "программы",
      c: "Вирусы",
      d: "Я не знаю",
      correct: "a"
    },
    {
      question: "Где пишется тег script в HTML?",
      a: "Head",
      b: "Body",
      c: "Bottom of the HTML",
      d: "между A и B",
      correct: "d"
    },
    {
      question: "Как создать Stack?",
      a: "Написать в консоле Stack",
      b: "function stack",
      c: "Как то",
      d: "Через массив",
      correct: "d"
    },
    {
      question: "Шрифт без засечек",
      a: "sans-serif",
      b: "Georgia",
      c: "Я не знаю",
      d: "Такого не существует",
      correct: "a"
    }
  ];
  
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("one_text");
  const b_text = document.getElementById("two_text");
  const c_text = document.getElementById("three_text");
  const d_text = document.getElementById("four_text");
  const submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };
  
  loadQuiz();
  
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
          `;
      }
    }
  });
  

  function viewDiv(){
    document.getElementById("div1").style.display = "block";
  };

  const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

