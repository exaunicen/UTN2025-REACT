// Exporta la conexión a la base de datos
// Se utiliza la librería mysql2 para conectarse a la base de datos

const mysql = require("mysql2");
const util = require("util");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
});

pool.query = util.promisify(pool.query);

module.exports = pool;
