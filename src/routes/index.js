const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  try{
  res.status(200).send("Interação com o Banco de Dados");
  }catch(error){
    res.status(400).send({
      message: error.message
    })
  }
});

module.exports = router;