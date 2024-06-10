//primeiro exercício

let nome = prompt("Digite seu primeiro nome:");
let sobrenome = prompt("Digite seu sobrenome:");
let estudo = prompt("Digite sua área de estudo:");
let nasc = prompt("Digite seu ano de nascimento:");
let idade = 2024 - nasc;

alert(`${nome} ${sobrenome}, ${idade} anos, estudante da área de ${estudo}.`);


// segundo exercício

let primeiroValor = parseFloat(prompt("Digite o primeiro valor:"));
let segundoValor = parseFloat(prompt("Digite o segundo valor:"));

let soma = primeiroValor + segundoValor;
let subt = primeiroValor - segundoValor;
let mult = primeiroValor * segundoValor;
let div = primeiroValor / segundoValor;

alert(`Resultado da Soma: ${soma}, Resultado da Subtração: ${subt}, Resultado da Multiplicação: ${mult}, Resultado da Divisão: ${div}`);
