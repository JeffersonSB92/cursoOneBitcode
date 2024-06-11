// Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). 
// O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de 
// multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o 
// programa deve exibir esses resultados e finalizar.


const num = parseInt(prompt("Digite o número que deseja saber a tabuada:"))
let tabuada = ""

for (let i = 1; i <= 20; i++) {

    let mult = num * i
    tabuada += `- ${i} x ${num} = ${mult}\n`
}

alert(`A tabuada do ${num} é: \n${tabuada}`)