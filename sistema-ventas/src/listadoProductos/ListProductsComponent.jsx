import React, { Fragment } from "react";
import './listProductsStyles.css';

function ListProductsComponent() {
    return (
        <Fragment>
                {/* <!--table--> */}
                <div class="container">
                    <div class="mt-5"></div>
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="container-fluid">
                                        <form class="d-flex">
                                            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                                            <button class ="btn btn-outline-success" type ="submit">Buscar</button>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#addUsuariosModal"><i class="material-icons">&#xE147;</i>
                                        Registrar
                                    </button>
                                    <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteUsuariosModal"><i class="material-icons">&#xE147;</i>
                                        Eliminar
                                    </button>
                                    {/* <!-- <a href="#addUsuariosModal" class="btn btn-outline-primary" data-toggle="modal"><i class="material-icons">&#xE147;</i>Usuario</a> -->
                                    <!-- <a href="#deleteUsuariosModal" class="btn btn-outline-danger" data-toggle="modal"><i class="material-icons">&#xE147;</i>Eliminar</a> --> */}
                                </div>
                            </div>
                        </div>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="selectAll"/>
                                            <label for="selectAll"></label>
                                        </span>
                                    </th>
                                    <th>Id producto</th>
                                    <th>Descripcion</th>
                                    <th>Valor unitario</th>
                                    <th>Estado</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="caja1" name="opcion[]" value="1"/>
                                            <label for="caja1"></label>
                                        </span>
                                    </td>
                                    <td>Camiseta x</td>
                                    <td>Camiseta hecha en seda de mariposa </td>
                                    <td>78.000</td>
                                    <td>Disponible</td>
                                    <td>
                                        <a href="#editUsuariosModal" class="edit" data-bs-toggle="modal"><i class="material-icons" data-bs-toggle="tooltip" title="Editar">&#xE254;</i></a>
                                        <a href="#deleteUsuariosModal" class="delete" data-bs-toggle="modal"><i class="material-icons" data-bs-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="caja1" name="opcion[]" value="1"/>
                                            <label for="caja1"></label>
                                        </span>
                                    </td>
                                    <td>Pantalon jeans</td>
                                    <td>Jeans stresch color azul celeste</td>
                                    <td>99.000</td>
                                    <td>No Disponible</td>
                                    <td>
                                        <a href="#editUsuariosModal" class="edit" data-bs-toggle="modal"><i class="material-icons" data-bs-toggle="tooltip" title="Editar">&#xE254;</i></a>
                                        <a href="#deleteUsuariosModal" class="delete" data-bs-toggle="modal"><i class="material-icons" data-bs-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="caja1" name="opcion[]" value="1"/>
                                            <label for="caja1"></label>
                                        </span>
                                    </td>
                                    <td>tenis Nike</td>
                                    <td>Tenis nike air color blanco</td>
                                    <td>220.000</td>
                                    <td>Disponible</td>
                                    <td>
                                        <a href="#editUsuariosModal" class="edit" data-bs-toggle="modal"><i class="material-icons" data-bs-toggle="tooltip" title="Editar">&#xE254;</i></a>
                                        <a href="#deleteUsuariosModal" class="delete" data-bs-toggle="modal"><i class="material-icons" data-bs-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <!--table--> */}

                {/* <!--modal-añadir--> */}
                <div class="modal fade" id="addUsuariosModal" tabindex="-1" aria-labelledby="addUsuariosModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Registrar Venta</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="name">ID Venta</label>
                                    <input type="text" class="form-control" required/>
                                </div>
                                <div class="form-group">
                                    <label for="name">ID Producto</label>
                                    <input type="text" class="form-control" required/>
                                </div>
                                <div class="form-group">
                                    <label for="name">Precio Unitario</label>
                                    <input type="text" class="form-control" required/>
                                </div>
                                <div class="form-group">
                                    <label for="name">Cantidad</label>
                                    <input type="text" class="form-control" required/>
                                </div>
                                <div class="form-group">
                                    <label for="name">Fecha de venta</label>
                                    <input type="text" class="form-control" required/>
                                </div>
                                <div class="form-group">
                                    <label for="name">ID Cliente</label>
                                    <input type="text" class="form-control" required/>
                                </div>
                                <div class="form-group">
                                    <label for="name">Nombre Cliente</label>
                                    <input type="text" class="form-control" required/>
                                </div>
                                <div class="form-group">
                                    <label for="name">Encargado de Venta</label>
                                    <input type="text" class="form-control" required/>
                                </div>
                                {/* <!-- <div class="form-group">
                                    <label for="name">Rol</label>
                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                        <option selected>Selecionar</option>
                                        <option value="1">Administrador</option>
                                        <option value="2">Gerente</option>
                                        <option value="3">Operario</option>
                                        <option value="4">Vendedor</option>
                                    </select>
                                    <input type="text" class="form-control" required
                                </div> --> */}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" class="btn btn-primary">Guardar cambios</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--modal-añadir--> */}

                {/* <!--modal-editar--> */}
                <div class="modal fade" id="editUsuariosModal" tabindex="-1" aria-labelledby="editUsuariosModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
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
                                        <input type="text" class="form-control" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Precio Unitario</label>
                                        <input type="text" class="form-control" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Cantidad</label>
                                        <input type="text" class="form-control" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Fecha de venta</label>
                                        <input type="text" class="form-control" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">ID Cliente</label>
                                        <input type="text" class="form-control" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Nombre Cliente</label>
                                        <input type="text" class="form-control" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Encargado de Venta</label>
                                        <input type="text" class="form-control" required/>
                                    </div>
                                    {/* <!-- <div class="form-group">
                                        <label for="name">Rol</label>
                                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                            <option selected>Selecionar</option>
                                            <option value="1">Administrador</option>
                                            <option value="2">Gerente</option>
                                            <option value="3">Operario</option>
                                            <option value="4">Vendedor</option>
                                        </select>
                                        <input type="text" class="form-control" required
                                    </div> --> */}
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="submit" class="btn btn-primary">Guardar cambios</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--modal-editar--> */}

                    {/* <!--modal-eliminar--> */}
                    <div class="modal fade" id="deleteUsuariosModal" tabindex="-1" aria-labelledby="deleteUsuariosModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Borrar Usuario</h4>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p>Esta seguro de borrar el usuario</p>
                                    <p class="text-warning"><small>Esta acción es definitiva</small></p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="submit" class="btn btn-primary">Borrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--modal-eliminar--> */}



                </div>
        </Fragment>
    );
}

export default ListProductsComponent;