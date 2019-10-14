class HangmanClass {
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split("") 
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = "playing"
    }

    gameStats = function () {
        wordEl.textContent = this.getPuzzle
        guessesEl.textContent = `remaining guesses: ${this.remainingGuesses}`
    }

    get getPuzzle() {
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

    makeGuess = function(guess) {
        if(this.status === "playing"){
            guess = guess.toLowerCase()
            const uniqueLetter = !this.guessedLetters.includes(guess)
            const badGuess = !this.word.includes(guess)
    
            if(uniqueLetter){
                this.guessedLetters.push(guess)
            }
    
            if (uniqueLetter && badGuess) {
                this.remainingGuesses--
            }
            this.getStatus
            this.gameStats()
            this.displayMessage()
        }
    }

    get getStatus() {
        const finished = this.word.every((letter) => {
            return this.guessedLetters.includes(letter) || letter === " "
        }) 
        if(this.remainingGuesses === 0){
            this.status = "failed"
        } else if (finished) {
            this.status = "finished"
        } else {
            this.status = "playing"
        }
        return this.status
    }

    displayMessage = function () {
        if(this.status === "finished") {
            statusEl.textContent = `Great Job! Y ou guessed the word!`
        } else if (this.status === 'failed') {
            statusEl.textContent = `You Lost! The word was ${this.word.join("")}`
        } else {
            statusEl.textContent = "Now Playing!"
        }
    }
    
    
}

const gameDiv = document.querySelector("#game-wrapper")

const wordEl = document.createElement("div")
wordEl.id = "word"


const guessesEl = document.createElement("p")
guessesEl.id = "guesses-count"


const statusEl = document.createElement("p")
statusEl.id = "status"

// Hangman.prototype.getStatus = function () {
//     let counter = 0
//     if (this.remainingGuesses < 1) {
//         this.status = "failed"
//         statusEl.textContent = `you lose`
//     } else {
//         this.guessedLetters.forEach((letter) => {
//             if(this.word.indexOf(letter) > -1) {
//                 counter+= 1
//             }
//         })
//         counter == this.word.length ? this.status = "finished" : this.status = "playing"
        
//     }

//     if (this.status === "finished"){
//         this.status = "finished"
//         statusEl.textContent = `congrats!! You win!`
//     }
// }




