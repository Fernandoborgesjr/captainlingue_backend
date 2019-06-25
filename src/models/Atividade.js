const mongoose = require('mongoose');

const AtividadeSchema = new mongoose.Schema({
    instrucao: {
        type: String,
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

mongoose.model('Atividades', AtividadeSchema);

const ItensSchema = new mongoose.Schema({
    titulo: String,
    atividades: [AtividadeSchema]
}, {
        timestamps: true,
    });

mongoose.model('Itens', ItensSchema);

const CategoriaSchema = new mongoose.Schema({
    titulo: String,
    itens: [ItensSchema],
}, {
        timestamps: true,
    });


module.exports = mongoose.model('Categoria', CategoriaSchema);


/* itens: [
        {
            titulo: String,
            atividades: [
                {

                    instrucao: {
                        type: String,
                    },
                    portugues: {
                        type: String,
                        required: true
                    },
                    ingles: {
                        type: String,
                        required: true
                    },
                }
            ]
        }
    ], */