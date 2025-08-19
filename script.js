console.log("HelloWorld");
function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 0.33) {
        return "rock";
    }
    else if (computerChoice < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper or scissors");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return "It's a tie."
    }
    else {
        if (humanSelection === "rock" && computerSelection === "scissors") {
            humanScore += 1;
            return "human wins!";        
        }
        else if (humanSelection === "paper" && computerSelection === "rock") {
            humanScore += 1;
            return "human wins!";        
        }
        else if (humanSelection === "scissors" && computerSelection === "paper") {
            humanScore += 1;
            return "human wins!";        
        }
        else {
            computerScore += 1;
            return "computer wins!"
        }

    }
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`computer chose: ${computerSelection}`);
        console.log(`you chose: ${humanSelection}`);
        let winnerOfRound = playRound(humanSelection, computerSelection);
        console.log("round number: " + (i + 1) + "-result; " + winnerOfRound); 
}
if (humanScore > computerScore) {
    return "Hurray! Human wins!";
} else if (humanScore < computerScore) {
    return "So sad, computer wins!";
} else {
    return "It's a tie! Play again.";
}
}


let result = playGame();

console.log(result);
console.log("human score: " + humanScore, "computer score: " + computerScore);

/*const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(`computer chose: ${computerSelection}`);
console.log(`you chose: ${humanSelection}`);*/
/*let result = playRound(humanSelection, computerSelection);
console.log(result);
console.log("human score: " + humanScore, "computer score: " + computerScore);
*/