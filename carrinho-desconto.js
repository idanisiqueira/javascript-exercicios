/* Calcular Desconto:
Todos os produtos acima de R$30,00 ganham 10% de desconto. */

const cart = [10, 50, 90, 2, 75, 20, 25, 100]

let finalValue = 0

function calculateDiscount (price, discount) {
    const result = (price * discount) / 100

    return result

}

cart.forEach((value) => {

    if (value > 30) {
        const discount = calculateDiscount (value, 10)
        finalValue = finalValue + (value - discount)
    }

    else {

        finalValue = finalValue + value

    }

});

console.log(finalValue)





