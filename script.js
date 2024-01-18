
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");

let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");


const genCompChoice = () => {

    const options = ["rock", "paper", "scissor"];
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    console.log("Game is drawn !!!");
    msg.innerText = "Game is drawn  !!!"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("You win :)");
        msg.innerText = `You Won :) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        user.innerText = userScore;
    }
    else{
        console.log("You lose :(" , compScore);
        msg.innerText = `You lose :( ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
        compScore++;
        comp.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("User choice is ", userChoice);
    // generating computer choice
    let compChoice = genCompChoice();
    console.log("Comp choice is ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            // paper, scissor
            userWin = compChoice === "paper"? false: true;
        }
        else if(userChoice === "paper"){
            // rock, scissor
            userWin = compChoice === "scissor"?false: true;
        }
        else{
            // rock, paper
            userWin = compChoice === "rock"? false: true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" ,() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
  }
);