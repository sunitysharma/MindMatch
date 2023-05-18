// Variables
const questions = [
  {
    question: "Which of the following best describes your ideal vacation?",
    answers: [
      { answer: "Relaxing on a tropical beach", value: 2 },
      { answer: "Exploring a new city", value: 1 },
      { answer: "Visiting historical sites and museums", value: 3 },
      { answer: "Participating in an adventure sport", value: 4 }
    ]
  },
  {
    question: "Which of the following values do you hold most dear?",
    answers: [
      { answer: "Honesty", value: 1 },
      { answer: "Freedom", value: 2 },
      { answer: "Knowledge", value: 3 },
      { answer: "Courage", value: 4 }
    ]
  },
  {
    question: "Which of the following activities do you enjoy the most?",
    answers: [
      { answer: "Reading", value: 1 },
      { answer: "Going to parties", value: 2 },
      { answer: "Watching movies", value: 3 },
      { answer: "Playing video games ", value: 4 }
    ]
  },
  {
    question:
      "Which of the following traits do you think is most important in a leader?",
    answers: [
      { answer: "Integrity", value: 1 },
      { answer: "Vision", value: 2 },
      { answer: "Bravery", value: 3 },
      { answer: "Creativity", value: 4 }
    ]
  },
  {
    question: "Which of the following careers would you enjoy the most?",
    answers: [
      { answer: "Artist", value: 1 },
      { answer: "Athlete", value: 2 },
      { answer: "Scientist", value: 3 },
      { answer: "Teacher", value: 4 }
    ]
  },
  {
    question: "Which of the following statements resonates with you the most?",
    answers: [
      { answer: "Life is an adventure.", value: 1 },
      { answer: "Knowledge is power.", value: 2 },
      { answer: "Love conquers all.", value: 3 },
      { answer: "Laughter is the best medicine.", value: 4 }
    ]
  },
  {
    question:
      "Which of the following situations would make you feel the most uncomfortable?",
    answers: [
      { answer: "Being alone in the wilderness", value: 1 },
      { answer: "Speaking in public ", value: 2 },
      { answer: "Dealing with a difficult customer", value: 3 },
      { answer: "Facing a moral dilemma", value: 4 }
    ]
  },
  {
    question:
      "Which of the following statements best describes your approach to problem-solving?",
    answers: [
      { answer: "I take a logical and systematic approach", value: 1 },
      { answer: "I trust my intuition ", value: 2 },
      { answer: "I rely on my own personal experience", value: 3 },
      { answer: "I seek guidance from others", value: 4 }
    ]
  },
  {
    question: "Which of the following do you find most frustrating in others?",
    answers: [
      { answer: "Dishonesty ", value: 1 },
      { answer: "Incompetence ", value: 2 },
      { answer: "Cowardice", value: 3 },
      { answer: "Lack of humor", value: 4 }
    ]
  },
  {
    question: "Which of the following do you find most difficult to forgive?",
    answers: [
      { answer: "Betrayal", value: 1 },
      { answer: "Injustice", value: 2 },
      { answer: "Stupidity ", value: 3 },
      { answer: "Conformity", value: 4 }
    ]
  }
];

