let nome = 'Jeff';

console.log(nome);
console.error(nome);
console.warn(nome);

window.alert(nome);
let name = window.prompt('Digite seu nome:')
console.log(name)
let confirmacao = window.confirm('Você confirma essa ação?')
console.log(confirmacao);

// Os métodos que vem no window podem ser acessados sem termos que passar o window. por exemplo
// alert(name)
// confirm('Confrma?')
// prompt('Digite algo:')