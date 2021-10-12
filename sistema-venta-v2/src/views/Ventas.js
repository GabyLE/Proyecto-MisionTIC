import {DataGrid} from '@material-ui/data-grid';
import React, {useState} from 'react';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const columnas = [
    { field: "id", headerName: "ID Venta", width: 100 },
    { field: "idProducto", headerName: "ID Producto", width: 100 },
    { field: "nombreProducto", headerName: "Producto", width: 300 },
    { field: "valorUnitario", headerName: "Valor Unitario", width: 200 },
    { field: "cantidad", headerName: "Cantidad", width: 100 },
    { field: "fecha", headerName: "Fecha", width: 200 },
    { field: "idCliente", headerName: "ID Cliente", width: 100 },
    { field: "nombreCliente", headerName: "Cliente", width: 300 },
    { field: "nombreUsuario", headerName: "Encargado", width: 300 },
]

var Venta = function (id, idProducto, nombreProducto, valorUnitario,
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
const Ventas = () => {

    const [ventas, setVentas] = useState([]);

    const [estadoListado, setEstadoListado] = useState(true);

    const obtenerVentas = () => {
        // Consultar la lista de ventas desde la API
        fetch("http://localhost:3010/ventas", {methos: "get"})
        .then((res) => res.json())
        .then((json) => {
            var ventasT = [];
            json.map((item) => {
                ventasT.push(new Venta(
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

    return (
        <div>
            <center>
                <h1>
                    Lista de Ventas
                </h1>
            </center>
            <div style={{ height: 500, width: '100%' }}>
                
                <DataGrid
                    rows={ventas}
                    columns={columnas}
                    pageSize={7}
                    rowsPerPageOptions={[7]}

                    

                />

               
            </div>
        </div>
    )
}

export default Ventas;