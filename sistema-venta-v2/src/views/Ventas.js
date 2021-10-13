import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react';
//import { Button } from "@material-ui/core";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalEditar from '../components/EditarVenta/Modal';
import Confirmacion from '../components/Confirmacion';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';




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

var VentaL = function (id, idProducto, nombreProducto, valorUnitario,
    cantidad, fecha, clienteDocumento, nombreCliente, nombreUsuario) {
    this.id = id;
    this.idProducto = idProducto;
    this.nombreProducto = nombreProducto;
    this.valorUnitario = valorUnitario;
    this.cantidad = cantidad;
    this.fecha = fecha;
    this.clienteDocumento = clienteDocumento;
    this.nombreCliente = nombreCliente;
    this.nombreUsuario = nombreUsuario;
}

var VentaA = function (id, idCliente, clienteDocumento, fecha, idUsuario, idProducto, cantidad) {
    this.id = id;
    this.idProducto = idProducto;
    this.cantidad = cantidad;
    this.fecha = fecha;
    this.idCliente = idCliente;
    this.idUsuario = idUsuario
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

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

    const obtenerVentas = () => {
        // Consultar la lista de ventas desde la API
        fetch("http://localhost:3010/ventas", { method: "get" })
            .then((res) => res.json())
            .then((json) => {
                var ventasT = [];
                json.map((item) => {
                    ventasT.push(new VentaL(
                        item.Id,
                        item.IdProducto,
                        item.NombreProducto,
                        item.ValorUnitario,
                        item.Cantidad,
                        item.Fecha,
                        item.ClienteDocumento,
                        item.NombreCliente,
                        item.NombreUsuario
                    ));
                });
                setVentas(ventasT);
                setEstadoListado(false);
            });
    }

    if (estadoListado) {
        obtenerVentas();
    }

    const cerrarModal = () => {
        setEstadoModal(false);
    }

    const agregar = () => {
        const ventaE = new VentaA(-1, "", "", "", "", "")
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
        fetch(`http://localhost:3010/ventas/${ventaEditada.id}`,
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

    return (
        <div>
            <center>
                <h1>
                    Gestión de Ventas
                </h1>
            </center>
            <ThemeProvider theme={theme}>
                <div style={{ height: 500, width: '100%' }}>
                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button variant="contained" startIcon={<AddCircleIcon />} onClick={agregar} >
                            Agregar
                        </Button>
                        <Button variant="contained" startIcon={<EditIcon />} onClick={modificar} >
                            Modificar
                        </Button>
                        <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={eliminar}>
                            Eliminar
                        </Button>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Buscar"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Stack>
                    <DataGrid
                        rows={ventas}
                        columns={columnas}
                        pageSize={7}
                        rowsPerPageOptions={[7]}

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