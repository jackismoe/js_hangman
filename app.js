let game = null;

const startGame = async() => {
    const puzzle = await getPuzzle("2")
    game = new HangmanClass(puzzle, 5)
    render();
}

const render = () => {
    game.gameStats()
    gameDiv.append(guessesEl, wordEl, statusEl)
    game.getStatus
    game.displayMessage() 
}



window.addEventListener("keydown", (e) => {
    if(e.code.includes("Key")){
        game.makeGuess(e.key)   
    }
    render()
})

document.querySelector("#reset").addEventListener('click', () => {
startGame()
} )
    

startGame()

