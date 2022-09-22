let pecaXadrez = "BISPO";

switch (pecaXadrez.toLowerCase()) {
    case "rei":
        console.log("rei-> qualquer direção uma casa por vez")
        break;
    case "rainha":
        console.log("rainha->  qualquer direção horizontal,vertical e diagonais")
        break;
    case "torre":
        console.log("torre-> frente, trás, direita,esquerda")
        break;
    case "bispo":
        console.log("bispo-> diagonal")
        break;
    case "cavalo":
        console.log("cavalo -> movimento em L")
        break;
    case "peão":
        console.log("peão -> movimento para frente")
        break;
    default:
        console.log("peça inválida")

}

// utilizando o switch/case para saber o resultado da peça de Xadrez que está em uma váriavel.
// perceba que a váriavel está maiuscula, porém chamando a váriavel.toLoweCase() transformando a string dentro dela em minuscula.


