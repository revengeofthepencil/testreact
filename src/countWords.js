
function countWords(text) {
    if (!text) {return 0}

    const match = text.match(/\w+/g)
    if (match) {
        return match.length
    } else {

        return 0
    }
}

export default countWords;