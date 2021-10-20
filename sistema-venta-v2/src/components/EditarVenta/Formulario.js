import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {apiBaseUrl} from '../../utils/Api';

const obtenerEstilos = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));


const Formulario = ({ cerrarFormulario, ventaEditada }) => {

    const estilos = obtenerEstilos();

    const [idProducto, setIdProducto] = useState(ventaEditada.idProducto);
    const [cantidad, setCantidad] = useState(ventaEditada.cantidad);
    const [fecha, setFecha] = useState(ventaEditada.fecha);
    const [idCliente, setIdCliente] = useState(ventaEditada.clienteDocumento);
    const [idUsuario, setIdUsuario] = useState(ventaEditada.idUsuario);
    const [nombreCliente, setNombreCliente] = useState(ventaEditada.nombreCliente)

    const guardar = () => {

        fetch(`${apiBaseUrl}/ventas`,
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Id: ventaEditada.id,
                    IdCliente: idCliente,
                    NombreCliente: nombreCliente,
                    Fecha: fecha,
                    IdProducto: idProducto,
                    Cantidad: cantidad,
                    IdUsuario: idUsuario
                })
            })
            .then((res) => res.json())
            .then((json) => {
                window.alert(`Respuesta: ${json.venta}`);
                cerrarFormulario();
            })
            .catch(function (error) {
                window.alert(`error agregando venta [${error}]`);
            });
    }

    return (
        <form className={estilos.root} onSubmit={guardar}>
            {ventaEditada.id == "-1" ? <h3>Agregar Venta</h3> : <h3>Modificar Venta {ventaEditada.id}</h3>}
            <TextField
                label="ID Producto"
                variant="filled"
                required
                value={idProducto}
                onChange={(e) => { setIdProducto(e.target.value) }}
            />

            <TextField
                label="Cantidad"
                variant="filled"
                required
                value={cantidad}
                onChange={(e) => { setCantidad(e.target.value) }}
            />
            <TextField
                label="Fecha"
                variant="filled"
                required
                value={fecha}
                placeholder = "AAAA-MM-DD"
                onChange={(e) => { setFecha(e.target.value) }}
            />
            <TextField
                label="ID Cliente"
                variant="filled"
                required
                value={idCliente}
                onChange={(e) => { setIdCliente(e.target.value) }}
            />
            <TextField
                label="Nombre Cliente"
                variant="filled"
                required
                value={nombreCliente}
                onChange={(e) => { setNombreCliente(e.target.value) }}
            />
            <TextField
                label="Encargado de Venta"
                variant="filled"
                required
                value={idUsuario}
                onChange={(e) => { setIdUsuario(e.target.value) }}
            />
            <div>
                <Button variant="contained" onClick={cerrarFormulario}>
                    Cancelar
                </Button>
                <Button variant="contained" type="submit" color="primary">
                    Aceptar
                </Button>
            </div>
        </form>
    )
}

export default Formulario;