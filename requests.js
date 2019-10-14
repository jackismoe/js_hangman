const getPuzzle = (callback) => {

    const request = new XMLHttpRequest()

    request.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.response)
            callback(null, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback("an error happened", null)
        }
    })

    request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3")

    request.send()
}