// Constant Variables
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
let question = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const countStart = document.getElementById('count-down');

// Timer
const startTime = 120;
let time = startTime * 60;

setInterval(reloadCount, 1000);

function reloadCount() {
    const mins = Math.floor(time / 120);
    let secs = time % 120;

    countStart.innerHTML = (mins, secs);
    time --;
// Must make an if/else statement to start timer on button press and then clearInterval
    clearInterval();
}



// Event Listeners
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    question++;
    nextQuestion();
});


// Starting the game
function startGame() {
    question = 0;
    startButton.classList.add('hide');
    
    questionContainer.classList.remove('hide');
    // nextQuestion();
    // startTime();

}

// Allowing user to see next question
function Nextquestion() {
    resetState();
    showQuestion();
}

function showQuestion(question) {
    question.innerHTML = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextQuestion.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// What happens when answer is selected
function selectAnswer(x) {
    const selectedBtn = x.target;
    const correct = selectedBtn.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatus(button, button.dataset.correct)
    });
  
    
}

function setStatus(element, correct) {
    clearStatus(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatus(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// Questions and Answers
const questions = [
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            { text: 'alert("Hello World")', correct: true },
            { text: 'msgBox("Hello World")', correct: false },
            { text: 'alertBox="Hello World"', correct: false},
            { text: 'alertBox("Hello World")', correct: false},
        ],
    },
    {
        question: 'How do you create a function?',
        answers: [
            { text: 'function:myFunction()', correct: false },
            { text: 'function=myFunction()', correct: false },
            { text: 'function myFunction()', correct: true },
            { text: 'myFunction():function', correct: false },
        ],
    },
    {
        question: 'How does a "for" loop start?',
        answers: [
            { text: 'for (i = 0; i <= 5)', correct: false },
            { text: 'for (i = 0; i <= 5; i++)', correct: true },
            { text: 'for i = 1 to 5', correct: false },
            { text: 'for (i <= 5; i++)', correct: false },
        ],
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        answers: [
            { text: '//This is a comment', correct: true },
            { text: '"This is a comment"', correct: false },
            { text: '<!--This is a comment-->', correct: false },
            { text: '#This is a comment', correct: false },
        ],
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: 'strings', correct: false },
            { text: 'booleans', correct: false },
            { text: 'alerts', correct: true },
            { text: 'functions', correct: false },
        ],
    },
    {
        question: 'The condition in an if/else statement is enclosed within:',
        answers: [
            { text: 'quotes', correct: false },
            { text: 'curly brackets', correct: true },
            { text: 'parenthesis', correct: false },
            { text: 'square brackets', correct: false },
        ],
    },
    {
        question: 'In JavaScript, the expression x!=y returns false if:',
        answers: [
            { text: 'the variables are equal', correct: true },
            { text: 'x is less than y', correct: false },
            { text: 'the variables are not equal', correct: false },
            { text: 'None of the above', correct: false },
        ],
    },
    {
        question: 'In JavaScript, which of the following is a logical operator?',
        answers: [
            { text: '|', correct: false },
            { text: '&&', correct: true },
            { text: '%', correct: false },
            { text: '/', correct: false },
        ],
    },
    {
        question: 'Arrays in JavaScript can be used to store:',
        answers: [
            { text: 'numbers and strings', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all of the above', correct: true },
        ],
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            { text: 'JavaScript', correct: false },
            { text: 'terminal/bash', correct: false },
            { text: 'for loops', correct: false },
            { text: 'console.log', correct: true },
        ],
    },
];

// Adding local storage to modal
function store() {
    const initials = document.getElementById('autoSizingInput').value;
    window.localStorage.setItem();
}

