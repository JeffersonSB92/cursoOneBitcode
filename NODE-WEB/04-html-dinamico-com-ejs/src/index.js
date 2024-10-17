const express = require('express')
const path = require('node:path')

const app = express()

//setamos que a engine que mostra a view vai usar o EJS
app.set('view engine', 'ejs')
//setamos onde estarão os arquivos que iremos utilizar aqui, o primeiro views é apenas
//para dizer o "template", no path é que direcionamos para a pasta views, que se fosse pages passariamos como pages
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    const title = 'Homepage'
    const message = 'Mensagem dinâmica inserida pelo EJS'


    // setando que o que será exibido é o nosso arquivo index.ejs, porém não precisamos passar o .ejs, se fosse 
    // home.ejs passariamos para o render apenas home
    res.render('index', { title, message })
})

PORT = 3000
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`))