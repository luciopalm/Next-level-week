const express = require("express")
const server = express()

//Configurar caminhos  da minha aplicção
//Pagina inicial
//req:requisição
//res:resposta

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")

})



//Ligar o servidor

server.listen(3000)



