const ObjectService = require("../services/objectService"); // Recebe os comandos consultar/criar/atualizar/deletar

// Consultar todos

exports.get = async (req, res, next) => {
  try{
  const payload = await new ObjectService().getAllObjects();
  res.status(200).send(payload);
  }catch(error){
  res.status(400).send({
    message: error.message
  })
  }
};

// Consultar pelo ID

exports.getById = async (req, res, next) => {
  try{
  const payload = await new ObjectService().getObjectById(req.params.id);
  res.status(200).send(payload);
  }catch(error){
  res.status(400).send({
    message: error.message
  })
  }
};

// Criar

exports.post = async (req, res, next) => {
  try{
  const payload = await new ObjectService().createObject(req.body);
  res.status(201).send(payload);
  }catch(error){
    res.status(400).send({
      message: error.message
    })
  }
};

// Atualizar

exports.put = async (req, res, next) => {
  try{
    const id = req.params.id;
    const body = req.body;
    const oldObject = await new ObjectService().getObjectById(id);

    if(!oldObject || oldObject.length === 0)
      throw new Error(`Objeto com o ID ${is} não foi encontrado`);

    const payload = await new ObjectService().updateObject(id, body);
  
    res.status(200).send(payload);
  }catch(error){
    res.status(404).send({
      message: error.message
    })
  }
};

// Deletar

exports.delete = async (req, res, next) => {
  try{
    const id =req.params.id;
    const oldObject = await new ObjectService().getObjectById(id);

    if(!oldObject || oldObject.length === 0){
      throw new Error(`Objeto com o ID ${is} não existe`);
    }
    const payload = await new ObjectService().deleteObject(id);
  
    res.status(204).send(payload);
  }catch(error){
    res.status(404).send({
      message: error.message
    })
  }
};