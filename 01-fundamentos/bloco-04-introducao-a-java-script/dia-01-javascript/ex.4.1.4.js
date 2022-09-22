const horario = 15;
let message = "vamos fazer um bolo pro café da tarde?"

if (horario >= 22) {
    console.log("Não deveríamos comer nada, é hora de dormir")
}
else if (horario >= 18 && horario < 22) {
    console.log("Rango da noite, vamos jantar :D")
}
else if (horario >= 14 && horario < 18) {
    console.log("vamos fazer um bolo pro café da tarde?")
}
else if (horario >= 11 && horario <= 14) {
    console.log("Hora do almoço!!")
}
else {
    console.log("Hmmm, cheiro de café recém-passado")
}

console.log(message)

// utilizando operadores lógicos com estruturas condicionais para saber qual condição é verdadeira
// o resultado correto foi "Vamos fazer um bolo pro café da tarde"? pois 15 é maior ou igual a 14 e menor que 18.