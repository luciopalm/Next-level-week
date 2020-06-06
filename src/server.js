const express = require("express")
const server = express()

//Configurar caminhos  da minha aplicção
//Pagina inicial
//req:requisição
//res:resposta

server.get("/", (req, res) => {
    res.send("Hello world")

})




//Ligar o servidor

server.listen(3000)



