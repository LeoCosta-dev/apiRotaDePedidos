const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname, 'database.db')
const db = new sqlite3.Database(caminhoArq);

const TABELA_PEDIDOS = `
    CREATE TABLE IF NOT EXISTS "PEDIDOS" (
        "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
        "ENDERECO_CLIENTE" varchar,
        "ENDERECO_FORNECEDOR" varchar,
        "PRECO_FRETE" varchar,
        "PRAZO_ENTREGA" varchar,
        "ID_PRODUTO" varchar,
        "ID_FORNECEDOR" varchar,
        "PRECO_PRODUTO" varchar
    )
`;

const ADD_DADOS_PEDIDOS = `INSERT INTO PEDIDOS 
        (ID, ENDERECO_CLIENTE, ENDERECO_FORNECEDOR, PRECO_FRETE, PRAZO_ENTREGA, ID_PRODUTO, ID_FORNECEDOR, PRECO_PRODUTO )
        VALUES
        (1, 'STRING FK', 'STRING FK', 'FLOAT/DOUBLE', 'INT EM DIAS', 'INT FK', 'INT FK', 'FLOAT/DOUBLE FK')`

function criaTabelaPedidos() {
    db.run(TABELA_PEDIDOS, (erro) => {
        if (erro) {
            console.log('Erro ao criar a tabela PEDIDOS', erro);
        }
    });
}

function insereTabelaPedidos() {
    db.run(ADD_DADOS_PEDIDOS, (erro) => {
        if (erro) {
            console.log('Erro ao inserir os dados na tabela PEDIDOS');
        }
    });
}

module.exports = () => {
    db.serialize(() => {
        criaTabelaPedidos();
        insereTabelaPedidos();
    })
}
