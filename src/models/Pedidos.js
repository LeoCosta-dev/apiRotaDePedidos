const { selectPedidos } = require("../DAO/pedidosDAO");
const dataBase = require("../infra/conexao")

class Pedidos{
    static lista(req, res){
        res.status(200).json(selectPedidos(dataBase))
    }
}

module.exports = Pedidos