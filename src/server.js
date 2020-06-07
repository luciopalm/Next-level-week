const express = require("express")
const server = express()
//Pegar o banco de dados

const db = require("./database/db")

//Configurar pasta publica

server.use(express.static("public"))

// utilizando template engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//Configurar caminhos  da minha aplicção
//Pagina inicial
//req:requisição
//res:resposta

server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um Título"})
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {

    //Pegar os dados do banco de dados

    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        const total = rows.length

        //mostrar a pagina html com os dados do banco de dadois
        return res.render("search-results.html", { places: rows, total: total})
    }) 



})




//Ligar o servidor

server.listen(3000)



