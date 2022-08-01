const db = require("../index.js")

class ObjectRepository {
  
  // Consulta todos os objetos do DB

  async findAll() {
    const conn = await db.connectToMySql();
    const query = "SELECT * FROM nome-da-tabela";
    const objects = await conn.query(query);
    return objects;
  }

  // Consulta o objeto especificado pelo ID do DB

  async findById(ID){
    const conn = await db.connectToMySql();
    const query = "SELECT * FROM nome-da-tabela WHERE ID = ?";
    const [object] = await conn.query(query, [ID]);
    return object;
  }

  // Cria um objeto no DB
  
  async create(objectData){
    const conn = await db.connectToMySql();
    const query = "INSERT INTO object(ID, name, etc) VALUES(?, ?, ?)";
    const [object] = await conn.query(query, [
      objectData.ID,
      objectData.name,
      objectData.etc
    ]);
    return object;
  }

  // Atualiza o objeto especificado pelo ID do DB

  async update(ID, objectData){
    const conn = await db.connectToMySql();
    const query = "UPDATE object SET name = ?, etc = ? WHERE ID = ?";
    const [object] = await conn.query(query, [
      objectData.name,
      objectData.etc,
      ID
    ]);
    return object;
  }

  // Deleta um objeto no DB

  async delete(ID){
    const conn = await db.connectToMySql();
    const query = "DELETE FROM object WHERE ID = ?";
    const [object] = await conn.query(query, [ID]);
  }

}

module.exports = ObjectRepository;