const contats = [

    { name: "Cristina", number: "(21) 97961-4798" },
    { name: "Afonso", number: "(21) 12348-7845" },
    { name: "Juliana", number: "(21) 25478-84563" },
    { name: "Antônio", number: "(21) 87456-9874" }

]   

let p = document.querySelector(".contact") // variável do paragráfo
const search = document.querySelector(".search") // variável do botão
const write = document.querySelector(".writter") // variável do input

search.addEventListener("click", justAppear) // evento de clicar o botão

function justAppear(){

let i = 0

while (i < contats.length){
   
    if (write.value.toLowerCase() === contats[i].name.toLowerCase()){
        p.innerHTML = `Contato Encontrado
        <br>Nome: ${contats[i].name} Tel: ${contats[i].number}`


        break
        
    } else {
        p.innerHTML = "Contato não encontado."
    }
    
    i++;

    }
    
    
}

