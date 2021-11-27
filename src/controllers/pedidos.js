const Pedidos = require("../models/Pedidos");

module.exports = (app) => {
    app.get("/", (req,res) => {
        res.send("<h1>Paçoca</h1>")
    })
    app.get("/pedidos", (req,res) =>{
        Pedidos.lista(req, res)
    })
    app.get("/pedidos/:id", (req,res) => {
        let id = parseInt(req.params.id)
        Pedidos.buscaID(id, res)
    })
    app.post("/pedidos", (req, res) =>{
        Pedidos.adiciona(req.body, res)
    })
    app.patch("/pedidos/:id", (req, res) => {
        let id = parseInt(req.params.id)
        Pedidos.atualiza(id, req.body, res)
    })
    app.delete("/pedidos/:id", (req,res) => {
        let id = parseInt(req.params.id)
        Pedidos.deleta(id, res)
    })
}