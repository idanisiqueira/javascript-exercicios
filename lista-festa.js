const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const double = number.map((item) => item * 2)

const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'Joaquim', vip: true },
    { name: 'Constâncio', vip: true },
    { name: 'Eustácio', vip: false },
    { name: 'Milena', vip: true },
    { name: 'Olivia', vip: false },
    { name: 'Fernando', vip: false },
    { name: 'Brenda', vip: true },
]

/* Novo array com a informação das pulseiras dos convidados. */

const bracelet = list.map(user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }

    return newUser
})

console.log(bracelet)

// outro exercício

const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Josefina', testGrade: 5 },
    { name: 'Humberto', testGrade: 2 },
    { name: 'Rafael', testGrade: 6 },
    { name: 'Eliana', testGrade: 9 },
    { name: 'Elisangela', testGrade: 10 },
    { name: 'Silvana', testGrade: 3 },
    { name: 'João', testGrade: 4 },
    { name: 'Tiago', testGrade: 1 },
    { name: 'Fábio', testGrade: 8 }
]

const notes = students.map(avaliate => {

    const final = {

        name: avaliate.name,
        testGrade: avaliate.testGrade >= 5 ? 'aprovado' : 'reprovado'
    }
    return final
})

console.log(notes)

