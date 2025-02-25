let randomNumber = Math.floor(Math.random() * 100) + 1;
let triesLeft = 5;

function checkGuess() {
    const guess = document.getElementById('guess').value;
    const message = document.getElementById('message');
    const tries = document.getElementById('tries');

    if (triesLeft > 0) {
        if (guess == randomNumber) {
            message.textContent = 'Congratulations! You guessed the right number!';
            message.style.color = 'green';
            tries.textContent = `Tries Left: ${triesLeft}`;
            disableGame();
        } else if (guess < randomNumber) {
            message.textContent = 'Too low! Try again.';
            message.style.color = 'orange';
        } else {
            message.textContent = 'Too high! Try again.';
            message.style.color = 'orange';
        }

        triesLeft--;
        tries.textContent = `Tries Left: ${triesLeft}`;

        if (triesLeft === 0) {
            message.textContent = `Game over! The number was ${randomNumber}.`;
            message.style.color = 'red';
            disableGame();
        }
    }
}

function disableGame() {
    document.getElementById('guess').disabled = true;
    document.querySelector('button').disabled = true;
}
