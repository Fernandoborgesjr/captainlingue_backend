const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')
const routes = new express.Router();
const upload = multer(uploadConfig);
//upload.single('image') para recuperar o campo que esta a imagem

const CategoriaController = require('./controllers/CategoriaController');
routes.post('/categoria',upload.single('image'), CategoriaController.store);
routes.get('/categoria', CategoriaController.index);

const ItensController = require('./controllers/ItensController');
routes.post('/categoria/itens',upload.single('image'), ItensController.store);
routes.get('/categoria/itens', ItensController.index);

const AtividadeController = require('./controllers/AtividadeController');
routes.post('/categoria/itens/atividades',upload.single('image'), AtividadeController.store);
routes.get('/categoria/itens/atividades', AtividadeController.index);
//Interceptando requisições na rota raiz
//Res: retorna algo para o cliente
//Req: recebe parametro da requisição. localhost:3333?nome=Fernando
routes.get('/', (req, res) => {
    return res.send(`Api Captain Lingue`);
});



module.exports = routes;