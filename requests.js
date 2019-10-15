const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((resp) => {
        if(resp.status === 200) {
            return resp.json()
        } else {
            throw new Error("unable to fetch :[")
        }
    }).then((data) => {
        return data.puzzle
    })
}


