const quizData = [
    {
      question: "Самый токсичный язык програмированния?",
      a: "JavaScript",
      b: "C",
      c: "Python",
      d: "C++",
      correct: "c"
    },
    {
      question: "Как правильно переклбчать язык?",
      a: "Windows + probel",
      b: "Ctrl + Shift",
      c: "Ctrl + Alt + Shift",
      d: "For command stroke",
      correct: "a"
    },
    
    {
      question: "В каком году создан  JavaScript?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b"
    },
    {
      question: "Как вывести в терминал hello world?",
      a: "alertbox('hello world')",
      b: "alert('hello world')",
      c: "myalert('hello world')",
      d: "none of the above",
      correct: "b"
    },
    {
      question: "Я програмист и я должен уметь чинить чайник?",
      a: "Да",
      b: "Нет",
      correct: "a"
    },
    {
        question: "Лучшие бесплатные курсы?",
        a: "RS School",
        b: "Stepik",
        c: "Code-Basics",
        d: "Лучше учится на платных",
        correct: "a"
      }
  ];
  
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer-quize");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("first-answer");
  const b_text = document.getElementById("second-answer");
  const c_text = document.getElementById("there-answer");
  const d_text = document.getElementById("four-answer");
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
      
    }
  });