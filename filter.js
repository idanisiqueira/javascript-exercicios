const list = [20, 2, 3, 500, 87, 900, 1000, 40, 32, 22]

const newList = list.filter(number => {
    if (number < 100 && number % 2 === 0) {
        return true
    }
    else { return false }
}
)

console.log(newList)

