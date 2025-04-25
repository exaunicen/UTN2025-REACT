const pool = require('./bd');

/* Consulta que me devuelve las 3 ultimas propiedades ingresadas */
async function getPropiedadesTop3() {
    try {
        const query = 'SELECT * FROM propiedades ORDER BY Id DESC LIMIT 3';
        const rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

/* Consulta que devuelve el listado de propiedades total */
async function getPropiedadesFull() {
    try {
        const query = 'SELECT * FROM propiedades';
        const rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

/* Consulta para INSERT propiedades a la base de datos */
async function insertPropiedades(obj) {
    try {
        const query = 'INSERT INTO propiedades SET ?';
        const rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        throw error;
    }
}

/* Consulta para eliminar una Propiedad en funcion de su id */
async function deletePropiedades(id) {
    const query = 'DELETE FROM propiedades WHERE Id = ?';
    const rows = await pool.query(query, [id]);
    return rows;
}

/* Consulta para listar una Propiedad por su id */
async function getPropiedadesById(id) {
    const query = 'SELECT * FROM propiedades WHERE Id = ? ';
    const rows = await pool.query(query, [id]);
    return rows[0];
}

/* Consulta para modificar una Propiedad por id */
async function updatePropiedades(obj, id) {
    try {
        const query = 'UPDATE propiedades SET ? WHERE Id=?';
        const rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getPropiedadesTop3,
    getPropiedadesFull,
    insertPropiedades,
    deletePropiedades,
    getPropiedadesById,
    updatePropiedades,
};
