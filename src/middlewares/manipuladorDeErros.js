import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";

/* eslint-disable no-unused-vars */
function manipuladorDeErros(erro, req, res, next) {
  console.log(`O nome do erro é: ${erro.name}\n`);
  console.log(`A mensagem de erro é: ${erro.message}\n`);
  console.log(`A stack do erro é: ${erro.stack}\n`);

  if (erro instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).enviarResposta(res);
  }
  new ErroBase().enviarResposta(res);
}

export default manipuladorDeErros;
