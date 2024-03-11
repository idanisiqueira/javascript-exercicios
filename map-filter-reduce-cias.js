const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

// Adicionar 10% de valor de mercado a todas as companhias -> MAP
// Filtrar somente companhias fundados abaixo de 1990 -> FILTER
// Somar o valor de mercado das restantes -> REDUCE

const actualValue = companies.map (comps =>{
    
    const actualCompanies = {
        name: comps.name,
        marketValue: comps.marketValue + comps.marketValue * 10 / 100 ,
        CEO: comps.CEO,
        foundedOn: comps.foundedOn
    }
    return actualCompanies
})

console.log(actualValue)

const oldCompanies = actualValue.filter (comps =>{
    if(comps.foundedOn <= 1990){
        return true
    }
    else{
        return false
    }
})

console.log(oldCompanies)

const buy = oldCompanies.reduce ((acc, allBuy) =>{
    return acc + allBuy.marketValue
},0)

console.log(buy.toFixed(2))

