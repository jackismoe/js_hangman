window.addEventListener("keydown", (e) => {
    if(e.code.includes("Key")){
        game1.makeGuess(e.key)    
    }
    wordEl.textContent = game1.getPuzzle()
    guessesEl.textContent = `remaining guesses: ${game1.remainingGuesses}`
    gameDiv.appendChild(guessesEl).appendChild(wordEl)
})