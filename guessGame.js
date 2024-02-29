let maximumNumber = parseInt(prompt("Please Enter maximum number!"));
while (!maximumNumber) {
    maximumNumber = parseInt(prompt("Please Enter valid number!"));
}
const randomNumber = Math.floor(Math.random() * maximumNumber) + 1;

let guess = prompt("Please enter your first guess");
let attempts = 1;

while (parseInt(guess) !== randomNumber) {
    if (guess === 'q') {
        break;
    }
    if (guess > randomNumber) {
        guess = parseInt(prompt("Please enter your guess! Guess is too high"));
    } else if (guess < randomNumber) {
        guess = parseInt(prompt("Please enter your guess. Guess is too low"));
    }
    attempts++;
}
if (guess === 'q') {
    console.log("You quit our game :(");
}
console.log(`Your attempts are: ${attempts}`);
console.log("You guessed it right");