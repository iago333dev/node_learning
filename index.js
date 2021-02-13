const express = require("express");
const app = express();

//Considera a pasta "Public ao iniciar progama"
app.use(express.static('public'))



var port = 8080;

// Importa pacote sequelize
const Sequelize = require("sequelize");
//Instanciando Banco de Dados
const sequelize = new Sequelize('nodebrinks','root','root',{
	host: "localhost",
	dialect: 'mysql'
})
// Define Tabela Login
const Login = sequelize.define('Login',{
	acesso: {
		// Define Campo "acesso"
		type: Sequelize.STRING
	},

	senha: {
		// Define Campo "Senha"
		type: Sequelize.STRING
	}

})





// Função Retorna tela principal

app.get("/",function(req,res){
	res.sendfile(__dirname+"/public/index.html");	
})


app.listen(port,function(){
	console.log("Servidor Rodando na porta:"+port);	
});
