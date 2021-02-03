const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

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


app.get('/api/getmensagens', (req, res) => {
    let sql = "SELECT nome_cliente, mensagem FROM mensagens JOIN clientes ON clientes.id_cliente = mensagens.id_cliente LIMIT 10"
    conn.query(sql, (error, result) => {
        res.send(result)
    })
})

app.post('/api/mensagem', (req, res) => {
    let post = req.body
    let email = post.email
    let nome = post.nome
    let mensagem = post.mensagem
    
    let sql1 = `INSERT INTO clientes (id_cliente, nome_cliente, email) VALUES(DEFAULT, '${nome}', '${email}')`
    let sql2 = `SELECT id_cliente FROM clientes WHERE email = '${email}'order by id_cliente desc limit 1`

    conn.query(sql1, (error, result) => {
        conn.query(sql2, (error, result) => {
            let sql3 = `INSERT INTO mensagens (id_msg, id_cliente, mensagem) VALUES (DEFAULT, '${result[0].id_cliente}', '${mensagem}')`
            conn.query(sql3, (error, result) => {
                res.send('Mensagem enviada')
            }) 
        })
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

app.listen(1910, () => {
    console.log('Servidor ativo na porta 1910')
})