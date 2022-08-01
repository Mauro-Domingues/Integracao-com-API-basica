const ObjectRepository = require('../database/repositories/objectRepository.js');

class ObjectService { // Cria e exporta os comandos consultar/criar/atualizar/deletar
  
  constructor() {
    this.repository = new ObjectRepository();
  }
  
  async getAllObjects(){
    return this.repository.findAll(); // Consultar
  }

  async getObjectById(ID){
    return this.repository.findById(ID); // Consultar pelo ID
  }

  async createObject(object){
    return this.repository.create(object); // Criar
  }

  async updateObject(ID, object){
    return this.repository.update(ID, object); // Atualizar
  }

  async deleteObject(ID){
    return this.repository.delete(ID); // Deletar
  }

};

module.exports = ObjectService;
