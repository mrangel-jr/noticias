const mysql = require('mysql');

const connMySQL = function() {
    console.log('Request via BD');
    return mysql.createConnection({
           host: 'localhost',
           user: 'marcos',
           password: '123mudar',
           database: 'portal_noticias'
       });
   }

module.exports = function() {
    console.log('Módulo exportado com sucesso.');
    return connMySQL;
}