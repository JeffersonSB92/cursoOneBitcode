const express = require('express')
const path = require('node:path')

const app = express()

const storedUsers = []

//config do EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//config do body
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('cadastro')
})

app.get('/sucesso', (req, res) => {
    res.render('sucesso')
})

app.get('/usuarios', (req, res) => {
    res.render('usuarios', { users: storedUsers })
})

app.post('/registro', (req, res) => {
    const username = req.body.username
    const mail = req.body.mail

    storedUsers.push({ username, mail })

    res.redirect('/sucesso')
})

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`))

//esc6module