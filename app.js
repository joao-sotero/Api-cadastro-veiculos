var express = require('express');

// CONFIGURAR AS ROTAS
const veiculo = require('./routes/logado')

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/veiculos', veiculo)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
