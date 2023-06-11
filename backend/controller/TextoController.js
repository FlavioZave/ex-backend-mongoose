const TextoModel = require('../model/TextoModel').TextoModel;

class TextoController {
    async listar(req, res) {
        const resultado = await TextoModel.find({});
        res.json(resultado);
    }
    async salvar(req, res) {
        const texto = req.body;
        const resultado = await TextoModel.create(texto);
        res.json(resultado);
    }
    async excluir(req, res) {
        const id = req.params.id;
        const resultado = await TextoModel.findOneAndDelete({'_id': id});
        res.send(resultado);
    }
}

module.exports = new TextoController();