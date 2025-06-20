const express = require('express');
const { initDB } = require('./database/db');
const bodyParser = require('body-parser');

const participantesRoutes = require('./routes/participantes');
const cursoRoutes = require('./routes/curso');
const produtoRoutes = require('./routes/produto'); 
const avaliacaoRoutes = require('./routes/avaliacao');
const categoriaeventoRoutes = require('./routes/categoriaevento');
const cidadeRoutes = require('./routes/cidade');
const tipoingressoRoutes = require('./routes/tipoingresso');
const departamentoRoutes = require('./routes/departamento');
const estadoRoutes = require('./routes/estado');
const enderecoRoutes = require('./routes/endereco')

const app = express();
app.use(bodyParser.json());

app.use('/participantes', participantesRoutes);
app.use('/curso', cursoRoutes);
app.use('/produto', produtoRoutes); 
app.use('/avaliacao', avaliacaoRoutes);
app.use('/categoriaevento', categoriaeventoRoutes);
app.use('/cidade', cidadeRoutes);
app.use('/tipoingresso', tipoingressoRoutes);
app.use('/departamento', departamentoRoutes);
app.use('/estado', estadoRoutes);
app.use('/endereco', enderecoRoutes)

app.listen(3000, async () => {
  initDB();
  console.log('Servidor rodando na porta 3000!');
});