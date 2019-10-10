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

const gameDiv = document.querySelector("#game-wrapper")

const wordEl = document.createElement("div")
wordEl.id = "word"
wordEl.textContent = game1.getPuzzle()

const guessesEl = document.createElement("p")
guessesEl.id = "guesses-count"
guessesEl.textContent = `remaining guesses: ${game1.remainingGuesses}`




// console.log(game1.getPuzzle())
// console.log(game1.remainingGuesses)


gameDiv.appendChild(guessesEl).appendChild(wordEl)


