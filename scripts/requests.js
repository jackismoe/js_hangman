// const getPuzzle = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((resp) => {
//         if(resp.status === 200) {
//             return resp.json()
//         } else {
//             throw new Error("unable to fetch :[")
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }

const getPuzzle = async(wordCount) => {
    const resp = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
        if (resp.status === 200) {
            const data =  await resp.json()
            return data.puzzle
        } else {
            throw new Error("Unable to fetch")
        }
    }

  