const archetypes = [
  {
    name: "The Innocent",
    description:
      "The Innocent archetype is pure, optimistic, and full of potential."
  },
  {
    name: "The Explorer",
    description:
      "The Explorer archetype is adventurous, curious, and seeks new experiences."
  },
  {
    name: "The Sage",
    description:
      "The Sage archetype is wise, knowledgeable, and seeks truth and understanding."
  },
  {
    name: "The Hero",
    description:
      "The Hero archetype is brave, selfless, and seeks to overcome challenges and achieve greatness."
  },
  {
    name: "The Outlaw",
    description:
      "The Outlaw archetype is rebellious, independent, and challenges authority and the status quo."
  },
  {
    name: "The Magician",
    description:
      "The Magician archetype is creative, intuitive, and uses knowledge and skills to transform reality."
  },
  {
    name: "The Regular Guy/Girl",
    description:
      "The Regular Guy/Girl archetype is honest, reliable, and seeks to belong and connect with others."
  },
  {
    name: "The Lover",
    description:
      "The Lover archetype is passionate, sensual, and seeks intimacy and connection with others."
  },
  {
    name: "The Jester",
    description:
      "The Jester archetype is playful, irreverent, and uses humor to challenge the status quo and lighten the mood."
  },
  {
    name: "The Caregiver",
    description:
      "The Caregiver archetype is compassionate, nurturing, and seeks to help others and alleviate suffering."
  },
  {
    name: "The Creator",
    description:
      "The Creator archetype is imaginative, innovative, and uses creativity to bring new things into the world."
  },
  {
    name: "The Ruler",
    description:
      "The Ruler archetype is powerful, responsible, and seeks to create order and stability in the world."
  }
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answers");
const submitButton = document.getElementById("submit-button");
const restartButton = document.getElementById("restart-button");
const resultElement = document.getElementById("result");
let currentQuestion = 0;
let answers = [];

// Function to start the quiz
function startQuiz() {
  console.log("startQuiz called");
  currentQuestion = 0;
  answers = [];
  showQuestion();
  // submitButton.style.display = "block";
}

// Function to show the current question
function showQuestion() {
  console.log("showQuestion called");
  console.log("currentQuestion: ", currentQuestion);
  console.log("questionElement: ", questionElement);
  console.log("answerElement: ", answerElement);
  questionElement.textContent = questions[currentQuestion].question;
  answerElement.innerHTML = "";
  questions[currentQuestion].answers.forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.textContent = answer.answer;
    answerButton.classList.add("answer");
    answerButton.addEventListener("click", () => {
      selectAnswer(answer.value);
    });
    answerElement.appendChild(answerButton);
  });

  if (currentQuestion === questions.length - 1)
    submitButton.style.display = "block";
  else submitButton.style.display = "none";
}

// Function to select an answer

function selectAnswer(value) {
  console.log("selectAnswer called");
  console.log("value: ", value);
  answers.push(value);

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    // Disable answer buttons
    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach((button) => {
      button.disabled = true;
      button.classList.add("disabled");
    });
  }
}

//Function to show the result
function showResult() {
  console.log("showResult called");
  console.log("answers: ", answers);

  let maxScore = 0;

  for (let i = 0; i < answers.length; i++) {
    const answerValue = answers[i];
    console.log("answerValue: ", answerValue);
    maxScore += answerValue;
  }
  console.log("maxScore: ", maxScore);

  let archetypeIndex = 0;
  if (maxScore >= 10 && maxScore <= 13) {
    archetypeIndex = 0;
  } else if (maxScore > 13 && maxScore <= 16) {
    archetypeIndex = 1;
  } else if (maxScore > 16 && maxScore <= 19) {
    archetypeIndex = 2;
  } else if (maxScore > 19 && maxScore <= 22) {
    archetypeIndex = 3;
  } else if (maxScore > 22 && maxScore <= 25) {
    archetypeIndex = 4;
  } else if (maxScore > 25 && maxScore <= 28) {
    archetypeIndex = 5;
  } else if (maxScore > 28 && maxScore <= 31) {
    archetypeIndex = 6;
  } else if (maxScore > 31 && maxScore <= 33) {
    archetypeIndex = 7;
  } else if (maxScore > 33 && maxScore <= 35) {
    archetypeIndex = 8;
  } else if (maxScore > 35 && maxScore <= 37) {
    archetypeIndex = 9;
  } else if (maxScore > 37 && maxScore <= 39) {
    archetypeIndex = 10;
  } else if (maxScore === 40) {
    archetypeIndex = 11;
  }
  resultElement.textContent = `You are ${archetypes[archetypeIndex].name} - ${archetypes[archetypeIndex].description}`;
  answerElement.innerHTML = "";
  submitButton.style.display = "none";
  restartButton.style.display = "block";
  questionElement.innerHTML = resultElement.textContent;
  resultElement.style.display = "none";
}

function restartQuiz() {
  startQuiz();
  resultElement.innerText = "";
}

// Event listeners
submitButton.addEventListener("click", showResult);
restartButton.addEventListener("click", restartQuiz);

// Start the quiz
startQuiz();
