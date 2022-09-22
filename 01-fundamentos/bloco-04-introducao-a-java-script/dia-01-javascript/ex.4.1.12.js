const num1 = 3;
const num2 = 7;
const num3 = 10;

let isPar = false; 

if ( num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    isPar = true
}
console.log (isPar)

// utilizando estrutura condicional if/else com operador lógico e de comparação para saber se um dos valores acima é par.
// percebemos que num1 (3) e num2 (7) é ímpar, nesse caso false, poreém num3 (10) é par, e para que a váriável isPar seja verdadeira, apenas um dos valorez precisariam ser par.