function getWinner(a, b) {
    if (a === b) {
        return a;
    }
    else if (a > b) {
        return a
    } else if (a < b) {
        return b
    }
}

const win = getWinner(2, 2)
console.log(win);