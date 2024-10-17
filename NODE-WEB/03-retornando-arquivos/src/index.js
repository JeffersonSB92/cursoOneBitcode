const express = require('express');

const app = express();

//criamos a pasta public onde colocaremos todos os arquivos estáticos e referenciamos a pasta nessa chamada abaixo para usar os arquivos
app.use(express.static('public'))

app.get('/', (req, res) => {
    //Utilize o método res.sendFile() do Express para renderizar um arquivo HTML estático em resposta a uma requisição.
    res.sendFile(__dirname + '/views/index.html')
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}`));