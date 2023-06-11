const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TextoSchema = new Schema({
    _id: {type: Number, required: true, default: -1},
    texto: {type: String, required: [true, "Informe o texto!"]}
},{
    versionKey: false
});

TextoSchema.pre('save', async function(next){
    if(this._id < 1) {
        const Model = mongoose.model('texto', TextoSchema);
        const objMaxId = await Model.findOne().sort({'_id': -1});
        this._id = objMaxId == null ? 1 : objMaxId._id + 1;
    }
    
    next();
});

module.exports = {
    TextoSchema: TextoSchema,
    TextoModel: mongoose.model('texto', TextoSchema)
} 