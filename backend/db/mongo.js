const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/sitefontes';
const db = mongoose.connect(url);

mongoose.connection.on('connected', () => console.log('Conectado ao MongoDB!'));
mongoose.connection.on('error', (erro) => console.log('Erro na conexão: '+ erro));

module.exports = db;