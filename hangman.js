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

Hangman.prototype.makeGuess = function(guess) {
    guess = guess.toLowerCase()
    const uniqueLetter = !this.guessedLetters.includes(guess)
    const badGuess = !this.word.includes(guess)
    
    if(uniqueLetter){
        this.guessedLetters.push(guess)
    }

    if (uniqueLetter && badGuess) {
        this.remainingGuesses--
    }

}


const game1 = new Hangman("cat", 2)
// game1.guessedLetters.push("t")
// game1.guessedLetters.push("z")
// game1.guessedLetters.push("q")
// game1.guessedLetters.push("c")
game1.makeGuess("c")
game1.makeGuess("t")
game1.makeGuess("z")

console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

// const game2 = new Hangman("New Jersey", 2)
// game2.makeGuess("e")
// game2.makeGuess("z")
// game2.makeGuess("q")
// game2.makeGuess("r")
// game2.makeGuess("t")
// game2.makeGuess("n")
// console.log(game2.getPuzzle())
// console.log(game2.remainingGuesses)