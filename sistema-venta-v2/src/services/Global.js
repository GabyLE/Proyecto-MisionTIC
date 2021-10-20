import {apiBaseUrl} from '../utils/Api';

export const VentaL = function (id, idProducto, nombreProducto, valorUnitario,
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

export const VentaA = function (id, clienteDocumento,nombreCliente, fecha, idUsuario, idProducto, cantidad) {
    this.id = id;
    this.idProducto = idProducto;
    this.cantidad = cantidad;
    this.fecha = fecha;
    this.clienteDocumento = clienteDocumento;
    this.nombreCliente = nombreCliente;
    this.idUsuario = idUsuario
}

export const listarVentas = () => {
    // Consultar la lista de ventas desde la API
    return fetch(`${apiBaseUrl}/ventas`, { method: "get" })
    .then((res) => {
        if(!res.ok) {
            throw new Error(`HTTP error, estado = ${res.status}`);
        }
        return res.json();
    })
    .then((json) => {
        var ventas = [];
        json.map((item) => {
            ventas.push(new VentaL(
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
        return ventas;
    })
    .catch(function (error) {
        window.alert(`Error consultando ventas [${error}]`);
    });
}