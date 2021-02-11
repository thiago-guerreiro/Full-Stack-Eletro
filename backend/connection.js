const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const { inserirComentario, pegarComentarios } = require('./comentarios')

app.set('view engine', 'ejs')
app.use(bodyParser.json({extended: true}))
app.use(cors())

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fseletro'
})

app.get('/api/produtos', (req, res) => {
    let sql = 'SELECT * FROM produtos;'
    conn.query(sql, (error, result) => {
        res.send(result)
    })
})

app.get('/api/produto', (req, res) => {
    let idproduto = req.query.idproduto 
    let sql = 'SELECT * FROM produtos WHERE idproduto = ?'
    conn.query(sql, [idproduto], (error, result) => { 
        res.send(result[0])
    })
})

app.post('/api/pedido', (req, res) => {
    const pedido = req.body
    let sql = "INSERT INTO pedidos (idpedido, nomecliente, email, endereco, telefone, nomeproduto, valorunitario, quantidade, valortotal) VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?, (valorunitario * quantidade))"
    let valores = [
        pedido.nomecliente,
        pedido.email,
        pedido.endereco, 
        pedido.telefone, 
        pedido.nomeproduto, 
        pedido.valorunitario, 
        pedido.quantidade
    ]
    conn.query(sql, valores, (error, result) => {
        res.send(result)
    })
})


app.get('/api/getmensagens', async (req, res) => {
    const result = await pegarComentarios()
    res.send(result)
})

app.post('/api/mensagem', async (req, res) => {
    let post = req.body

    var comentario = {
        email: post.email,
        nome_cliente: post.nome,
        mensagem: post.mensagem
    }

    const result = await inserirComentario(comentario) 
    res.send(result)
})


app.listen(1910, () => {
    console.log('Servidor ativo na porta 1910')
})
