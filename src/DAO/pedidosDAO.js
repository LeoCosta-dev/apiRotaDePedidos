class PedidosDAO {

  static selectPedidos(pedidosDb) {
    return new Promise((resolve, reject) => {
      pedidosDb.all('SELECT * FROM PEDIDOS', (err, rows) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "pedidoes": rows,
            "count": rows.length,
            "error": false
          })
        }
      })
    }
    )
  }

  static selectID(id, pedidosDb) {
    return new promise((resolve, reject) => {
      pedidosDb.all(`SELECT id FROM PEDIDOS WHERE id = ${id}`, (err, rows) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "id": rows,
            "count": rows.length,
            "error": false
          })
        }
      })
    })
  }

  static addPedidos(body, pedidosDb) {
    return new Promise((resolve, reject) => {
      pedidosDb.run(`INSERT INTO PEDIDOS (ID, ENDERECO_CLIENTE, ENDERECO_FORNECEDOR, PRECO_FRETE, PRAZO_ENTREGA, ID_PRODUTO, ID_FORNECEDOR, PRECO_PRODUTO) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [body.id, body.endereco_cliente, body.endereco_fornecedor, body.preco_frete, body.prazo_entrega, body.id_produto, body.id_fornecedor, body.preco_produto], (err) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "pedido": body,
            "error": false
          })
        }
      })
    })
  } 

  static deletePedidos(id, pedidosDb) {
    return new Promise((resolve, reject) => {
      pedidosDb.all(`DELETE FROM PEDIDOS WHERE id = ${id}`, (err) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "pedido": id,
            "count": id.length,
            "error": false
          })
        }
      })
    })
  }

  static updatePedidos(id, body, pedidosDb) {
    return new Promise((resolve, reject) => {
      pedidosDb.run(`UPDATE PEDIDOS SET (ID, ENDERECO_CLIENTE, ENDERECO_FORNECEDOR, PRECO_FRETE, PRAZO_ENTREGA, ID_PRODUTO, ID_FORNECEDOR, PRECO_PRODUTO) = (?, ?, ?, ?, ?, ?, ?, ?) WHERE id = ${id}`, [body.id, body.endereco_cliente, body.endereco_fornecedor, body.preco_frete, body.prazo_entrega, body.id_produto, body.id_fornecedor, body.preco_produto], (err) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true}))
        } else {
          resolve({
            "pedido": id,
            "count": id.length,
            "error": false
          })
        }
      })
    })
  }
}

module.exports = PedidosDAO
