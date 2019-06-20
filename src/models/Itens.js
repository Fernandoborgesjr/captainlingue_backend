const mongoose = require('mongoose');

const ItensSchema = mongoose.Schema({
    idCategoria:{
        type: String,
        required: true
    },
    portugues: {
        type: String,
        required: true
    },
    ingles: {
        type: String,
        required: true
    },
}, {
        timestamps: true,
    });
module.exports = mongoose.model('Itens', ItensSchema);