// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Track number of remaining guesses
let guessesLeft = 10;

// Function to check the user's guess
function checkGuess() {
    let userGuess = parseInt(document.getElementById('guessField').value);
    let message = document.getElementById('message');
    let guessesRemaining = document.getElementById('guessesLeft');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        message.style.color = 'red';
    } else {
        guessesLeft--;
        guessesRemaining.textContent = guessesLeft;

        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed the correct number (${randomNumber}).`;
            message.style.color = 'green';
            endGame();
        } else if (userGuess < randomNumber) {
            message.textContent = 'Try higher!';
            message.style.color = 'blue';
        } else {
            message.textContent = 'Try lower!';
            message.style.color = 'blue';
        }

        if (guessesLeft === 0) {
            message.textContent = `Game over! The correct number was ${randomNumber}.`;
            message.style.color = 'red';
            endGame();
        }
    }
    document.getElementById('guessField').value = '';
}

// Function to reset the game
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessesLeft = 10;
    document.getElementById('guessesLeft').textContent = guessesLeft;
    document.getElementById('message').textContent = '';
}

// Function to disable the input field and submit button after game ends
function endGame() {
    document.getElementById('guessField').disabled = true;
    document.querySelector('button').disabled = true;
}