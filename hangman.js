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


console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

window.addEventListener("keydown", (e) => {
    if(e.code.includes("Key")){
        game1.makeGuess(e.key)
        console.log(game1.getPuzzle())

    }
})