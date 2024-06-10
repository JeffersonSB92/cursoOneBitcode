// Controle Financeiro
// Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível 
// e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma 
// opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser 
// adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade 
// de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. 
// A opção de sair deve encerrar o programa.

let saldo = parseFloat(prompt("Qual seu saldo inicial?"))
let opcao = ""

do {
    opcao = prompt(`Seu saldo é ${saldo}, você deseja:\n1 - Adicionar Dinheiro\n2 - Remover Dinheiro\n3 - Sair`)
    
    switch (opcao) {
        case "1":
          let add = parseFloat(prompt("Qual valor deseja adicionar?"))
          saldo += add
          break
          case "2":
          let sub = parseFloat(prompt("Qual valor deseja subtrair?"))
          saldo -= sub
          break
        case "3":
          break
        default:
          alert("Entrada inválida! Escolha uma das cinco opções.")
    }
} while (opcao !== "3")