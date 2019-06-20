const Itens = require('../models/Itens');
const Categorias = require('../models/Categoria');
//Para exportar os métodos do controler
module.exports = {
    //Para listar as Categorias
    async index(req, res) {
        //Para retornar com base na data de criação e de forma decrescente
        const listaItens = await Itens.find().sort('-createdAt');
        return res.json(listaItens);
    },

    //Para cadastrar um novo Item
    async store(req, res) {
        console.log(req.body);
        const { idCategoria, portugues, ingles } = req.body;
        const item = await Itens.create({
            idCategoria, portugues, ingles
        });

        const categoria = await Categorias.findById(idCategoria);
        categoria.itens.push(item);
        await categoria.save();

        // req.io.emit('like', post);
        //req.io.emit('categoria', categoria);
        return res.json(categoria);
    },
};