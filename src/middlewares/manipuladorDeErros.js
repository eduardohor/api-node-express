import mongoose from "mongoose";

/* eslint-disable no-unused-vars */
function manipuladorDeErros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    res
      .status(400)
      .send({ message: "Um ou mais dados fornecedos estão incorretos" });
  }
  res.status(500).send({ message: "Erro interno de servidor" });
}

export default manipuladorDeErros;
