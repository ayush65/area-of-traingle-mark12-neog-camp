const quizForm = document.querySelector(".quiz-form");
const submitAnsBtn = document.querySelector("#check");
const outputs = document.querySelector("#output");

const correctAnswers = ["90", "right angled","3"];

submitAnsBtn.addEventListener("click", calculateScore)

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    console.log(score);
    output.innerText = "Your score is : " + score;
}

