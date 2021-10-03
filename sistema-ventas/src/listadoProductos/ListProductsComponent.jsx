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
                                    <a href="#editUsuariosModal" class= "edit" data-bs-toggle="modal"><i class="fa-solid fa-pen-to-square"></i></a>
                                        
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
                                    <a href="#editUsuariosModal" class= "edit" data-bs-toggle="modal"><i class="fa-solid fa-pen-to-square"></i></a>
                                        
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
                                    <a href="#editUsuariosModal" class= "edit" data-bs-toggle="modal"><i class="fa-solid fa-pen-to-square"></i></a>
                                       
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <!--table--> */}

                

                {/* <!--modal-editar--> */}
                <div class="modal fade" id="editUsuariosModal" tabindex="-1" aria-labelledby="editUsuariosModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Actualizar Producto</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="modal-body">
                                    <div>
                                        <h6>(ID Producto)</h6>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Descripción</label>
                                        <input type="text" class="form-control" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Precio Unitario</label>
                                        <input type="text" class="form-control" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Estado</label>
                                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                            <option selected>Selecionar</option>
                                            <option value="1">Disponible</option>
                                            <option value="2">No disponible</option>
                                        </select>
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
        </Fragment>
    );
}

export default ListProductsComponent;