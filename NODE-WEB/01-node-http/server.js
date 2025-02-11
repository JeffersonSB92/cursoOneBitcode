// Importando o módulo http do node
const http = require('node:http');

// Criando o servidor
const server = http.createServer((request, response) => {
    const path = request.url;

    switch (path) {
        case '/':
            response.writeHead(200);
            response.write('Você está página incial!');
            break;
        case '/artigos':
            response.writeHead(200);
            response.write('Você está página de artigos!');
            break;
        default:
            response.writeHead(404);
            response.write('Caminho não encontrado!');
            break;
    }
    response.end();
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`)
})