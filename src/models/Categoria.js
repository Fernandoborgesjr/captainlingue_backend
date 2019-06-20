const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
    nomeCategoria: String,
    itens: Array,
}, {
        timestamps: true,
    });
module.exports = mongoose.model('Categoria', CategoriaSchema);