const express = require('express');
const servidor = express();
require('./db/mongo');
servidor.use(express.json());

const TextoRouter = require('./routes/TextoRouter');
servidor.use('/textos', TextoRouter);

servidor.listen(3005, function(){
    console.log('Servidor rodando http://localhost:3005');
});