const mysql = require('mysql2');
require('dotenv').config();
const { create_db } = require('../scripts_mysql/querys');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  port: process.env.DB_USER || '',
  password: process.env.DB_PASS || '',
  multipleStatements: true
});

function initDB () {
  connection.connect(err => {
    if (err) {
      console.error('Erro ao conectar:', err);
      return;
    }

    console.log("Conexão com MySQL Server estabelecida!");

    connection.query(create_db, err => {
      if (err) {
        console.error('Erro ao executar o script SQL:', err);
      } else {
        console.log('Banco de dados e tabelas criados com sucesso!');
      }
    });
  });
}

function dropDB () {
  connection.end();
}

module.exports = { connection, initDB, dropDB };