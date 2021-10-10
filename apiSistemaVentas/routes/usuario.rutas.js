module.exports = (app) => {
    var usuarios = require('../controllers/usuario.controlador');

    // metodo que obtine la lista de usuarios
    app.get("/usuarios", usuarios.listar);

    // metodo que actualiza un usuario
    app.post("/usuarios", usuarios.actualizar);

    // metodo que eliminia un usuario
    app.delete("/usuarios/:id", usuarios.eliminar);
}