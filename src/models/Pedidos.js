const PedidosDAO = require("../DAO/pedidosDAO");
const dataBase = require("../infra/conexao");


class Pedidos{
    static async lista(req, res){
        res.status(200).json(await PedidosDAO.selectPedidos(dataBase))
    }
    static async adiciona(body, res) {
        try {
            let deuBom = await PedidosDAO.addPedidos(body, dataBase)
            res.status(201).json(deuBom)
        }catch(e){
            res.status(400).json(e)
        }
    }
    static async buscaID(id, res){
        try {
            let idTaAqui = await PedidosDAO.selectID(id, dataBase)
            res.status(200).json(idTaAqui)
        }catch(e){
            res.status(500).json(e)
        }
    }
}

module.exports = Pedidos