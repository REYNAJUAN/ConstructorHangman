// The file containing the logic for the course of the game, which depends on Word.js and:
var inquirer= require("inquirer"); 
var game=require("./word.js");
 

//new game object
function game(){
var newGame= function(){
this.numberOfGuesses=5;
this.randomWord=words[];
this.currentWord=newWord(randomWord);
this.userGuess=Letter;

}
}


// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

// HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with  Word.js

// HINT: If you name your letter's display function toString, JavaScript will call that function 