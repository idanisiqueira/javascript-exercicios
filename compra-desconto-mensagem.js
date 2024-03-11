/* Calcular Desconto:
Todos os produtos acima de R$30,00 ganham 10% de desconto. */

const cart = [10, 50, 90, 2, 75, 20, 25, 100]

let finalValue = 0
let discount = 0
let totalValue = 0

function calculateDiscount(price, discount) {
    const value = (price * discount) / 100

    return value
}

cart.forEach((value) => {

    if (value > 30) {
        const result = calculateDiscount(value, 10)
        finalValue = finalValue + (value - result)

        discount = discount + calculateDiscount(value,10)
    }

    else {

        finalValue = finalValue + value
    }

    totalValue = totalValue + value

});

console.log(`O valor total da compra foi de R$${totalValue.toFixed(2)}. O valor da compra com desconto foi de R$${finalValue.toFixed(2)}, sendo o desconto de R$${discount.toFixed(2)}`)

