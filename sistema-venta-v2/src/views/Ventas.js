import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react';
import ModalEditar from '../components/EditarVenta/Modal';
import Confirmacion from '../components/Confirmacion';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import ToolbarCRUD from '../components/ToolbarCRUD';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// ICONOS
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
// Globals
import {VentaL, VentaA, listarVentas} from '../services/Global';
import {apiBaseUrl} from '../utils/Api';

const tipos = [
    { label: 'Id Venta', value: 0 },
    { label: 'Nombre Cliente', value: 1 },
    { label: 'Documento Cliente', value: 2 }
];


const columnas = [
    { field: "id", headerName: "ID Venta", width: 135 },
    { field: "idProducto", headerName: "ID Producto", width: 160 },
    { field: "nombreProducto", headerName: "Producto", width: 250 },
    { field: "valorUnitario", headerName: "Valor Unitario", width: 170 },
    { field: "cantidad", headerName: "Cantidad", width: 150 },
    { field: "fecha", headerName: "Fecha", width: 200 },
    { field: "clienteDocumento", headerName: "Cliente ID", width: 160 },
    { field: "nombreCliente", headerName: "Cliente", width: 300 },
    { field: "nombreUsuario", headerName: "Encargado", width: 300 },
]

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#FFC107',
            darker: '#053e85',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});



const Ventas = () => {
    

    const [ventas, setVentas] = useState([]);

    const [estadoListado, setEstadoListado] = useState(true);

    const [estadoModal, setEstadoModal] = useState(false);

    const [ventaEditada, setVentaEditada] = useState({})

    const [estadoConfirmacion, setEstadoConfirmacion] = useState(false);

    const [resultadoBuscar, setResultadoBuscar] = useState([]);

    const [tipo, setTipo] = useState(0);

    const [dato, setDato] = useState('');

    async function obtenerVentas () {
        const ventasT = await listarVentas();
        setVentas(ventasT);
        setEstadoListado(false);
    }

    if (estadoListado) {
        obtenerVentas();
    }

    const cerrarModal = () => {
        setEstadoModal(false);
    }

    const agregar = () => {
        const ventaE = new VentaA(-1, "", "", "", "", "", "")
        setVentaEditada(ventaE);
        setEstadoModal(true);
    }

    const modificar = () => {
        if (ventaSeleccionada) {
            const ventaE = ventaSeleccionada;
            setVentaEditada(ventaE);
            setEstadoModal(true);
        }
        else {
            window.alert("Por favor seleccione un registro");
        }
    }
    var ventaSeleccionada;

    const eliminar = () => {
        if (ventaSeleccionada) {
            const ventaE = ventaSeleccionada;
            setVentaEditada(ventaE);
            setEstadoConfirmacion(true);
        }
        else {
            window.alert("Por favor seleccione un registro");
        }
    }

    const confirmarEliminacion = () => {
        fetch(`${apiBaseUrl}/ventas/${ventaEditada.id}`,
            {
                method: 'delete',
            })
            .then((res) => {
                if (res.status != 200) {
                    throw Error(res.statusText);
                }
                return res.json();
            })
            .then((json) => {
                window.alert(json.message);
                setEstadoListado(true);

            })
            .catch(function (error) {
                // Catch captura un error en tiempo de ejecución
                window.alert(`error eliminando venta [${error}]`);
            });
    }

    const cerrarConfirmacion = () => {
        setEstadoConfirmacion(false);
    }

    // const buscar = () => {

    //     fetch(`http://localhost:3010/ventas/${tipo}`,
    //         {
    //             method: 'post',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 Dato: dato
    //             })
    //         })
    //         .then((res) => res.json())
    //         .then((json) => {
    //             // var ventasT = [];
    //             json.map((item) => {
    //                 resultadoBusqueda.push(
    //                     item.Id,
    //                     item.IdProducto,
    //                     item.NombreProducto,
    //                     item.ValorUnitario,
    //                     item.Cantidad,
    //                     item.Fecha,
    //                     item.ClienteDocumento,
    //                     item.NombreCliente,
    //                     item.NombreUsuario
    //                 );
    //             });
    //             setResultadoBuscar(resultadoBusqueda);
    //             //setEstadoListado(false);
    //         })
    //         .catch(function (error) {
    //             window.alert(`error buscando venta [${error}]`);
    //         });
    // }

    return (
        <div>
            <center>
                <h1>
                    Gestión de Ventas
                </h1>
            </center>
            <ThemeProvider theme={theme}>
                <div style={{ height: 500, width: '100%' }}>
                <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
            spacing = {1}
        >
            <TextField

                select
                label="Seleccione"
                value={tipo}
                onChange={(e) => { setTipo(e.target.value) }}
                variant="standard"
                sx={{ ml: 1, flex: 1, width: 200 }}
            >
                {tipos.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar"
                inputProps={{ 'aria-label': 'buscar' }}
                onChange = {(e) => { setDato(e.target.value) }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <Button variant="contained" startIcon={<AddCircleIcon />} sx={{ m: 0.5}} onClick={agregar} >
                Agregar
            </Button>
            <Button variant="contained" startIcon={<EditIcon />} sx={{ m: 0.5}} onClick={modificar} >
                Modificar
            </Button>
            <Button variant="outlined" color="error" startIcon={<DeleteIcon />} sx={{ m: 0.5}} onClick={eliminar} >
                Eliminar
            </Button>
        </Paper>
                    <DataGrid
                        rows={ventas}
                        columns={columnas}
                        pageSize={7}
                        rowsPerPageOptions={[7]}
                        sx={{ m: 2}}
                        onSelectionModelChange={(idVentas) => {

                            const ventasSeleccionadas = ventas.filter(
                                function (fila) {
                                    return fila.id == idVentas[0];
                                }
                            )
                            ventaSeleccionada = ventasSeleccionadas[0];
                        }

                        }


                    />
                    

                    <ModalEditar open={estadoModal} cerrar={cerrarModal} venta={ventaEditada} />

                    <Confirmacion
                        open={estadoConfirmacion}
                        cerrar={cerrarConfirmacion}
                        titulo={"Eliminando Registro de Venta "}
                        mensaje={"¿Está seguro?"}
                        aceptar={confirmarEliminacion}
                    />
                </div>
            </ThemeProvider>
        </div>
    )
}

export default Ventas;