import {DataGrid} from '@material-ui/data-grid';
import React, {useState} from 'react';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ModalEditar from '../components/EditarVenta/Modal';

const columnas = [
    { field: "id", headerName: "ID Venta", width: 135 },
    { field: "idProducto", headerName: "ID Producto", width: 160 },
    { field: "nombreProducto", headerName: "Producto", width: 250 },
    { field: "valorUnitario", headerName: "Valor Unitario", width: 170 },
    { field: "cantidad", headerName: "Cantidad", width: 150 },
    { field: "fecha", headerName: "Fecha", width: 200 },
    { field: "idCliente", headerName: "ID Cliente", width: 160 },
    { field: "nombreCliente", headerName: "Cliente", width: 300 },
    { field: "nombreUsuario", headerName: "Encargado", width: 300 },
]

var VentaL = function (id, idProducto, nombreProducto, valorUnitario,
    cantidad, fecha, idCliente, nombreCliente, nombreUsuario) {
    this.id = id;
    this.idProducto = idProducto;
    this.nombreProducto = nombreProducto;
    this.valorUnitario = valorUnitario;
    this.cantidad = cantidad;
    this.fecha = fecha;
    this.idCliente = idCliente;
    this.nombreCliente = nombreCliente;
    this.nombreUsuario = nombreUsuario;
}

var VentaA = function(id, idCliente, fecha, idUsuario, idProducto, cantidad) {
    this.id = id;
    this.idProducto = idProducto;
    this.cantidad = cantidad;
    this.fecha = fecha;
    this.idCliente = idCliente;
    this.idUsuario = idUsuario
}

const obtenerEstilos = makeStyles(theme => ({
    botonAgregar: {
        borderRadius: 15,
        backgroundColor: "#FFC107",
        padding: "10px 10px",
        fontSize: "18px"
    },
    botonModificar: {
        borderRadius: 15,
        backgroundColor: "#FFC107",
        padding: "10px 10px",
        fontSize: "18px"
    },
    botonEliminar: {
        borderRadius: 15,
        backgroundColor: "#ff5555",
        borderColor: "#FFC107",
        padding: "10px 10px",
        fontSize: "18px"
    }

}));

const Ventas = () => {
    const estilos = obtenerEstilos();

    const [ventas, setVentas] = useState([]);

    const [estadoListado, setEstadoListado] = useState(true);

    const [estadoModal, setEstadoModal] = useState(false);

    const [ventaEditada, setVentaEditada] = useState({})

    const obtenerVentas = () => {
        // Consultar la lista de ventas desde la API
        fetch("http://localhost:3010/ventas", {method: "get"})
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
                    item.IdCliente,
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
        const ventaE = new VentaA(-1, "","","","","")
        setVentaEditada(ventaE);
        setEstadoModal(true);
    }

    const modificar = () => {
        const ventaE = ventaSeleccionada;
        setVentaEditada(ventaE);
        setEstadoModal(true);
    }
    var ventaSeleccionada;

    return (
        <div>
            <center>
                <h1>
                    Lista de Ventas
                </h1>
            </center>
            <div style={{ height: 500, width: '100%' }}>
            <Button className={estilos.botonAgregar} onClick = {agregar} >
                    Agregar
                </Button>
                <Button className={estilos.botonModificar} onClick = {modificar} >
                    Modificar
                </Button>
                <Button className={estilos.botonEliminar} >
                    Eliminar
                </Button>
                <DataGrid
                    rows={ventas}
                    columns={columnas}
                    pageSize={7}
                    rowsPerPageOptions={[7]}

                    onSelectionModelChange = {(idVentas) => {

                        const ventasSeleccionadas = ventas.filter(
                            function(fila){
                                return fila.id == idVentas[0];
                            }
                        )
                        ventaSeleccionada = ventasSeleccionadas[0];
                    }

                    }
                    

                />

                <ModalEditar open={estadoModal} cerrar={cerrarModal} venta={ventaEditada} />
               
            </div>
        </div>
    )
}

export default Ventas;