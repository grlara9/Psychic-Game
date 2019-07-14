
           
var opportunities=9;
var arr_choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var lose = 0;
var total_guesses = [];

document.onkeyup = function(event){

//get user input and store it on variable
var userInput = String.fromCharCode(event.keyCode).toLowerCase();
console.log(userInput);
//computer randonly get a letter
var computerGuess = arr_choices[Math.floor(Math.random() * arr_choices.length)];
console.log(computerGuess);
//push all guesses into array to display it
total_guesses.push(userInput);

function reset(){
opportunities = 9;
total_guesses = [];
var computerGuess = arr_choices[Math.floor(Math.random() * arr_choices.length)];

//console.log(computerGuess);
}

if(userInput !== computerGuess){
    opportunities--;
}
if(userInput === computerGuess){
    wins++;
    document.getElementById("wins").innerHTML = wins;
    reset();
    
}
if(opportunities === 0){
    lose++;
    document.getElementById("losses").innerHTML = lose;
    reset();
         }

//guessedLetters.push(yourGuess); 
//determine if user guessed correctly
document.getElementById("GuessLeft").innerHTML = opportunities;
//document.getElementById("gsf").append(total_guesses, ", ");
document.querySelector("#gsf").innerHTML =   total_guesses.join(', ');
}

