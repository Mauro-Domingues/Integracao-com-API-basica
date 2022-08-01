const mysql = require("mysql2/promise");

const connectToMySql = async () => {

    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    const config = {
        host: "nome-do-host",
        user: "nome-do-usuário",
        password: "senha",
        database: "nome-da-tabela"
        // Dados formados ao criar um DB
    }

    const connection = await mysql.createConnection(config);
    console.log("Conexão realizada com sucesso");
    global.connection = connection;
}

connectToMySql();

module.exports = {connectToMySql}