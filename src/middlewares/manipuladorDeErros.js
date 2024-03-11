import mongoose from "mongoose";

/* eslint-disable no-unused-vars */
function manipuladorDeErros(erro, req, res, next) {
  console.log(erro);
  if (erro instanceof mongoose.Error.CastError) {
    res
      .status(400)
      .send({ message: "Um ou mais dados fornecedos estão incorretos" });
  } else if (erro instanceof mongoose.Error.ValidationError) {
    const mensagensErros = Object.values(erro.errors)
      .map((erro) => erro.message)
      .join("; ");
    res.status(400).send({
      message: `Os seguintes erros foram encontrados: ${mensagensErros}`,
    });
  }
  res.status(500).send({ message: "Erro interno de servidor" });
}

export default manipuladorDeErros;
