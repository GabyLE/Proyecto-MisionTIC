import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react';
import ModalEditar from '../components/EditarVenta/Modal';
import Confirmacion from '../components/Confirmacion';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ToolbarCRUD from '../components/ToolbarCRUD';





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
                    <ToolbarCRUD agregar={agregar} eliminar={eliminar} modificar={modificar} />
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