import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const columnas = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "usuario", headerName: "Usuario", width: 300 },
    { field: "nombre", headerName: "Nombre", width: 200 },
    { field: "rol", headerName: "Rol", width: 200 },
    { field: "estado", headerName: "Estado", width: 300 },
]

var Usuario = function (id, usuario, nombre, rol, estado) {
    this.id = id;
    this.usuario = usuario;
    this.nombre = nombre;
    this.rol = rol;
    this.estado = estado;
}

const obtenerEstilos = makeStyles(theme => ({
    botonAgregar: {
        borderRadius: 15,
        backgroundColor: "#21b6ae",
        padding: "10px 10px",
        fontSize: "18px"
    },
    botonModificar: {
        borderRadius: 15,
        backgroundColor: "#55ff55",
        padding: "10px 10px",
        fontSize: "18px"
    },
    botonEliminar: {
        borderRadius: 15,
        backgroundColor: "#ff5555",
        padding: "10px 10px",
        fontSize: "18px"
    }

}));

const Usuarios = () => {
    const estilos = obtenerEstilos();

    // variable que almacenará la lista de monedas
    const [usuarios, setUsuarios] = useState([]);

    const [estadoListado, setEstadoListado] = useState(true);

    const obtenerUsuarios = () => {
        // Consultar la lista de monedas desde la API
        fetch("http://localhost:3010/usuarios", { method: "get"})
        .then((res) => res.json())
        .then((json) => {
            var usuariosT = [];
            json.map((item) => {
                usuariosT.push(new Usuario(
                    item.Id,
                    item.Usuario,
                    item.Nombre,
                    item.IdRol,
                    item.Activo));
            });
            setUsuarios(usuariosT);
            setEstadoListado(false);
        });
    }

    if(estadoListado) {
        obtenerUsuarios();
    }

    const agregar = () => {
        
    }

    return(
        <div>
            <center>
                <h1>
                    Lista de Usuarios
                </h1>
            </center>
            <div style={{ height: 500, width: '100%' }}>
            <Button className={estilos.botonAgregar} onClick={agregar}>
                    Agregar
                </Button>
                <Button className={estilos.botonModificar}>
                    Actualizar
                </Button>
                <Button className={estilos.botonEliminar}>
                    Eliminar
                </Button>
                <DataGrid
                    rows={usuarios}
                    columns={columnas}
                    pageSize={7}
                    rowsPerPageOptions={[7]}


                />

            </div>
        </div>
    )
}

export default Usuarios;