const pool = require("./bd");
const md5 = require("md5");

/* Consulta para obtener un usuario de la base de datos */
async function getUsuario(user, password) {
  try {
    const query =
      "SELECT * FROM usuarios WHERE usuario = ? AND password = ? LIMIT 1";
    const rows = await pool.query(query, [user, md5(password)]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
}

/* Consulta para obtener todos los usuarios de la base de datos */
async function getUsuarioFull() {
  try {
    const query = "SELECT * FROM usuarios";
    const rows = await pool.query(query);
    return rows;
  } catch (error) {
    console.log(error);
  }
}

/* Consulta para INSERT usuarios a la base de datos */
async function insertUsuarios(obj) {
  try {
    const query = "INSERT INTO usuarios SET ?";
    const rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    throw error;
  }
}

/* Consulta para eliminar un Usuario de la base de datos en funcion de su id */
async function deleteUsuarios(id) {
  const query = "DELETE FROM usuarios WHERE userId = ?";
  const rows = await pool.query(query, [id]);
  return rows;
}

/* Consulta para listar un Usuario por su id */
async function getUsuariosById(id) {
  const query = "SELECT * FROM usuarios WHERE userId = ? ";
  const rows = await pool.query(query, [id]);
  return rows[0];
}

/* Consulta para modificar un Usuario por id */
async function updateUsuarios(obj, id) {
  try {
    const query = "UPDATE usuarios SET ? WHERE userId=?";
    const rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUsuario,
  getUsuarioFull,
  insertUsuarios,
  deleteUsuarios,
  getUsuariosById,
  updateUsuarios,
};
