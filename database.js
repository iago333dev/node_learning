// Importa pacote sequelize
const Sequelize = require("sequelize");

//Instanciando Banco de Dados

//OBS!! é nescessario ter o banco 'test' criado para funcionar
const sequelize = new Sequelize('test','root','',{
	host: "localhost",
	dialect: 'mysql'
})
// Define Tabela Login
const Login = sequelize.define('login',{
	acesso: {
		// Define Campo "acesso"
		type: Sequelize.STRING
	},

	senha: {
		// Define Campo "Senha"
		type: Sequelize.STRING
	}

})

Login.sync({force: true})

Login.create({
	acesso: "ADMIN",
	senha: "ADMIN"


})