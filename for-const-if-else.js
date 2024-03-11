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

for (const contact of contats){
   
    if (write.value.toLowerCase() === contact.name.toLowerCase()){
        p.innerHTML = `Contato Encontrado
        <br>Nome: ${contact.name} Tel: ${contact.number}`

        break
        
    } else {
        p.innerHTML = "Contato não encontado."
    }


    }
    
    
}

