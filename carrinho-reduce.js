const numbers = [1, 2, 3, 4, 5, 6, 7]

const sum = numbers.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 0)

console.log(sum)

const cart = [
    { productName: 'Abóbora', pricePerKg: 5, kg: 1 },
    { productName: 'Pepino', pricePerKg: 3.55, kg: 1.3 },
    { productName: 'Limão', pricePerKg: 1.2, kg: 2 },
    { productName: 'Abacate', pricePerKg: 5.4, kg: 1.67 },
    { productName: 'Morango', pricePerKg: 11.9, kg: 3 },
]

const total = cart.reduce((acc, valorTotal) => {

    return acc + valorTotal.pricePerKg * valorTotal.kg

}, 0)

console.log(total.toFixed(2))