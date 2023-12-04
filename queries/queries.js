//  ======================== GETS =======================================
const listUsers = `SELECT * FROM usuarios`;
const listRaces = `SELECT * FROM razas`;
const listClases = `SELECT * FROM clases`;
const listEquipo = `SELECT * FROM equipos`;
const listLogros = `SELECT * FROM LOGROS`;
const actividades = `SELECT * FROM registro_actividades`;
const listMazmorras = `SELECT * FROM mazmorras`;
const listPersonajes = `SELECT * FROM personajes`;
const listUserId = `SELECT * FROM usuarios WHERE id_usuario = $1`;
const listUserCorreo = `SELECT * FROM usuarios WHERE correo = $1`;


// ==========================POST ==========================================
const createPersonaje = `INSERT INTO personajes (id_usuario, nombre_personaje, nivel, experiencia, id_raza, id_clase) VALUES ($1, $2, $3, $4, $5, $6)`;



// ========================== UPDATE ==========================================



module.exports = {
    listUsers,
    listRaces,
    listClases,
    listEquipo,
    listLogros,
    actividades,
    listMazmorras,
    listPersonajes,
    listUserId,
    listUserCorreo,
    createPersonaje
}