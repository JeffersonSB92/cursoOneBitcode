

const idade = prompt("Digite sua idade:")

if (idade > 18) {
    alert("Você é maior de idade!")
} else if (idade > 12) {
    alert("Você é menor de idade!")
} else if (idade > 4) {
    alert("Você é criança!")
} else {
    alert("Você é um bebê!")
}



// OPERADOR TERNÁRIO
// SINTAXE
// const resultado = condição ? resultado_verdadeiro : resultado_falso

const resultado = (6 === 6) ? "Verdadeiro" : "Falso";
console.log(resultado);