const button = document.querySelector('#calcular');

const resultTitle = document.querySelector('h2.resultado');
const counter = document.querySelector('h3.resultado');

let clickCounter = 0;

button.addEventListener('click', () => {
    resultTitle.textContent = "Botão clicado!";
    counter.textContent = `Quantidade de Cliques: ${++clickCounter}`;
});