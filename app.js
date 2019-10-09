const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase().split("") 
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function(){
    let answer = ""
    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === " "){
            answer += letter
        }else{
            answer +="*"
        }
    })
    return answer
}

const game1 = new Hangman("cat", 2)
game1.guessedLetters.push("t")
game1.guessedLetters.push("z")
game1.guessedLetters.push("q")
game1.guessedLetters.push("c")
console.log(game1.getPuzzle())

const game2 = new Hangman("New Jersey", 2)
