const PedidosDAO = require("../DAO/pedidosDAO");
const dataBase = require("../infra/conexao");
const moment = require("moment");

class Pedidos{
    static async lista(req, res){
        res.status(200).json(await PedidosDAO.selectPedidos(dataBase))
    }
    static async adiciona(body, res) {
        const dataCriacao = new Date();
        const data = moment(body.data, "DD/MM/YYYY").format("YYYY-MM-DD")

        const validaData = moment(data).isSameOrAfter(dataCriacao);

        const validacoes = [
            {
                nome: "data",
                valido: validaData,
                menssagem: "Data inferior ao dia atual."
            }
        ];
        const erros = validacoes.filter((campo) => {!campo.valido});
        const numeroDeErros = erros.length;

        if(numeroDeErros){
            res.status(400).json(erros)
        } 
        try {
            let deuBom = await PedidosDAO.addPedidos(body, dataBase, dataCriacao)
            res.status(201).json(deuBom)
        }catch(e){
            res.status(400).json(e)
        }
    }
}

module.exports = Pedidos