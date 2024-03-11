function primeNumbers(num) {
    let numbers = new Array(); // criação do array com os números primos de 1 a 1000
    for (let i = 0; i <= num; i++) {
        if (isPrime(i)) {
            numbers.push(i);
        }
    }
    return numbers;
}

console.log (primeNumbers(1000)) // números primos de 1 a 1000

    function isPrime(num) {
        for (let i = 2; i < num; i++)
            if (num % i === 0) {
                return false
            };
        return num > 1;
    }

    
    const main = primeNumbers(1000).reduce((acumulador, atual) => { // soma de todos os números primos
        return acumulador = acumulador + atual
    }, 0)

    console.log(main)


