const degreeAngleA = 65;
const degreeAngleB = 100;
const degreeAngleC = 15;

let somaDeAngulos = degreeAngleA + degreeAngleB + degreeAngleC;
let angulosPositivos = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if (angulosPositivos) {
    if (somaDeAngulos === 180) {
        console.log(true)
    }
    else {
        console.log(false)
    }
} else {
    console.log("erro, angulo inválido")
}





