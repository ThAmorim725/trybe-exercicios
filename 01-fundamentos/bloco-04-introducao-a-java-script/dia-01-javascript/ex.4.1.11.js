const porcentagem = 101;

if (porcentagem < 0 || porcentagem > 100) {
    console.log("Erro, nota incorreta!")
}
else if (porcentagem >= 90) {
    console.log("A")
}
else if (porcentagem >= 80) {
    console.log("B")

}
else if (porcentagem >= 70) {
    console.log("C")
}
else if (porcentagem >= 60) {
    console.log("D")
}
else if (porcentagem >= 50) {
    console.log("E")
}
else {
    console.log("F")
}

// utilizando a estrutura condicional com operadores lógicos e de comparação para saber qual a nota da pessoa.
// neste caso a notta deu incorreta, pois foi constado que a nota foi 101, e se a nota fosse menor que 0 ou maior que 100 a nota seria inválida.