const Categorias = require('../models/Atividade');
//Para exportar os métodos do controler
module.exports = {
    //Para listar Itens
    async index(req, res) {
        //Para retornar com base na data de criação e de forma decrescente
        const listaCategorias = await Categorias.find().sort('-createdAt');
        const itens = [];
        listaCategorias.map(categoria => {
            itens.push(categoria.itens);
        });
        return res.json(itens);
    },

    //Para cadastrar um novo Item
    async store(req, res) {
        const { idCategoria, titulo } = req.body;
        const categoria = await Categorias.findById(idCategoria);
        categoria.itens.push({ titulo: titulo });
        console.log(categoria);
        await categoria.save();
        //req.io.emit('categoria', categoria);
        return res.json(categoria);
    },
};