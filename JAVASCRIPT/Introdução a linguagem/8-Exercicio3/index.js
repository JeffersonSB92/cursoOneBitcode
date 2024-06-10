// Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:
// milímetro (mm)
// centímetro (cm)
// decímetro (dm)
// decâmetro (dam)
// hectômetro (hm)
// quilômetro (km)
// O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.
// O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)


let valor = prompt("Digite um valor em Metros:");
const opt = prompt("Para qual unidade de medida você gostaria de converter: \na)mm \nb)cm \nc)dm \nd)dam \ne)hm \nf)km");

switch (opt) {
    case 'a':
        valor *= 1000
        alert(`${valor} milímetros!`)
        break  
    case 'b':
        valor *= 100
        alert(`${valor} centímetros!`)
        break  
    case 'c':
        valor *= 10
        alert(`${valor} decímetros!`)
        break  
    case 'd':
        valor /= 10
        alert(`${valor} decâmetros!`)
        break  
    case 'e':
        valor /= 100
        alert(`${valor} hectômetros!`)
        break  
    case 'f':
        valor /= 1000
        alert(`${valor} quilômetros!`)
        break  
    default:
        alert("Opção Inválida!")
        break
}