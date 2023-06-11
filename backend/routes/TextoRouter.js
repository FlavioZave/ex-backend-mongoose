const TextoController = require('../controller/TextoController');
const express = require('express');

const Router = express.Router();

Router.get('/', TextoController.listar);
Router.post('/', TextoController.salvar);
Router.delete('/:id', TextoController.excluir);

module.exports = Router;