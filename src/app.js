const express = require('express');
const cors = require('cors');
const users = require('./core/routes/users');
const db = require('./config/database');

const app = express();

const PORT = process.env.PORT || 3000;

// configurando a porta do app
app.set('port', PORT);

// iniciando configuração do banco de dados
app.db = db();

// injetando o cors
app.use(cors());

// definindo que o formato de dados a trafegar na api será json
app.use(express.json());

// importando as rotas
users(app);

module.exports = app;
