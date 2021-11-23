const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')
const produtos_database = new sqlite3.Database(caminhoArq);

process.on('SIGINT', () =>
produtos_database.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = produtos_database;