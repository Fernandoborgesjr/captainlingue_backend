const Categorias = require('../models/Atividade');
//Para exportar os métodos do controler
module.exports = {
    //Para listar Atividades
    async index(req, res) {
        //Para retornar com base na data de criação e de forma decrescente
        const listaCategorias = await Categorias.find().sort('-createdAt');
        const itens = [];
        const atividades = [];
        listaCategorias.map(categoria => {
            //Está filtrando os itens com status de exclusão
            itens.push(categoria.itens.filter(item =>
                item.statusExibicao === true,
                atividades.push(itens.filter(atividade =>
                    atividade.statusExibicao === true))
            ));
        });
        return res.json(atividades);
    },

    //Para cadastrar um novo Item
    async store(req, res) {
        const { idCategoria, idItem, ...resto} = req.body;
        const categoria = await Categorias.findById(idCategoria);
        
        //console.log(categoria.itens.filter(item => item._idItem));
        //await categoria.itens.find().findById(idItem).atividades.push({ resto });
        //console.log(categoria);
        //await categoria.save();
        //req.io.emit('categoria', categoria);
        return res.json(categoria);
    },
};