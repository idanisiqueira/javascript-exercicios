const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

// Subtrair 10% de valor de mercado de todas as companhias -> MAP
// Filtrar somente companhias fundados depois 1980 -> FILTER
// Somar o valor de mercado das restantes -> REDUCE

const newCompanies = companies.map(sub => {
    const percent = {
        name: sub.name,
        marketValue: sub.marketValue - sub.marketValue * 10 / 100,
        CEO: sub.CEO,
        foundedOn: sub.foundedOn
    }
    return percent
})

const foundation = newCompanies.filter(ano => {
    if (ano.foundedOn >= 1980) {
        return true
    }
    else {
        return false
    }
})

const sum = foundation.reduce((acc, buy) => {
    return acc + buy.marketValue
}, 0)

console.log (sum.toFixed(2))