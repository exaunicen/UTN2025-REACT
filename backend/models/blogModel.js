const pool = require('./bd');

/* Consulta para listar todos los Blogs */
async function getBlog() {
    const query = 'SELECT * FROM blog';
    const rows = await pool.query(query);
    return rows;
}

/* Consulta para listar Blog para home */
async function getBlogTop2() {
    const query = 'SELECT * FROM blog ORDER BY creado DESC LIMIT 2';
    const rows = await pool.query(query);
    return rows;
}

/* Consulta para insertar Blogs */
async function insertBlog(obj) {
    try {
        const query = 'INSERT INTO blog SET ?';
        const rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        throw error;
    }
}

/* Consulta para eliminar un Blog en funcion de su id */
async function deleteBlog(id) {
    const query = 'DELETE FROM blog WHERE blogId = ?';
    const rows = await pool.query(query, [id]);
    return rows;
}

/* Consulta para listar un Blog por su id */
async function getBlogById(id) {
    const query = 'SELECT * FROM blog WHERE blogId = ? ';
    const rows = await pool.query(query, [id]);
    return rows[0];
}

/* Consulta para modificar un Blog por id */
async function updateBlog(obj, id) {
    try {
        const query = 'UPDATE blog SET ? WHERE blogId=?';
        const rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getBlog,
    getBlogTop2,
    insertBlog,
    deleteBlog,
    getBlogById,
    updateBlog,
};
