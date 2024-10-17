const express = require('express');

const server = express();

server.get('/', (request, response) => {
    response.send('Servido Express funcionando!\nVocê está na página inicial.')
});

// req e res são o mais utilizado para definir a request e a response
server.get('/artigos', (req, res) => {
    res.send('Você está na página de artigos.')
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor Express iniciado em http://localhost:${PORT}`)
})