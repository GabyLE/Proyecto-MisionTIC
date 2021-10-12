import React, { Fragment } from "react";
import './listVentasStyles.css';

function ListVentasComponent() {

    return (
        <Fragment>
            <div class="container">
                <div class="mt-5"></div>
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="container-fluid">
                                    <form class="d-flex">
                                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                                    </form>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteUsuariosModal"><i class="fa-solid fa-trash-can"></i>
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>
                                    <span class="custom-checkbox">
                                        <input type="checkbox" id="selectAll" />
                                        <label for="selectAll"></label>
                                    </span>
                                </th>
                                <th>ID Venta</th>
                                <th>ID Producto</th>
                                <th>Precio Unitario</th>
                                <th>Cantidad</th>
                                <th>Fecha de venta</th>
                                <th>ID Cliente</th>
                                <th>Nombre Cliente</th>
                                <th>Encargado Venta</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span class="custom-checkbox">
                                        <input type="checkbox" id="caja1" name="opcion[]" value="1" />
                                        <label for="caja1"></label>
                                    </span>
                                </td>
                                <td>GL-001</td>
                                <td>005</td>
                                <td>2000</td>
                                <td>3</td>
                                <td>16-09-2021</td>
                                <td>28048621</td>
                                <td>Kennia Esquivel</td>
                                <td>Gabriela López</td>
                                <td>
                                    <a href="#editUsuariosModal" class="edit" data-bs-toggle="modal"><i class="fa-solid fa-pen-to-square"></i></a>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="custom-checkbox">
                                        <input type="checkbox" id="caja1" name="opcion[]" value="1" />
                                        <label for="caja1"></label>
                                    </span>
                                </td>
                                <td>SC-002</td>
                                <td>004</td>
                                <td>3000</td>
                                <td>1</td>
                                <td>21-09-2021</td>
                                <td>78048621</td>
                                <td>Héctor Muñoz</td>
                                <td>Sandra Chilito</td>
                                <td>
                                    <a href="#editUsuariosModal" class="edit" data-bs-toggle="modal"><i class="fa-solid fa-pen-to-square"></i></a>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="custom-checkbox">
                                        <input type="checkbox" id="caja1" name="opcion[]" value="1" />
                                        <label for="caja1"></label>
                                    </span>
                                </td>
                                <td>YH-012</td>
                                <td>020</td>
                                <td>1500</td>                                    <td>3</td>
                                <td>30-09-2021</td>
                                <td>1015687954</td>
                                <td>Marcela Mazenet</td>
                                <td>Yerman Hernández</td>
                                <td>
                                    <a href="#editUsuariosModal" class="edit" data-bs-toggle="modal"><i class="fa-solid fa-pen-to-square"></i></a>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* modal-editar */}
                <div class="modal fade" id="editUsuariosModal" tabindex="-1" aria-labelledby="editUsuariosModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered/">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Actualizar Venta</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="modal-body">
                                    <div>
                                        <h6>(ID Venta)</h6>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">ID Producto</label>
                                        <input type="text" class="form-control" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Precio Unitario</label>
                                        <input type="text" class="form-control" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Cantidad</label>
                                        <input type="text" class="form-control" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Fecha de venta</label>
                                        <input type="text" class="form-control" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="name">ID Cliente</label>
                                        <input type="text" class="form-control" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Nombre Cliente</label>
                                        <input type="text" class="form-control" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Encargado de Venta</label>
                                        <input type="text" class="form-control" required />
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="submit" class="btn btn-primary">Guardar cambios</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--modal-editar--> */}
                </div>
            </div>
        </Fragment>
    )
}

export default ListVentasComponent;