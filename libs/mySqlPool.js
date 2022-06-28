const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit : 100, //important
  host: 'localhost',
  user: 'root',
  password: 'LK271215',
  database: 'examen_desarrollo',
  debug    :  false
});

//const pool = new Pool({connectionString:URI})

module.exports = pool;
