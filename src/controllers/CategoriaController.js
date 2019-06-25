const Categoria = require('../models/Atividade');

//Para exportar os métodos do controler
module.exports = {
    //Para listar as Categorias
    async index(req, res) {
        //Para retornar com base na data de criação e de forma decrescente
        const Categorias = await Categoria.find().sort('-createdAt');
        return res.json(Categorias);
    },

    //Para cadastrar uma nova Categoria
    async store(req, res) {
        console.log(req.body);
        const { titulo } = req.body;
        const categoria = await Categoria.Categoria.create({
            titulo,
        });
        //req.io.emit('categoria', categoria);
        return res.json(categoria);
    },
};