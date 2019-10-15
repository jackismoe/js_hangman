const game1 = new HangmanClass("car parts", 5)
game1.gameStats()
gameDiv.append(guessesEl, wordEl, statusEl)

game1.getStatus
game1.displayMessage()
window.addEventListener("keydown", (e) => {
    if(e.code.includes("Key")){
        game1.makeGuess(e.key)   
    }
    wordEl.textContent = game1.getPuzzle
    guessesEl.textContent = `remaining guesses: ${game1.remainingGuesses}`
    gameDiv.append(guessesEl, wordEl, statusEl)
})

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(err)
})


