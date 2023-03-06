// We need questions for the question field.

var questNumber=0;
let currentScore = undefined;

const quizQuestion = [
  {
    questionField: "var:'0' is an example of what type of variable?",
  // The choices are in an array.
    choices: ["boolean", "string", "number", "undefined"],
  // Each question has one objectively correct answer.
    rightAnswer: 1
  },
  {
    questionField: "If the four buttons below are coded as an array of four elements. please click the button that corresponds to index 2 in the array.",
    choices: ["2","let = [2,2,2,2]", "Element", "This is a trick question. Read it carefully. WAIT THE TIMER IS ALM-"],
    rightAnswer: 2
  },
  {
    questionField: "Question 3?",
    choices: ["1", "2", "C", "4"],
    rightAnswer: 3
  },
  {
    questionField: "Question 4?",
    choices: ["1", "2", "3", "D"],
    rightAnswer: 0
  },
  {
    questionField: "Question 5?",
    choices: ["1", "2", "3", "4"],
    rightAnswer: 0
  }
];


document.getElementById("quiz-field").style.display="none";

// declares variable for the timer and what class to attach it to
let timeLeft = document.getElementById("timer");

// ngl, I feel like this could all be simpler if there were shared naming formats between CSS and JS
// const startButton = getElementById("start-button");
// const startPage = getElementById("start-page");


// declares variable for time remaining and where it starts
let secondsLeft = 120;
const questionField=document.getElementById("question-field");

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
let displayScore = document.getElementById("display-score");


function quizStart() {
  questNumber = 0;
  currentScore = 0;
  // const currentQuizData = quizQuestion[currentQuiz]
  timerStart();
  showScore();
  console.log(currentScore);
  document.getElementById("start-page").style.display="none";
  document.getElementById("quiz-field").style.display="visible";
  showQuestion(quizQuestion);
}


function showQuestion(choice) {
  if (questNumber >= 6) {
    return quizEnd();
  }

  questNumber++;
  console.log(`current question is number ${questNumber}`);

  let currentQuiz = quizQuestion[questNumber];


  questionField.textContent = choice.questionField;

  let options = document.querySelectorAll('.choices');
  console.log(options);
  options.forEach(function(button, correct){
    button.textContent = choice.choices[correct];

    button.addEventListener('click', function() {
      if (choice.rightAnswer == correct) {
        currentScore ++;
        flexTime -8;
        console.log('Git R Dun!');
        questNumber++;
      } else {
        flexTime +4;
        console.log('dagnammit!');
        questNumber++;
      }
    });
  });
}


function timesUp() {
  if(secondsLeft >= 0) {
    document.getElementById("quiz-end").style.display="none";
    document.getElementById("times-up").style.display="none";
    } else {
      document.getElementById("times-up").style.display="visible";
      document.getElementById("quiz-end").style.display="visible";
      document.getElementById("quiz-field").style.display="none";
    }
  
}

function quizEnd() {
  document.getElementById("quiz-field").style.display="none";
  

}

function showScore() {
  displayScore.textContent = currentScore;
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
