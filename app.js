// User enters a max number & then tries to guess a random generated number between 1 to max.

const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while(true) {
    if(guess == "quit") {
        console.log("User Quit !");
        break;
    }
    if(guess == random) {
        console.log("congratulations ! You are right!:) random number was",random);
        break;
    } else if(guess < random) {
        guess = prompt("hint : Your guess was too small. Plz try again!");
    } else {
        guess = prompt("hint : Your guess was too large. Please try again!");
    }
    
}
