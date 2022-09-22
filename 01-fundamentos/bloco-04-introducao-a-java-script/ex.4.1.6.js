let pessoaCandidata = "reprovada";

switch (pessoaCandidata) {
    case "aprovada":
        console.log("Parabéns, você foi reprovada(o)");
        break;

    case "lista":
        console.log("Você está na nossa lista de espera");
        break;

    case "reprovada":
        console.log("Você foi reprovada(o)");
        break;

    default:
        console.log("informação incorreta");

}

// utilizando uma outra forma de estrutura condicional chamada "switch/case" para sabermos qual condição é verdadeira (true) 
// diferente do if/else o switch/case a váriavel que passamos para o switch é avaliada apenas uma vez, tendo seu valor comparando a cada caso, o códico é parado quando acha o resultado.
// neste caso o resultado  correto foi "Você foi reprovada(o)" pois declaramos uma váriavel "reprovada" lá em cima, e o código foi rodando até achar o valor "reprovada" 

