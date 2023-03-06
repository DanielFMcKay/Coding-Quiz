// We need questions for the question field.

var questNumber = -1;
// the current score is left undefined, as defining it happens 
// when the quiz starts and acts as a trigger for the timer
let currentScore = undefined;
document.getElementById("times-up").style.display="none";
document.getElementById("display-score").style.display="none";
document.getElementById("quiz-end").style.display="none";


const quizQuestion = [
  {
    currentQuestion: "var:'0' is an example of what type of variable?",
  // The choices are in an array.
    choices: ["boolean", "string", "number", "undefined"],
  // Each question has one objectively correct answer.
    rightAnswer: 1
  },
  {
    currentQuestion: "If the four buttons below are coded as an array of four elements, please click the button that corresponds to index 2 in the array.",
    choices: ["2","let variable = [2,2,2,2]", "object", "This is a trick question, read it carefully. WAIT THE TIMER IS ALM-"],
    rightAnswer: 2
  },
  {
    currentQuestion: "Which of the following is NOT a valid event listener?",
    choices: ["dblclick", "keydown", "mouseout", "rightclick"],
    // Apple has gone too far!
    rightAnswer: 3
  },
  {
    currentQuestion: "Question 4?",
    choices: ["1", "2", "3", "D"],
    rightAnswer: 0
  },
  {
    currentQuestion: "Question 5?",
    choices: ["1", "2", "3", "4"],
    rightAnswer: 0
  }
];

function hideQuiz() {
  document.getElementById("quiz-field").style.display="none";
}

// declares variable for the timer and what class to attach it to
let timeLeft = document.getElementById("timer");

// ngl, I feel like this could all be simpler if there were shared naming formats between CSS and JS
// const startButton = getElementById("start-button");
// const startPage = getElementById("start-page");


// declares variable for time remaining and where it starts
let secondsLeft = 100;
// const questionField=document.getElementById("question-field");

// declares the timer, which is inside the quiz field and thus only starts when the quiz does
function timerStart() {
  // Sets interval in variable
  let timerInterval = setInterval(function() {
    secondsLeft--;
// displays time left
    timeLeft.textContent = secondsLeft + " seconds remaining.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      return timesUp();
    }
// Declares that each interval is exactly 1000 milliseconds, or 1 second.
  }, 1000);
}


let finalScore;
let flexTime = secondsLeft;
let currentQuiz;
let startButton = document.getElementById("start-button");


function quizStart() {
  questNumber = -1;
  currentScore = 0;
  timerStart();
  showScore();
  console.log(currentScore);
  document.getElementById("start-page").style.display="none";
  document.getElementById("quiz-field").style.display="visible";
  showQuestion(quizQuestion);
}


function showQuestion() {
  // automatically ends quiz after five questions
  if (questNumber >= 5) {
    return quizEnd();
  } else {

  questNumber++;
  console.log(`current question is number ${questNumber}`);


  let currentQuiz = quizQuestion[questNumber];

  var questionField = document.createElement("h1");
  questionField.setAttribute("id", "question-field")
  var buttonField = document.createElement("ol");
  buttonField.setAttribute("id", "button-field");
  buttonField.addEventListener("click", function (q) {
      verify(q);
  });

  // declares the different buttons corresponding to the quiz choices
  var ch1 = document.createElement('li');
  ch1.setAttribute("id", "btn-one");
  var ch2 = document.createElement('li');
  ch2.setAttribute("id", "btn-two");
  var ch3 = document.createElement('li');
  ch3.setAttribute("id", "btn-three");
  var ch4 = document.createElement('li');
  ch4.setAttribute("id", "btn-four");


  questionField.textContent = currentQuiz.currentQuestion;
  ch1.textContent = currentQuiz.choices[0];
  ch2.textContent = currentQuiz.choices[1];
  ch3.textContent = currentQuiz.choices[2];
  ch4.textContent = currentQuiz.choices[3];

  var quizField = document.getElementById("quiz-field");
  quizField.innerHTML = "";
  quizField.appendChild(questionField);
  // creates the buttons and links them to what they do
  questionField.appendChild(buttonField);
  buttonField.appendChild(ch1);
  buttonField.appendChild(ch2);
  buttonField.appendChild(ch3);
  buttonField.appendChild(ch4);
}

function verify(q) {

  let currentQuiz = quizQuestion[questNumber];
  let rightAnswersCurrent = currentQuiz.rightAnswer;
  let rightAnswerText = currentQuiz.choices[rightAnswersCurrent];
  
  console.log(rightAnswerText);
  
  let splashResult = document.createElement("h1");
  var quizField = document.getElementById("quiz-field");
  quizField.appendChild(splashResult);
  if (q.target.textContent === rightAnswerText) {
      currentScore++;
      splashResult.textContent = "GIT R DUN!! (correct)";
      secondsLeft = secondsLeft + 4;
  } else {
      splashResult.textContent = "Dagnammit!! (wrong)";
      secondsLeft = secondsLeft - 8;
  }
  // closes the splash feedback and moves to the next question after 1 second
  setTimeout(showQuestion, 1000);
}
}


  // let options = document.querySelectorAll('.choices');
  // console.log(options);
  // options.forEach(function(button, correct){
  //   button.textContent = choice.choices[correct];

  //   button.addEventListener('click', function() {
  //     if (choice.rightAnswer == correct) {
  //       currentScore ++;
  //       flexTime -8;
  //       console.log('Git R Dun!');
  //       questNumber++;
  //     } else {
  //       flexTime +4;
  //       console.log('dagnammit!');
  //       questNumber++;
  //     }
  //   });
  // });



function timesUp() {
  if(secondsLeft >= 1 && secondsLeft === undefined) {
    document.getElementById("quiz-end").style.display="none";
    document.getElementById("times-up").style.display="none";
    } else {
      document.getElementById("times-up").style.display="visible";
      document.getElementById("quiz-end").style.display="visible";
      document.getElementById("quiz-field").style.display="none";
    }
  
}



function showScore() {
  if(questNumber>=0) {
    document.getElementById("display-score").style.display="visible";
    document.getElementById("display-score").textContent=currentScore;
  } else {
    document.getElementById("display-score").style.display="none";
  }
}

// displays start page and hides quiz, then the opposite once the quiz has started and a starting score is defined
function showQuiz() {
  if(currentScore===undefined) {
  document.getElementById("start-page").style.display="visible";
  document.getElementById("quiz-field").style.display="none";
  } else {
    document.getElementById("start-page").style.display="none";
    document.getElementById("quiz-field").style.display="visible";
  }
}


// function finishGame() {
//   // placeholder
// }

// document.getElementById("elementId").style.display="none"






// This actually puts the question and choices... maybe?




// Shows the questions
// showQuestion(quizQuestion);

// We need the buttons to actually register that a choice has been made. Being clicked is good.
// placeholder code
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//   console.log('Clicked!');
// });
