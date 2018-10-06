var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Z"]
// how to stop other keys from being pressed
// stop duplicate letters from useing guesses
// Variables for tracking wins, losses and ties. begins at 0.
var wins = 0;
var losses = 0;
var guesses = 10;

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice)
document.onkeypress = function (event) {
    var userGuess = event.key;

    if (userGuess === computerChoice) {
        wins++;
    } else {
        guesses--;
    }

    if (guesses === 0) {
        losses++
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;

}

//Setting variables to zero
var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var randomLetter = randomLetter;
var letters = "qwertyuiopasdfghjklzxcvbnm"


//Generates random number 
randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLetter);


function jsGuess() {
    ranLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLetter);

}

//PLAYERS INPUT
document.onkeyup = function (event) {
    var playerGuess = event.key;

    // correct guesses
    if (playerGuess === randomLetter) {
        won++;
        attempts = 10;
        usedArray = [];

    }

    //incorrect guesses
    jsGuess();
    if (playerGuess !== randomLetter) {
        attempts--;

    }

    if (attempts == 0) {
        lost++;
        usedArray = []
        attempts = 10;
    }

    //duplicate guess
    if (usedArray.indexOf(playerGuess) >= 0) {

    } else {
        usedArray.push(playerGuess);
        document.getElementById('playerGuess').innerHTML = usedArray;
        console.log(usedArray);

    }
    //HTML
    document.getElementById('won').innerHTML = won;
    document.getElementById('lost').innerHTML = lost;
    document.getElementById('attempts').innerHTML = attempts;

}