const temperature = 36

if (temperature === 36){
    console.log ("Você está saudável")
}
else if (temperature > 36 && temperature <=40) {
    console.log ("Está com febre")
}
else if (temperature > 40){
    console.log ("Está com MUITA febre")
}
else {
    console.log ("Está com hipotermia")
}

const weather = 10

switch (weather) {

case 10:
    console.log("Tá meio frio")
    break

case 20:
    console.log("Tá meio quente")
    break

case 30:
    console.log("Tá quente")
    break

default:
    console.log("Não sei informar")
    break

}