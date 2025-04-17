// Get a choice from the computer using math.random
function getComputerChoice() {
    let choice = (Math.floor(Math.random() * 3));
    switch (choice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        default:
            return "Scissors"
    }
}

// Get a choice from the User using prompt
function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

// Plays a round and increments score depending on outcome of game
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        return "Win";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return "Win";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        return "Win";
    } else {
        return "Lose"
    }
}


// Play the game until either score reaches 5
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);

        switch (result) {
            case "Tie":
                console.log("It's a Tie!");
                console.log(`The score is You: ${humanScore} - CPU: ${computerScore}`)
                break;
            case "Win":
                console.log(`You Win! ${humanSelection} beats ${computerSelection}`);
                humanScore++;
                console.log(`The score is You: ${humanScore} - CPU: ${computerScore}`)
                break;
            case "Lose":
                console.log(`You Lose! ${computerSelection} beats ${humanSelection}`);
                computerScore++;
                console.log(`The score is You: ${humanScore} - CPU: ${computerScore}`)
                break;
            default:
        }
    }
    if (humanScore === 5) {
        console.log("Congratulations! You beat the computer!");
    } else {
        console.log("Sorry you lost to the computer... Try again.");
    }
}

playGame();