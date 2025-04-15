const pool = require("./bd");

/* Consulta para listar vendedores */
async function getVendedores() {
  try {
    const query = "SELECT * FROM vendedores";
    const rows = await pool.query(query);
    return rows;
  } catch (error) {
    console.log(error);
  }
}

/* Consulta para INSERT vendedores a la base de datos */
async function insertVendedores(obj) {
  try {
    const query = "INSERT INTO vendedores SET ?";
    const rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    throw error;
  }
}

/* Consulta para eliminar un vendedor de la base de datos en funcion de su id */
async function deleteVendedores(id) {
  const query = "DELETE FROM vendedores WHERE vendedorId = ?";
  const rows = await pool.query(query, [id]);
  return rows;
}

/* Consulta para listar un Vendedor por su id */
async function getVendedoresById(id) {
  const query = "SELECT * FROM vendedores WHERE vendedorId = ? ";
  const rows = await pool.query(query, [id]);
  return rows[0];
}

/* Consulta para modificar un Vendedor por id */
async function updateVendedores(obj, id) {
  try {
    const query = "UPDATE vendedores SET ? WHERE vendedorId=?";
    const rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getVendedores,
  insertVendedores,
  deleteVendedores,
  getVendedoresById,
  updateVendedores,
};
