const PedidosDAO = require("../DAO/pedidosDAO");
const dataBase = require("../infra/conexao");


class Pedidos{
    static async lista(req, res){
        res.status(200).json(await PedidosDAO.selectPedidos(dataBase))
    }
    static async buscaID(id, res){
        try {
            let idTaAqui = await PedidosDAO.selectID(id, dataBase)
            res.status(200).json(idTaAqui)
        }catch(e){
            res.status(500).json(e)
        }
    }
    static async adiciona(body, res) {
        try {
            let deuBom = await PedidosDAO.addPedidos(body, dataBase)
            res.status(201).json(deuBom)
        }catch(e){
            res.status(400).json(e)
        }
    }
    static async atualiza(id, body, res){
        try {
            let mudou = await PedidosDAO.updatePedidos(id, body, dataBase)
            res.status(201).json(mudou)
        }catch(e){
            res.status(400).json(e)
        }
    }
    static async deleta(id, res){
        try {
            let deletei = await PedidosDAO.deletePedidos(id, dataBase)
            res.status(200).json(deletei)
        }catch(e){
            res.status(500).json(e)
        }
    }
}

module.exports = Pedidos