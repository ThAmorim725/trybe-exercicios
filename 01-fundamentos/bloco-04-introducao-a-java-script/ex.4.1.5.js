let weekDay = "quarta-feira";
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}
else { 
    console.log("FINALMENTE, descanso merecido UwU")
}

// utilizando operadores lógicos com estruturas condicionais para saber se a condição é false ou true.
// o resultado correto foi "Oba, mais um dia de aprendizado na Trybe" pois utilizamos o operador || (ou) para saber se o weekDay era um dos dias da lista, e como o dia é quarta, deu True.