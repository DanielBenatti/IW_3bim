const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');
const clienteController = require('./controllers/clienteController');

const app = express();
const port = 3000;

// Configurações do body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração do diretório de arquivos estáticos (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Configuração da view engine EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rotas
app.get('/', clienteController.list);
app.get('/add', clienteController.formAdd);
app.post('/add', clienteController.add);
app.get('/edit/:id', clienteController.formEdit);
app.post('/edit/:id', clienteController.edit);
app.get('/delete/:id', clienteController.delete);

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

