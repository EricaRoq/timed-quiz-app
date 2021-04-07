// console.log("Hello There!");

// document.addEventListener('OnStartClick', () => {
//     const timer = document.querySelector('#time-left');
//     const startBtn = document.querySelector('#start-btn');
//     let seconds = 120;

//     function startCount() {
//         setInterval(function() {
//             if (seconds <= 0 ) {
//                 clearInterval(seconds = 0);
//             }
//             timer.innerHTML = seconds;
//             seconds -= 1;
//         }, 1000)
//     }

//     startBtn.addEventListener('click', startCount);

//     // Start Quiz
//     startBtn.addEventListener('click', startQuiz);
//     function startQuiz() {
//         var x = document.getElementById("quiz-questions");
//         if (x.style.display === "none") {
//             x.style.display = "block";
//         }else {
//             x.style.display = "none";
//         }
//     }

// });

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
const questionContainerEl = document.getElementById('question-container');

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    questionContainerEl.classList.remove('hide');

}

// Allowing user to see next question
function nextQuestion() {

}

// What happens when answer is selected
function selectAnswer() {

}