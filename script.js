let randonNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const hiOrlow = document.querySelector('.hiOrlow');
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
    const userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = "Previous guesses: ";
    }
// next line: I don't understand //
    guesses.textContent += userGuess + ' ';

    if (userGuess === randonNumber) {
        lastResult.textContent = "Congratulations! You have won the game!";
        lastResult.style.backgroundColor = "green";
        hiOrlow.textContent = "";
        setgameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "!!!Game Over!!!";
        lastResult.style.backgroundColor = "red";
        hiOrlow.textContent = "";
        setgameOver();
    } else {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randonNumber) {
            hiOrlow.textContent = "Your guess was too low!";
        }
        else if (userGuess > randonNumber) {
            hiOrlow.textContent = "Your guess was too high!";
        }
    }
//don't understand this very next line
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setgameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas");
    for (const resetPara of resetParas) {
        resetParas.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    lastResult.style.backgroundColor = "white";

    guessField.focus();
    
    randonNumber = Math.floor(Math.random() * 100) + 1;
}

console.log(randonNumber);