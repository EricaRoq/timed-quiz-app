


// Timer
const startTime = 120;
let time = startTime * 60;

const countDownStart = document.getElementById('count-down');

setInterval(refreshCount, 1000);

function refreshCount() {
    const mins = Math.floor(time / 120);
    let secs = time % 120;

    countDownStart.innerHTML = (mins, secs);
    time --;
}

// Starting game

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerButtonsEl = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove('hide');
    nextQuestion();

}

// Allowing user to see next question
function nextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionEl.innerHTML = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsEl.appendChild(button);
    });
}

function resetState() {
    nextQuestion.classList.add('hide');
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}

// What happens when answer is selected
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide') 
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// Questions
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
            { text: 'function:myFunction()', correct: true },
            { text: 'function=myFunction()', correct: false },
            { text: 'function myFunction()', correct: false },
            { text: 'myFunction():function', correct: false },
        ],
    },
    {
        question: 'How does a "for" loop start?',
        answers: [
            { text: 'for (i = 0; i <= 5)', correct: true },
            { text: 'for (i = 0; i <= 5; i++)', correct: false },
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
            { text: 'strings', correct: true },
            { text: 'booleans', correct: false },
            { text: 'alerts', correct: false },
            { text: 'functions', correct: false },
        ],
    },
    {
        question: 'The condition in an if/else statement is enclosed within:',
        answers: [
            { text: 'quotes', correct: true },
            { text: 'curly brackets', correct: false },
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
            { text: '|', correct: true },
            { text: '&&', correct: false },
            { text: '%', correct: false },
            { text: '/', correct: false },
        ],
    },
    {
        question: 'Arrays in JavaScript can be used to store:',
        answers: [
            { text: 'numbers and strings', correct: true },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all of the above', correct: false },
        ],
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            { text: 'JavaScript', correct: true },
            { text: 'terminal/bash', correct: false },
            { text: 'for loops', correct: false },
            { text: 'console.log', correct: false },
        ],
    },
];