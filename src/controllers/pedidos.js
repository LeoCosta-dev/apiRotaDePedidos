const Pedidos = require("../models/Pedidos");

module.exports = (app) => {
    app.get("/", (req,res) => {
        res.send("<h1>Paçoca</h1>")
    })
    app.get("/pedidos", (req,res) =>{
        Pedidos.lista(req, res)
    })
}