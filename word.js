var inquirer= require("inquirer"); //does this needs to be here? or only letter.js wich already has inquirer? 
var Letter= require ("./letter.js");
// Word.js should only require Letter.js

// Contains a constructor, 
//Word that depends on the Letter constructor. 
//This is used to create an object representing the current word the user is attempting to guess. 
//That means the constructor should define:
function Word(word){
    // An array of new Letter objects representing the "letters" of the underlying word
    var disneyPrincesses=['Elsa', 'Cinderella', 'Ariel', 'Mulan','Moana'];
    this.Letter=disneyPrincesses.test(string);
    this.Letter=word;
        this.Letter=word.split("").Letter(function(character){
        return new Letter(character);

        });
    }

Word.prototype.toString=function(){
    return this.Letters.join("");


// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
Word.prototype.solution=firstFunction();{
    return this.Letters(firstFunction(Letters),{//first function in letter.js

    }).join("") //join method to create a word.MDN Web Docs
};

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
Word.prototype.guessedLetter=secondFunction();{
    var guessedLetter= false;
    this.guessedLetter=guessedLetter;
    if(guessedLetter===guessChar()){
        guessedLetter=true;
    }
};

console.log("string");
return guessedLetter;
};

Word.prototype.correctGuess=function(){
    var correctGuess=true;
    newFunction(correctGuess);

}
function newFunction(correctGuess) {
    this.correctGuess = correctGuess;
    return Letters.display;

}

