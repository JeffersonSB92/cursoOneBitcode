// Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, 
// pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. 
// No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.

const turista = prompt("Digite seu nome: ")
let contagem = 0
let cidades = ""

let visitou = prompt("Você visitou alguma cidade? (Sim/Não)")

while (visitou === "Sim") {
    let cidade = prompt("Digite o nome da cidade:")
    cidades += ` - ${cidade} \n`
    contagem++

    visitou = prompt("Você visitou alguma cidade? (Sim/Não)")
}

alert(`- As ${contagem} cidades que ${turista} visitou foram: \n ${cidades}`)   