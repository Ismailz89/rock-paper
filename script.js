console.log("Hello, World!");


const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');
const buttons = ['rock', 'paper', 'scissors'];

        function getComputerChoice() {
            const choices = ['rock', 'paper', 'scissors'];
            const randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
        }


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
         displayResult(`It's a tie! Both chose ${humanChoice}.`);
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
             humanScore++;
             displayResult(`You win! ${humanChoice} beats ${computerChoice}.`);
            } else {
                computerScore++;
                 displayResult(`You lose! ${computerChoice} beats ${humanChoice}.`);
            }
            updateScore();
            checkWinner();
                
            }

    function updateScore() {
         scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
         }

    function displayResult(message) {
        resultsDiv.textContent = message;
         }
            
     function checkWinner() {
         if (humanScore === 5) {
            resultsDiv.textContent = "Congratulations! You win the game!";
            disableButtons();
             }
             else if (computerScore === 5) {
                 resultsDiv.textContent = "Sorry, you lose the game!";
                 disableButtons();
               }
       
            }
    function disableButtons() {
         buttons.forEach(button => {
             document.getElementById(button).disabled = true;
            });
        }
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
    