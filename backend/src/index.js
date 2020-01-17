const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http1 = require('http')


const routes = require('./routes')
const { setupWebsocket } = require('./websocket')


const app = express()
const server = http1.Server(app)

setupWebsocket(server)


mongoose.connect('mongodb+srv://brenows:kadlec123@cluster0-aefbp.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


app.use(cors())
app.use(express.json())
app.use(routes)


server.listen(3333)







// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros: 

// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para criação ou alteração de um registro)