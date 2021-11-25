const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname, 'database.db')
const db = new sqlite3.Database(caminhoArq);
const Dias = new Date()
const criado = Dias.getDate() + "/" + (Dias.getMonth() + 1) + "/" + Dias.getFullYear()

const TABELA_PEDIDOS = `
    CREATE TABLE IF NOT EXISTS "PEDIDOS" (
        "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
        "ENDERECO_CLIENTE" varchar,
        "ENDERECO_FORNECEDOR" varchar,
        "PRECO_FRETE" REAL,
        "PRAZO_ENTREGA" INTERGER,
        "ID_PRODUTO" INTEGER,
        "ID_FORNECEDOR" INTEGER,
        "PRECO_PRODUTO" REAL,
        "DATA" DATE
    )
`;

const ADD_DADOS_PEDIDOS = `INSERT INTO PEDIDOS 
        (ID, ENDERECO_CLIENTE, ENDERECO_FORNECEDOR, PRECO_FRETE, PRAZO_ENTREGA, ID_PRODUTO, ID_FORNECEDOR, PRECO_PRODUTO, DATA)
        VALUES
        (1, 'STRING FK', 'STRING FK', '00.00', '1', '1', '1', '00.00', ${criado})`

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


db.serialize(() => {
    criaTabelaPedidos();
    insereTabelaPedidos();
})

// module.exports = () => {
//     db.serialize(() => {
//         criaTabelaPedidos();
//         insereTabelaPedidos();
//     })
// }
