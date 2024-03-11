const contats = [

    { name: "Daniela", number: "(21) 97961-4798" },
    { name: "José", number: "(21) 12348-7845" },
    { name: "Cristina", number: "(21) 25478-84563" },
    { name: "Antônio", number: "(21) 87456-9874" }

]   

let p = document.querySelector(".contact")
const search = document.querySelector(".search")
const write = document.querySelector(".writter")

search.addEventListener("click", justAppear)

function justAppear(){

for (let i = 0; i < contats.length; i++){
   
    if(write.value.toLowerCase() === contats[i].name.toLowerCase()){
        p.innerHTML = `Contato Encontrado
        <br>Nome: ${contats[i].name} Tel: ${contats[i].number}`

        break
    } else {
        p.innerHTML = "Contato não encontado."
    }


    }
    
    
}

