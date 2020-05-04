
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------
const myQuestions = [
  {
    question: "The height of a governor is distance measure from",
    answers: {
      a: "the centre of two balls mass",
      b: "the centre of balls mass to the point of intersection of upper arms",
      c: "the centre of balls mass to the point of intersection of lower links",
      d: "the point of intersection of upper arms to the point of intersection of lower links"
    },
    correctAnswer: "b"
  },

  {
    question: "What is the theoretical correlation between speed and height of the governor?",
    answers: {
      a: "N<sup>2</sup>&alpha;1/h",
      b: "N&alpha;1/h",
      c: "N<sup>3</sup>&alpha;1/h",
      d: "h&alpha;N"
    },
    correctAnswer: "a"
  },
  {
    question: "The arms of proell governor are 300 mm long. The pivots of upper and lower arm are 30 mm from the axis. The load on the sleeve is 250N and weight of each ball is 30N. When the governor sleeve is at mid position the extension link of the lower arm is vertical and radius of rotation of the balls is 160 mm. The vertical height of governor is 200 mm. If speed of governor at mid-position is 150 rpm, find the length of extension link.",
    answers: {
      a: "502mm",
      b: "232mm",
      b: "270mm",
      d: "320mm"
    },
    correctAnswer: "b"
  },
  {
    question: "From the simulator, at 128 rpm what is the approximate height of the governor",
    answers: {
      a: "120mm",
      b: "160mm",
      c: "200mm",
      d: "240mm"
    },
    correctAnswer: "b"
  },
  {
    question: "Identify these parts of the proell governor<br><img src=\"images/q16.png\"\/>",
    answers: {
      a: "Fly ball, Link, top sleeve",
      b: "Central load, bottom sleeve, top sleeve",
      c: "Central load, bottom sleeve, top sleeve",
      d: "Fly ball, Link, bottom sleeve"
    },
    correctAnswer: "d"
  }
];



// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
