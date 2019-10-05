//Chama o modulo express para uma variavel
const express = require("express");

//Salva o APP express
const app = express();


//Cria rota Principal
app.get("/", function(req,res){
  res.send("Seja bem vindo ao app")
});


//Criando rota que passa parametro "Nome"
app.get("/ola/:nome", function (req,res){
  //Retorna ola + parametro nome
  res.send("<center> <h1> Ola "+req.params.nome+"</h1> </center>")
});


//Função roda o servidor
app.listen(8081, function(){
  console.log("Servidor rodando na url https://localhost:8081");
});
